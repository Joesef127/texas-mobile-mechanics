"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const { isSubmitting, statusMessage, handleSubmit } = useContactForm();

  const inputClasses =
    "font-body font-normal text-[17px] text-ink-text bg-field border border-ink-line rounded-[4px] p-[14px] w-full transition-colors duration-200 ease-brand focus:outline-none focus:border-brand-red focus:bg-field-focus";

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="grid grid-cols-1 xs:grid-cols-2 gap-4"
    >
      <input
        type="text"
        name="_honey"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      <label className="grid gap-[6px] text-[15px] text-ink-muted">
        Name
        <input
          name="name"
          required
          autoComplete="name"
          className={inputClasses}
        />
      </label>
      <label className="grid gap-[6px] text-[15px] text-ink-muted">
        Email
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClasses}
        />
      </label>
      <label className="grid gap-[6px] text-[15px] text-ink-muted">
        Phone
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClasses}
        />
      </label>
      <label className="grid gap-[6px] text-[15px] text-ink-muted">
        Subject
        <input
          name="subject"
          placeholder="Car make, model and year"
          className={inputClasses}
        />
      </label>
      <label className="col-span-full grid gap-[6px] text-[15px] text-ink-muted">
        Message
        <textarea
          name="message"
          placeholder="What is your car doing?"
          className={`${inputClasses} min-h-[140px] resize-y`}
        />
      </label>
      <Button type="submit" variant="red" disabled={isSubmitting}>
        Send message
      </Button>
      <p
        id="note"
        role="status"
        className="text-[14px] text-ink-muted self-center"
      >
        {statusMessage}
      </p>
    </form>
  );
}
