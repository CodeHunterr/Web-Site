"use client";

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";

import type {
  ContactFormMessages,
  FormFieldConfig,
} from "../../content/types";
import {
  contactFormEndpoint,
  createEmptyContactFormPayload,
  hasContactFormErrors,
  isContactFormFieldName,
  normalizeContactFormPayload,
  validateContactFormPayload,
  type ContactFieldErrors,
  type ContactSubmitCode,
} from "../../lib/contact-form";

type ContactFormCardProps = {
  title: string;
  description: string;
  fields: ReadonlyArray<FormFieldConfig>;
  messages: ContactFormMessages;
  submitLabel: string;
  className?: string;
  headingClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  formClassName?: string;
  fieldClassName?: string;
  fieldFullWidthClassName?: string;
  fieldControlClassName?: string;
  fieldInvalidClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  textareaClassName?: string;
  submitClassName?: string;
  statusClassName?: string;
  statusSuccessClassName?: string;
  statusErrorClassName?: string;
  fieldHintClassName?: string;
};

type FormStatus = {
  tone: "success" | "error";
  message: string;
};

function joinClasses(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

function getAutoComplete(
  name: string,
  type: FormFieldConfig["type"],
) {
  switch (name) {
    case "name":
    case "fullName":
      return "name";
    case "company":
      return "organization";
    case "email":
      return "email";
    case "phone":
      return "tel";
    default:
      return type === "textarea" ? "off" : undefined;
  }
}

function getFieldErrorMessage(
  errorCode: ContactFieldErrors[keyof ContactFieldErrors],
  messages: ContactFormMessages,
) {
  if (errorCode === "invalid_email") {
    return messages.validationEmail;
  }

  return messages.validationRequired;
}

function getSubmitErrorMessage(
  code: ContactSubmitCode | undefined,
  messages: ContactFormMessages,
) {
  if (code === "invalid_email") {
    return messages.validationEmail;
  }

  if (code === "required") {
    return messages.validationRequired;
  }

  return messages.error;
}

export function ContactFormCard({
  title,
  description,
  fields,
  messages,
  submitLabel,
  className,
  headingClassName,
  titleClassName,
  descriptionClassName,
  formClassName,
  fieldClassName,
  fieldFullWidthClassName,
  fieldControlClassName,
  fieldInvalidClassName,
  labelClassName,
  inputClassName,
  textareaClassName,
  submitClassName,
  statusClassName,
  statusSuccessClassName,
  statusErrorClassName,
  fieldHintClassName,
}: ContactFormCardProps) {
  const [formValues, setFormValues] = useState(createEmptyContactFormPayload);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<FormStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormValues(createEmptyContactFormPayload());
    setFieldErrors({});
    setStatus(null);
  }, [fields]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.currentTarget;

    if (!isContactFormFieldName(name)) {
      return;
    }

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setFieldErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };

      delete nextErrors[name];

      return nextErrors;
    });

    if (status?.tone === "error") {
      setStatus(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = normalizeContactFormPayload(formValues);
    const nextErrors = validateContactFormPayload(payload);

    setFormValues(payload);
    setFieldErrors(nextErrors);

    if (hasContactFormErrors(nextErrors)) {
      setStatus({
        tone: "error",
        message:
          nextErrors.email === "invalid_email"
            ? messages.validationEmail
            : messages.validationRequired,
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { code?: ContactSubmitCode }
        | null;

      if (!response.ok) {
        setStatus({
          tone: "error",
          message: getSubmitErrorMessage(result?.code, messages),
        });
        return;
      }

      setFormValues(createEmptyContactFormPayload());
      setFieldErrors({});
      setStatus({
        tone: "success",
        message: messages.success,
      });
    } catch {
      setStatus({
        tone: "error",
        message: messages.error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={joinClasses(className)} data-reveal="default">
      <div className={joinClasses(headingClassName)}>
        <h2 className={joinClasses(titleClassName)}>{title}</h2>
        <p className={joinClasses(descriptionClassName)}>{description}</p>
      </div>

      <form className={joinClasses(formClassName)} noValidate onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div
            key={field.name}
            className={joinClasses(
              fieldClassName,
              field.fullWidth ? fieldFullWidthClassName : undefined,
            )}
          >
            <div
              className={joinClasses(
                fieldControlClassName,
                fieldErrors[field.name] ? fieldInvalidClassName : undefined,
              )}
            >
              {field.type === "textarea" ? (
                <textarea
                  autoComplete={getAutoComplete(field.name, field.type)}
                  aria-invalid={fieldErrors[field.name] ? "true" : undefined}
                  className={joinClasses(textareaClassName)}
                  id={field.name}
                  name={field.name}
                  placeholder=" "
                  required={field.required}
                  rows={field.rows ?? 5}
                  value={formValues[field.name]}
                  onChange={handleChange}
                />
              ) : (
                <input
                  autoComplete={getAutoComplete(field.name, field.type)}
                  aria-invalid={fieldErrors[field.name] ? "true" : undefined}
                  className={joinClasses(inputClassName)}
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder=" "
                  required={field.required}
                  value={formValues[field.name]}
                  onChange={handleChange}
                />
              )}

              <label className={joinClasses(labelClassName)} htmlFor={field.name}>
                {field.label}
              </label>
            </div>

            {fieldErrors[field.name] ? (
              <span className={joinClasses(fieldHintClassName)}>
                {getFieldErrorMessage(fieldErrors[field.name], messages)}
              </span>
            ) : null}
          </div>
        ))}

        {status ? (
          <p
            className={joinClasses(
              statusClassName,
              status.tone === "success"
                ? statusSuccessClassName
                : statusErrorClassName,
            )}
            role={status.tone === "success" ? "status" : "alert"}
          >
            {status.message}
          </p>
        ) : null}

        <button
          className={joinClasses(submitClassName)}
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? messages.sending : submitLabel}
        </button>
      </form>
    </div>
  );
}
