'use client';

import React, { useState } from 'react';
import { X, Check, Clock, User, Calendar, FileText, Trash2, Edit2 } from 'lucide-react';
import StatusNoteModal from '@/components/admin/form-submissions/StatusNoteModal';
import DeleteNoteModal from '@/components/admin/form-submissions/DeleteNoteModal';
import { useStatusHistory, useDeleteNote } from '@/hooks/useContactForm';

const ViewModal = ({ submission, onClose, onStatusChange }) => {
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedNewStatus, setSelectedNewStatus] = useState(null);
  const [selectedNoteId, setSelectedNoteId] = useState(null);

  // Fetch status history
  const { data: historyData, isLoading: isLoadingHistory } = useStatusHistory(submission._id);
  const deleteNoteMutation = useDeleteNote();

  const STATUS_MAP = {
    0: 'Cancelled',
    1: 'New',
    2: 'Contacted',
    3: 'Converted Lead'
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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

  const handleStatusButtonClick = (newStatus) => {
    setSelectedNewStatus(newStatus);
    setShowStatusModal(true);
  };

  const handleStatusSubmit = async (statusData) => {
    await onStatusChange(submission._id, statusData);
    setShowStatusModal(false);
    setSelectedNewStatus(null);
  };

  const handleDeleteClick = (historyId) => {
    setSelectedNoteId(historyId);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteNoteMutation.mutateAsync({
        contactId: submission._id,
        noteId: selectedNoteId
      });
      setShowDeleteModal(false);
      setSelectedNoteId(null);
    } catch (error) {
      alert(`Failed to delete note: ${error.message}`);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
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

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Contact Info & Message */}
              <div className="lg:col-span-2 space-y-6">
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
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Form Type</label>
                      <p className="text-base text-gray-900 font-medium">{submission.formType}</p>
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
              </div>

              {/* Right Column - Status & History */}
              <div className="space-y-6">
                {/* Current Status Section */}
                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Current Status</h3>
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-4">
                    <span className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full border ${getStatusColor(submission.status)}`}>
                      {STATUS_MAP[submission.status]}
                    </span>
                  </div>

                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Update Status</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(STATUS_MAP).map(([statusValue, statusLabel]) => {
                      const statusNum = Number(statusValue);
                      const isActive = submission.status === statusNum;
                      return (
                        <button
                          key={statusValue}
                          onClick={() => !isActive && handleStatusButtonClick(statusNum)}
                          disabled={isActive}
                          className={`
                            px-4 py-2.5 rounded-xl font-medium transition-all text-left
                            ${isActive 
                              ? `${getStatusColor(statusNum)} cursor-default` 
                              : 'bg-white border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700 cursor-pointer'
                            }
                          `}
                        >
                          {isActive && <Check size={16} className="inline mr-2" />}
                          {statusLabel}
                        </button>
                      );
                    })}
                  </div>
                </section>

                {/* Status History Section */}
                <section>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Status History</h3>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {isLoadingHistory ? (
                      <div className="text-center py-8 text-gray-500">Loading history...</div>
                    ) : historyData?.data?.length > 0 ? (
                      historyData.data.map((entry) => (
                        <div key={entry._id} className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-blue-300 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(entry.status)}`}>
                              {STATUS_MAP[entry.status]}
                            </span>
                            <button
                              onClick={() => handleDeleteClick(entry._id)}
                              className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg transition-colors"
                              title="Delete note"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                          
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock size={14} />
                              <span className="text-xs">{formatDate(entry.changedAt)}</span>
                            </div>
                            
                            {entry.assignedTo && (
                              <div className="flex items-center gap-2 text-gray-700">
                                <User size={14} />
                                <span className="font-medium">{entry.assignedTo}</span>
                              </div>
                            )}
                            
                            {entry.followUpDate && (
                              <div className="flex items-center gap-2 text-blue-600">
                                <Calendar size={14} />
                                <span className="font-medium text-xs">{formatDate(entry.followUpDate)}</span>
                              </div>
                            )}
                            
                            {entry.note && (
                              <div className="mt-2 pt-2 border-t border-gray-200">
                                <div className="flex items-start gap-2 text-gray-700">
                                  <FileText size={14} className="mt-0.5 flex-shrink-0" />
                                  <p className="text-xs leading-relaxed">{entry.note}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500 text-sm">No history available</div>
                    )}
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-b-2xl">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-xl transition-all font-medium cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Status Note Modal */}
      {showStatusModal && (
        <StatusNoteModal
          isOpen={showStatusModal}
          onClose={() => {
            setShowStatusModal(false);
            setSelectedNewStatus(null);
          }}
          onSubmit={handleStatusSubmit}
          currentStatus={submission.status}
          newStatus={selectedNewStatus}
          statusMap={STATUS_MAP}
        />
      )}

      {/* Delete Note Modal */}
      {showDeleteModal && (
        <DeleteNoteModal
          isOpen={showDeleteModal}
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedNoteId(null);
          }}
          onConfirm={handleConfirmDelete}
          isDeleting={deleteNoteMutation.isPending}
        />
      )}
    </>
  );
};

export default ViewModal;