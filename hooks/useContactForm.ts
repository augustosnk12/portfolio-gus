"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';
import type { Locale } from "../lib/i18n";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  updateField: (field: keyof ContactFormData, value: string) => void;
  submitForm: (locale: Locale) => Promise<void>;
  resetForm: () => void;
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
    // Clear success when user starts typing again
    if (isSuccess) setIsSuccess(false);
  };

  const validateForm = (): string | null => {
    if (!formData.firstName.trim()) return "First name is required";
    if (!formData.lastName.trim()) return "Last name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!formData.message.trim()) return "Message is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email))
      return "Please enter a valid email address";

    if (formData.message.trim().length < 10)
      return "Message must be at least 10 characters long";

    return null;
  };

  const submitForm = async (locale: Locale) => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const result = await emailjs.sendForm(
        "service_7r94jpt",
        "template_pd9rhmy",
        formData as any,
        "yYu3wEbaKRGsNXPv6"
      );
      if (result.status !== 200) setError("Failed to send message");

      setIsSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
  };

  return {
    formData,
    isSubmitting,
    isSuccess,
    error,
    updateField,
    submitForm,
    resetForm,
  };
}
