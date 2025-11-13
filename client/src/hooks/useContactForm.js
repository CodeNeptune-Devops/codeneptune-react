// hooks/useContactForm.js
'use client';

import { useMutation } from '@tanstack/react-query';

const submitContactForm = async (formData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || 'Failed to submit form');
  }

  return data;
};

export const useContactForm = () => {
  return useMutation({
    mutationFn: submitContactForm,
  });
};
