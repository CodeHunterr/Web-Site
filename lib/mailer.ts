import "server-only";

import nodemailer from "nodemailer";

import type { ContactFormPayload } from "./contact-form";

type MailConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
  to: string;
  tlsServername?: string;
  tlsRejectUnauthorized: boolean;
};

let transporter:
  | ReturnType<typeof nodemailer.createTransport>
  | null = null;

export class MailConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MailConfigError";
  }
}

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new MailConfigError(`Missing environment variable: ${name}`);
  }

  return value;
}

function readMailConfig(): MailConfig {
  const port = Number(getRequiredEnv("SMTP_PORT"));

  if (!Number.isFinite(port)) {
    throw new MailConfigError("SMTP_PORT must be a valid number.");
  }

  return {
    host: getRequiredEnv("SMTP_HOST"),
    port,
    secure: process.env.SMTP_SECURE === "true",
    user: getRequiredEnv("SMTP_USER"),
    pass: getRequiredEnv("SMTP_PASS"),
    to:
      process.env.CONTACT_EMAIL
      ?? process.env.MAIL_TO
      ?? getRequiredEnv("SMTP_USER"),
    tlsServername: process.env.SMTP_TLS_SERVERNAME,
    tlsRejectUnauthorized:
      process.env.SMTP_TLS_REJECT_UNAUTHORIZED !== "false",
  };
}

function getTransporter(config: MailConfig) {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.pass,
      },
      tls: {
        rejectUnauthorized: config.tlsRejectUnauthorized,
        ...(config.tlsServername
          ? { servername: config.tlsServername }
          : {}),
      },
    });
  }

  return transporter;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function sendContactFormEmail(payload: ContactFormPayload) {
  const config = readMailConfig();
  const activeTransporter = getTransporter(config);
  const mailSubject = `Yeni \u0130leti\u015fim Formu G\u00f6nderimi - ${payload.subject}`;

  const lines = [
    "Yeni \u0130leti\u015fim Formu G\u00f6nderimi",
    "",
    `Tam Ad\u0131: ${payload.name}`,
    `\u015eirket: ${payload.company || "-"}`,
    `E-posta: ${payload.email}`,
    `Telefon: ${payload.phone || "-"}`,
    `Konu: ${payload.subject}`,
    "",
    "Mesaj:",
    payload.message,
  ];

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.7;">
      <h2 style="margin: 0 0 16px; font-size: 22px;">Yeni \u0130leti\u015fim Formu G\u00f6nderimi</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          <tr><td style="padding: 8px 0; font-weight: 700;">Tam Ad\u0131:</td><td style="padding: 8px 0;">${escapeHtml(payload.name)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700;">\u015eirket:</td><td style="padding: 8px 0;">${escapeHtml(payload.company || "-")}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700;">E-posta:</td><td style="padding: 8px 0;">${escapeHtml(payload.email)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700;">Telefon:</td><td style="padding: 8px 0;">${escapeHtml(payload.phone || "-")}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700;">Konu:</td><td style="padding: 8px 0;">${escapeHtml(payload.subject)}</td></tr>
        </tbody>
      </table>
      <div style="margin-top: 20px;">
        <p style="margin: 0 0 8px; font-weight: 700;">Mesaj:</p>
        <div style="padding: 16px; border: 1px solid #d9e2ec; border-radius: 12px; background: #f8fafc; white-space: pre-wrap;">${escapeHtml(payload.message)}</div>
      </div>
    </div>
  `.trim();

  await activeTransporter.sendMail({
    to: config.to,
    from: config.user,
    replyTo: payload.email,
    subject: mailSubject,
    text: lines.join("\n"),
    html,
  });
}
