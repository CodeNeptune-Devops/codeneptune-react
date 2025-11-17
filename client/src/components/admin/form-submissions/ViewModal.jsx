'use client';

import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Search, Download, Eye, ChevronLeft, ChevronRight, RefreshCw, Filter, X, Edit2, Check } from 'lucide-react';

// ViewModal Component
const ViewModal = ({ submission, onClose, onStatusChange }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  if (!submission) return null;

  const formatDate = (date) => {
    return new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const STATUS_MAP = {
    0: 'Cancelled',
    1: 'New',
    2: 'Contacted',
    3: 'Converted Lead'
  };

  const getStatusColor = (status) => {
    const colors = {
      0: 'bg-red-100 text-red-800 border-red-200',
      1: 'bg-blue-100 text-blue-800 border-blue-200',
      2: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      3: 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const handleStatusChange = async (newStatus) => {
    setIsUpdating(true);
    try {
      await onStatusChange(submission._id, newStatus);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl z-10">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-1">Submission Details</h2>
              <p className="text-blue-100 text-sm">Complete information about this submission</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Contact Information Section */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-200">
                <label className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-2 block">Full Name</label>
                <p className="text-base text-gray-900 font-medium">{submission.name}</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-4 border border-green-200">
                <label className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2 block">Email Address</label>
                <p className="text-base text-gray-900 font-medium break-all">{submission.email}</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-4 border border-purple-200">
                <label className="text-xs font-semibold text-purple-700 uppercase tracking-wide mb-2 block">Mobile Number</label>
                <p className="text-base text-gray-900 font-medium">{submission.mobile}</p>
              </div>

              {submission.service && (
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-4 border border-orange-200">
                  <label className="text-xs font-semibold text-orange-700 uppercase tracking-wide mb-2 block">Service Interested</label>
                  <p className="text-base text-gray-900 font-medium">{submission.service}</p>
                </div>
              )}
            </div>
          </section>

          {/* Message Section */}
          {submission.message && (
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Message</h3>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-5 border border-gray-200">
                <p className="text-base text-gray-900 whitespace-pre-wrap leading-relaxed">
                  {submission.message}
                </p>
              </div>
            </section>
          )}

          {/* Submission Details Section */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Submission Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Form Type</label>
                <p className="text-base text-gray-900 font-medium">{submission.formType}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Submitted From</label>
                <p className="text-base text-gray-900 font-medium">{submission.submittedFrom}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Source</label>
                <p className="text-base text-gray-900 font-medium capitalize">{submission.foundUs.replace('_', ' ')}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Submitted At</label>
                <p className="text-base text-gray-900 font-medium">{formatDate(submission.submittedAt)}</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Current Status</label>
                <span className={`inline-flex items-center px-3 py-1.5 text-sm font-semibold rounded-full border ${getStatusColor(submission.status)}`}>
                  {STATUS_MAP[submission.status]}
                </span>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">reCAPTCHA</label>
                <p className="text-base font-medium">
                  {submission.recaptchaVerified ? (
                    <span className="inline-flex items-center gap-1.5 text-green-600">
                      <span className="flex h-2 w-2 rounded-full bg-green-600"></span>
                      Verified
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-red-600">
                      <span className="flex h-2 w-2 rounded-full bg-red-600"></span>
                      Not Verified
                    </span>
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* Status Update Section */}
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Update Status</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {Object.entries(STATUS_MAP).map(([statusValue, statusLabel]) => {
                const statusNum = Number(statusValue);
                const isActive = submission.status === statusNum;
                return (
                  <button
                    key={statusValue}
                    onClick={() => !isActive && handleStatusChange(statusNum)}
                    disabled={isActive || isUpdating}
                    className={`
                      relative px-4 py-3 rounded-xl font-medium transition-all cursor-pointer
                      ${isActive 
                        ? `${getStatusColor(statusNum)} cursor-default` 
                        : 'bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700'
                      }
                      ${isUpdating ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                  >
                    {isActive && (
                      <Check size={16} className="inline mr-1" />
                    )}
                    {statusLabel}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Technical Information Section */}
          {(submission.userAgent || submission.referrer || submission._id) && (
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Technical Information</h3>
              <div className="space-y-4">
                {submission.userAgent && (
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">User Agent</label>
                    <p className="text-xs text-gray-600 break-all leading-relaxed font-mono">
                      {submission.userAgent}
                    </p>
                  </div>
                )}

                {submission.referrer && (
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Referrer</label>
                    <p className="text-sm text-gray-900 break-all font-mono">
                      {submission.referrer}
                    </p>
                  </div>
                )}

                {submission._id && (
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Submission ID</label>
                    <p className="text-sm text-gray-600 break-all font-mono">
                      {submission._id}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-red-100 text-red-500 hover:bg-red-200 rounded-xl  transition-all font-medium cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;