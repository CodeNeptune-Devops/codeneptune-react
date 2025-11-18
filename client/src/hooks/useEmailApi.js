// hooks/useEmailApi.js
'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// ============= Query Keys =============
export const emailKeys = {
  all: ['email'],
  settings: () => [...emailKeys.all, 'settings'],
  smtp: () => [...emailKeys.all, 'smtp'],
  resend: () => [...emailKeys.all, 'resend'],
};

// ============= API Functions =============
const api = {
  // Email Settings
  getSettings: async () => {
    const res = await fetch('/api/email/settings');
    if (!res.ok) throw new Error('Failed to fetch email settings');
    return res.json();
  },

  updateActiveProvider: async (provider) => {
    const res = await fetch('/api/email/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ activeProvider: provider }),
    });
    if (!res.ok) throw new Error('Failed to update active provider');
    return res.json();
  },

  // SMTP Config
  getSmtpConfig: async () => {
    const res = await fetch('/api/email/smtp');
    if (!res.ok) throw new Error('Failed to fetch SMTP config');
    return res.json();
  },

  saveSmtpConfig: async (config) => {
    const res = await fetch('/api/email/smtp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config),
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || 'Failed to save SMTP config');
    }
    return res.json();
  },

  deleteSmtpConfig: async () => {
    const res = await fetch('/api/email/smtp', { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete SMTP config');
    return res.json();
  },

  // Resend Config
  getResendConfig: async () => {
    const res = await fetch('/api/email/resend');
    if (!res.ok) throw new Error('Failed to fetch Resend config');
    return res.json();
  },

  saveResendConfig: async (config) => {
    const res = await fetch('/api/email/resend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config),
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || 'Failed to save Resend config');
    }
    return res.json();
  },

  deleteResendConfig: async () => {
    const res = await fetch('/api/email/resend', { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete Resend config');
    return res.json();
  },

  // Send Email
  sendEmail: async (emailData) => {
    const res = await fetch('/api/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData),
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || 'Failed to send email');
    }
    return res.json();
  },
};

// ============= Query Hooks =============
export const useEmailSettings = (options = {}) => {
  return useQuery({
    queryKey: emailKeys.settings(),
    queryFn: api.getSettings,
    ...options,
  });
};

export const useSmtpConfig = (options = {}) => {
  return useQuery({
    queryKey: emailKeys.smtp(),
    queryFn: api.getSmtpConfig,
    ...options,
  });
};

export const useResendConfig = (options = {}) => {
  return useQuery({
    queryKey: emailKeys.resend(),
    queryFn: api.getResendConfig,
    ...options,
  });
};

// ============= Mutation Hooks =============
export const useUpdateActiveProvider = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.updateActiveProvider,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: emailKeys.settings() });
    },
  });
};

export const useSaveSmtpConfig = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.saveSmtpConfig,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: emailKeys.smtp() });
      queryClient.invalidateQueries({ queryKey: emailKeys.settings() });
    },
  });
};

export const useDeleteSmtpConfig = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.deleteSmtpConfig,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: emailKeys.smtp() });
      queryClient.invalidateQueries({ queryKey: emailKeys.settings() });
    },
  });
};

export const useSaveResendConfig = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.saveResendConfig,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: emailKeys.resend() });
      queryClient.invalidateQueries({ queryKey: emailKeys.settings() });
    },
  });
};

export const useDeleteResendConfig = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.deleteResendConfig,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: emailKeys.resend() });
      queryClient.invalidateQueries({ queryKey: emailKeys.settings() });
    },
  });
};

export const useSendEmail = () => {
  return useMutation({
    mutationFn: api.sendEmail,
  });
};