// hooks/useContactForm.js
'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// ==================== SUBMIT FORM ====================
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

// ==================== UPDATE STATUS WITH NOTE ====================
const updateContactStatus = async ({ id, statusData }) => {
  const response = await fetch(`/api/contact/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(statusData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to update status');
  }

  return response.json();
};

export const useUpdateContactStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateContactStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
      queryClient.invalidateQueries({ queryKey: ['statusHistory'] });
    },
  });
};

// ==================== GET STATUS HISTORY ====================
const fetchStatusHistory = async (contactId) => {
  const response = await fetch(`/api/contact/${contactId}/history`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch status history');
  }
  
  return response.json();
};

export const useStatusHistory = (contactId, options = {}) => {
  return useQuery({
    queryKey: ['statusHistory', contactId],
    queryFn: () => fetchStatusHistory(contactId),
    enabled: !!contactId,
    staleTime: 60000, // 1 minute
    ...options
  });
};

// ==================== DELETE NOTE ====================
const deleteNote = async ({ contactId, noteId }) => {
  const response = await fetch(`/api/contact/${contactId}/history/${noteId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to delete note');
  }

  return response.json();
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNote,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['statusHistory', variables.contactId] });
    },
  });
};

// ==================== UPDATE NOTE ====================
const updateNote = async ({ contactId, noteId, updateData }) => {
  const response = await fetch(`/api/contact/${contactId}/history/${noteId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to update note');
  }

  return response.json();
};

export const useUpdateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNote,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['statusHistory', variables.contactId] });
    },
  });
};

// ==================== DELETE CONTACT ====================
const deleteContact = async (contactId) => {
  const response = await fetch(`/api/contact/${contactId}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Failed to delete contact');
  }

  return response.json();
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
  });
};