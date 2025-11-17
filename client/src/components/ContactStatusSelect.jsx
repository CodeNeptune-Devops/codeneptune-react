// components/ContactStatusSelect.jsx
'use client';

import { useUpdateContactStatus } from '@/hooks/useUpdateContactStatus';
import { toast } from 'sonner'; // or your preferred toast library

const STATUS_OPTIONS = [
  { value: 0, label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
  { value: 1, label: 'New', color: 'bg-blue-100 text-blue-800' },
  { value: 2, label: 'In Progress', color: 'bg-orange-100 text-orange-800' },
  { value: 3, label: 'Completed', color: 'bg-green-100 text-green-800' },
];

export default function ContactStatusSelect({ contactId, currentStatus }) {
  const { mutate: updateStatus, isPending } = useUpdateContactStatus();

  const handleStatusChange = (e) => {
    const newStatus = parseInt(e.target.value);

    updateStatus(
      { id: contactId, status: newStatus },
      {
        onSuccess: () => {
          toast.success('Status updated successfully');
        },
        onError: (error) => {
          toast.error(error.message || 'Failed to update status');
        },
      }
    );
  };

  const currentStatusLabel = STATUS_OPTIONS.find(
    (opt) => opt.value === currentStatus
  )?.label || 'Unknown';

  return (
    <div className="relative">
      <select
        value={currentStatus}
        onChange={handleStatusChange}
        disabled={isPending}
        className={`
          px-3 py-2 rounded-md border border-gray-300 
          focus:outline-none focus:ring-2 focus:ring-blue-500
          disabled:opacity-50 disabled:cursor-not-allowed
          ${STATUS_OPTIONS.find((opt) => opt.value === currentStatus)?.color}
        `}
      >
        {STATUS_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {isPending && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          <div className="animate-spin h-4 w-4 border-2 border-gray-500 border-t-transparent rounded-full"></div>
        </div>
      )}
    </div>
  );
}

// Alternative: Badge-style display with dropdown
export function ContactStatusBadge({ contactId, currentStatus }) {
  const { mutate: updateStatus, isPending } = useUpdateContactStatus();

  const currentOption = STATUS_OPTIONS.find((opt) => opt.value === currentStatus);

  const handleStatusChange = (newStatus) => {
    updateStatus(
      { id: contactId, status: newStatus },
      {
        onSuccess: () => {
          toast.success('Status updated successfully');
        },
        onError: (error) => {
          toast.error(error.message || 'Failed to update status');
        },
      }
    );
  };

  return (
    <div className="relative inline-block">
      <select
        value={currentStatus}
        onChange={(e) => handleStatusChange(parseInt(e.target.value))}
        disabled={isPending}
        className={`
          appearance-none px-3 py-1.5 pr-8 rounded-full font-medium text-sm
          cursor-pointer border-0 focus:outline-none focus:ring-2 focus:ring-offset-1
          disabled:opacity-50 disabled:cursor-not-allowed
          ${currentOption?.color}
        `}
      >
        {STATUS_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
        {isPending ? (
          <div className="animate-spin h-3 w-3 border-2 border-gray-500 border-t-transparent rounded-full"></div>
        ) : (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </div>
    </div>
  );
}