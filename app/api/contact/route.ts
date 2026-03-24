import { NextResponse } from "next/server";

import {
  hasContactFormErrors,
  normalizeContactFormPayload,
  validateContactFormPayload,
  type ContactSubmitCode,
} from "../../../lib/contact-form";
import { MailConfigError, sendContactFormEmail } from "../../../lib/mailer";

export const runtime = "nodejs";

function createErrorResponse(code: ContactSubmitCode, status: number) {
  return NextResponse.json({ ok: false, code }, { status });
}

export async function POST(request: Request) {
  let payload: ReturnType<typeof normalizeContactFormPayload>;

  try {
    const body = await request.json();
    payload = normalizeContactFormPayload(body);
  } catch {
    return createErrorResponse("invalid_payload", 400);
  }

  const fieldErrors = validateContactFormPayload(payload);

  if (hasContactFormErrors(fieldErrors)) {
    const code = fieldErrors.email === "invalid_email"
      ? "invalid_email"
      : "required";

    return createErrorResponse(code, 400);
  }

  try {
    await sendContactFormEmail(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    console.error("Contact form submission failed:", message);

    if (error instanceof MailConfigError) {
      return createErrorResponse("not_configured", 500);
    }

    return createErrorResponse("send_failed", 500);
  }
}
