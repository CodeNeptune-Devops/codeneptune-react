// components/email/ResendConfigForm.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { Zap, Save, Eye, EyeOff, Trash2, ExternalLink } from 'lucide-react';
import {
  useResendConfig,
  useSaveResendConfig,
  useDeleteResendConfig,
} from '@/hooks/useEmailApi';
import { toast } from 'react-toastify';

function ResendConfigForm() {
  const [showApiKey, setShowApiKey] = useState(false);
  const { data: configData, isLoading: isLoadingConfig } = useResendConfig();
  const saveConfig = useSaveResendConfig();
  const deleteConfig = useDeleteResendConfig();

  const [formData, setFormData] = useState({
    apiKey: '',
    from: '',
    fromName: '',
  });

  // Load existing config
  useEffect(() => {
    if (configData?.data) {
      setFormData({
        apiKey: '', // Don't populate API key for security
        from: configData.data.from || '',
        fromName: configData.data.fromName || '',
      });
    }
  }, [configData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await saveConfig.mutateAsync({
        apiKey: formData.apiKey,
        from: formData.from,
        fromName: formData.fromName,
      });

      toast.success('Resend configuration saved successfully!');
    } catch (error) {
      toast.error('Failed to save Resend configuration: ' + error.message);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete the Resend configuration?')) {
      return;
    }

    try {
      await deleteConfig.mutateAsync();
      setFormData({
        apiKey: '',
        from: '',
        fromName: '',
      });
      alert('Resend configuration deleted successfully!');
    } catch (error) {
      alert('Failed to delete Resend configuration: ' + error.message);
    }
  };

  if (isLoadingConfig) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Zap className="text-purple-600" size={24} />
            <h2 className="text-lg font-semibold text-gray-900">
              Resend Configuration
            </h2>
          </div>
          {configData?.data && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={deleteConfig.isPending}
              className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
            >
              <Trash2 size={16} />
              Delete
            </button>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Resend API Key *
            </label>
            <div className="relative">
              <input
                type={showApiKey ? 'text' : 'password'}
                value={formData.apiKey}
                onChange={(e) => handleChange('apiKey', e.target.value)}
                placeholder="re_••••••••••••••••••••"
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                required={!configData?.data}
              />
              <button
                type="button"
                onClick={() => setShowApiKey(!showApiKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showApiKey ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-xs text-gray-500">
                Get your API key from{' '}
                <a
                  href="https://resend.com/api-keys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline inline-flex items-center gap-1"
                >
                  resend.com/api-keys
                  <ExternalLink size={12} />
                </a>
              </p>
            </div>
            {configData?.data && (
              <p className="text-xs text-gray-500 mt-1">
                Leave blank to keep existing API key
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From Email *
              </label>
              <input
                type="email"
                value={formData.from}
                onChange={(e) => handleChange('from', e.target.value)}
                placeholder="noreply@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be a verified domain in Resend
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                From Name *
              </label>
              <input
                type="text"
                value={formData.fromName}
                onChange={(e) => handleChange('fromName', e.target.value)}
                placeholder="Your Company"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                required
              />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Resend offers 100 emails/day on the free
              plan and better deliverability with a modern API approach. Perfect
              for transactional emails.
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={saveConfig.isPending}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            <Save size={18} />
            {saveConfig.isPending ? 'Saving...' : 'Save Resend Configuration'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ResendConfigForm;