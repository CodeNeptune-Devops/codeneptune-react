'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

const updateContactStatus = async ({ id, status }) => {
  const response = await fetch(`/api/contact/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to update status');
  }

  return data;
};

export const useUpdateContactStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateContactStatus,
    onSuccess: () => {
      // Invalidate and refetch contact submissions
      queryClient.invalidateQueries({ queryKey: ['contactSubmissions'] });
    },
  });
};