// components/email/SmtpConfigForm.jsx
'use client';

import React, { useState, useEffect } from 'react';
import { Server, Save, Eye, EyeOff, Trash2 } from 'lucide-react';
import {
  useSmtpConfig,
  useSaveSmtpConfig,
  useDeleteSmtpConfig,
} from '@/hooks/useEmailApi';
import { toast } from 'react-toastify';

function SmtpConfigForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { data: configData, isLoading: isLoadingConfig } = useSmtpConfig();
  const saveConfig = useSaveSmtpConfig();
  const deleteConfig = useDeleteSmtpConfig();

  // Track if we have existing config
  const hasExistingConfig = Boolean(configData?.data);

  const [formData, setFormData] = useState({
    host: '',
    port: '587',
    user: '',
    pass: '',
    from: '',
    fromName: '',
    encryption: 'tls',
  });

  // Load existing config
  useEffect(() => {
    if (configData?.data) {
      setFormData({
        host: configData.data.host || '',
        port: configData.data.port?.toString() || '587',
        user: configData.data.user || '',
        pass: '', // Don't populate password for security
        from: configData.data.from || '',
        fromName: configData.data.fromName || '',
        encryption: configData.data.encryption || 'tls',
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
        host: formData.host,
        port: parseInt(formData.port),
        user: formData.user,
        pass: formData.pass,
        from: formData.from,
        fromName: formData.fromName,
        encryption: formData.encryption,
      });

      toast.success(
        hasExistingConfig
          ? 'SMTP configuration updated successfully!'
          : 'SMTP configuration saved successfully!'
      );
    } catch (error) {
      toast.error('Failed to save SMTP configuration: ' + error.message);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete the SMTP configuration?')) {
      return;
    }

    try {
      await deleteConfig.mutateAsync();
      setFormData({
        host: '',
        port: '587',
        user: '',
        pass: '',
        from: '',
        fromName: '',
        encryption: 'tls',
      });
      toast.success('SMTP configuration deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete SMTP configuration: ' + error.message);
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
            <Server className="text-blue-600" size={24} />
            <h2 className="text-lg font-semibold text-gray-900">
              SMTP Configuration
            </h2>
          </div>
          {hasExistingConfig && (
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SMTP Host *
              </label>
              <input
                type="text"
                value={formData.host}
                onChange={(e) => handleChange('host', e.target.value)}
                placeholder="smtp.gmail.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SMTP Port *
              </label>
              <input
                type="number"
                value={formData.port}
                onChange={(e) => handleChange('port', e.target.value)}
                placeholder="587"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username / Email *
            </label>
            <input
              type="text"
              value={formData.user}
              onChange={(e) => handleChange('user', e.target.value)}
              placeholder="your-email@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password *
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.pass}
                onChange={(e) => handleChange('pass', e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                required={!hasExistingConfig}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {hasExistingConfig && (
              <p className="text-xs text-gray-500 mt-1">
                Leave blank to keep existing password
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Encryption
            </label>
            <select
              value={formData.encryption}
              onChange={(e) => handleChange('encryption', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
            >
              <option value="tls">TLS (Recommended)</option>
              <option value="ssl">SSL</option>
              <option value="none">None</option>
            </select>
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
        </div>

        {/* Submit Button */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={saveConfig.isPending}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            <Save size={18} />
            {saveConfig.isPending
              ? hasExistingConfig
                ? 'Updating...'
                : 'Saving...'
              : hasExistingConfig
              ? 'Update SMTP Configuration'
              : 'Save SMTP Configuration'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default SmtpConfigForm;