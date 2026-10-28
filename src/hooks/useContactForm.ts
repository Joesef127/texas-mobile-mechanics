"use client";

import { FormEvent, useCallback, useState } from "react";
import { siteConfig } from "@/data/siteConfig";

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    // Honeypot check
    if (formData.get("_honey")) return;

    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const subject =
      String(formData.get("subject") || "").trim() || "Free diagnosis request";
    const message = String(formData.get("message") || "");

    setIsSubmitting(true);
    setStatusMessage("Sending message...");

    try {
      const res = await fetch(siteConfig.formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: phone || "Not provided",
          subject,
          message,
          _subject: "New Lead: " + subject,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await res.json();
      if (!res.ok || data.success === "false" || data.success === false) {
        throw new Error(data.message || "Submission failed");
      }

      setStatusMessage("Message sent! We'll get back to you shortly.");
      formEl.reset();
    } catch {
      // Fallback to mailto so no customer lead is ever lost
      const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;
      setStatusMessage("Opening your email app...");
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  return {
    isSubmitting,
    statusMessage,
    handleSubmit,
  };
}
