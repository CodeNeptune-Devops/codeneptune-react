'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, User, FileText } from 'lucide-react';

const StatusNoteModal = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  currentStatus, 
  newStatus, 
  statusMap,
  isSubmitting = false 
}) => {
  const [formData, setFormData] = useState({
    assignedTo: '',
    note: '',
    followUpDate: '',
    followUpTime: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Combine date and time into ISO string
    let followUpDateTime = null;
    if (formData.followUpDate && formData.followUpTime) {
      followUpDateTime = new Date(`${formData.followUpDate}T${formData.followUpTime}`).toISOString();
    } else if (formData.followUpDate) {
      followUpDateTime = new Date(formData.followUpDate).toISOString();
    }

    onSubmit({
      status: newStatus,
      assignedTo: formData.assignedTo.trim() || null,
      note: formData.note.trim() || null,
      followUpDate: followUpDateTime
    });
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        assignedTo: '',
        note: '',
        followUpDate: '',
        followUpTime: ''
      });
      onClose();
    }
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

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-[60]">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">Update Status</h2>
              <div className="flex items-center gap-3 text-sm">
                <span className={`px-3 py-1 rounded-full border ${getStatusColor(currentStatus)}`}>
                  {statusMap[currentStatus]}
                </span>
                <span className="text-blue-100">→</span>
                <span className={`px-3 py-1 rounded-full border ${getStatusColor(newStatus)}`}>
                  {statusMap[newStatus]}
                </span>
              </div>
            </div>
            <button
              onClick={handleClose}
              disabled={isSubmitting}
              className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors disabled:opacity-50 cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Assigned To */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <User size={18} className="text-blue-600" />
              Assign To (Optional)
            </label>
            <input
              type="text"
              value={formData.assignedTo}
              onChange={(e) => setFormData(prev => ({ ...prev, assignedTo: e.target.value }))}
              placeholder="Enter name of person assigned"
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:bg-gray-50"
              maxLength={100}
            />
          </div>

          {/* Note/Comment */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <FileText size={18} className="text-blue-600" />
              Notes (Optional)
            </label>
            <textarea
              value={formData.note}
              onChange={(e) => setFormData(prev => ({ ...prev, note: e.target.value }))}
              placeholder="Add any notes or comments about this status change..."
              disabled={isSubmitting}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:bg-gray-50"
              maxLength={1000}
            />
            <p className="text-xs text-gray-500 mt-1">
              {formData.note.length}/1000 characters
            </p>
          </div>

          {/* Follow-up Date and Time */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
              <Calendar size={18} className="text-blue-600" />
              Schedule Follow-up (Optional)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-600 mb-2">Date</label>
                <input
                  type="date"
                  value={formData.followUpDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, followUpDate: e.target.value }))}
                  min={today}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-2">Time</label>
                <input
                  type="time"
                  value={formData.followUpTime}
                  onChange={(e) => setFormData(prev => ({ ...prev, followUpTime: e.target.value }))}
                  disabled={isSubmitting || !formData.followUpDate}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:bg-gray-50"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all font-medium disabled:opacity-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed shadow-lg cursor-pointer"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Updating...
                </span>
              ) : (
                'Update Status'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StatusNoteModal;