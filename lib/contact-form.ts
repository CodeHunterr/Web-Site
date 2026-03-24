export const contactFieldNames = [
  "name",
  "company",
  "email",
  "phone",
  "subject",
  "message",
] as const;

export const contactFormEndpoint = "/api/forms/contact";

export type ContactFormFieldName = (typeof contactFieldNames)[number];

export type ContactFormPayload = Record<ContactFormFieldName, string>;

export type ContactValidationCode = "required" | "invalid_email";

export type ContactFieldErrors = Partial<
  Record<ContactFormFieldName, ContactValidationCode>
>;

export type ContactSubmitCode =
  | ContactValidationCode
  | "invalid_payload"
  | "not_configured"
  | "send_failed";

const requiredContactFields = ["name", "email", "subject", "message"] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function toTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function isContactFormFieldName(
  value: string,
): value is ContactFormFieldName {
  return contactFieldNames.includes(value as ContactFormFieldName);
}

export function createEmptyContactFormPayload(): ContactFormPayload {
  return {
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
}

export function normalizeContactFormPayload(input: unknown): ContactFormPayload {
  const source = isRecord(input) ? input : {};

  return {
    name: toTrimmedString(source.name ?? source.fullName),
    company: toTrimmedString(source.company),
    email: toTrimmedString(source.email),
    phone: toTrimmedString(source.phone),
    subject: toTrimmedString(source.subject),
    message: toTrimmedString(source.message),
  };
}

export function validateContactFormPayload(
  payload: ContactFormPayload,
): ContactFieldErrors {
  const fieldErrors: ContactFieldErrors = {};

  for (const fieldName of requiredContactFields) {
    if (!payload[fieldName]) {
      fieldErrors[fieldName] = "required";
    }
  }

  if (payload.email && !emailPattern.test(payload.email)) {
    fieldErrors.email = "invalid_email";
  }

  return fieldErrors;
}

export function hasContactFormErrors(fieldErrors: ContactFieldErrors) {
  return Object.keys(fieldErrors).length > 0;
}
