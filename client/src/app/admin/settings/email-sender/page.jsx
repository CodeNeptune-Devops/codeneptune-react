// app/email-sender/page.jsx (or wherever your page is)
'use client';

import React, { useState } from 'react';
import { Mail, Server, Zap } from 'lucide-react';
import SmtpConfigForm from '@/components/email/SmtpConfigForm';
import ResendConfigForm from '@/components/email/ResendConfigForm';
import {
  useEmailSettings,
  useUpdateActiveProvider,
} from '@/hooks/useEmailApi';
import { toast } from 'react-toastify';

function EmailSenderPage() {
  const [selectedProvider, setSelectedProvider] = useState('smtp');
  
  const { data: settingsData, isLoading: isLoadingSettings } = useEmailSettings();
  const updateProvider = useUpdateActiveProvider();

  const activeProvider = settingsData?.data?.activeProvider || 'smtp';

  const handleActiveProviderToggle = async () => {
    const newProvider = activeProvider === 'smtp' ? 'resend' : 'smtp';
    
    try {
      await updateProvider.mutateAsync(newProvider);
      toast.success(`Active Provider updated ${activeProvider.toUpperCase()}`);
    } catch (error) {
      toast.error('Failed to update active provider: ' + error.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Mail className="text-emerald-600" />
          Email Sender Configuration
        </h1>
        <p className="text-gray-600 mt-1">
          Configure your email service provider for sending transactional emails
        </p>
      </div>

      {/* Active Provider Toggle */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Active Email Provider
            </label>
            <p className="text-xs text-gray-500 mt-1">
              Choose which provider to use for sending emails
            </p>
          </div>

          {/* Toggle Switch */}
          <div className="flex items-center gap-3">
            <span
              className={`text-sm font-medium transition-colors ${
                activeProvider === 'smtp' ? 'text-emerald-600' : 'text-gray-400'
              }`}
            >
              SMTP
            </span>
            <button
              type="button"
              onClick={handleActiveProviderToggle}
              disabled={updateProvider.isPending || isLoadingSettings}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${
                activeProvider === 'resend' ? 'bg-emerald-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform ${
                  activeProvider === 'resend' ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium transition-colors ${
                activeProvider === 'resend' ? 'text-emerald-600' : 'text-gray-400'
              }`}
            >
              Resend
            </span>
          </div>
        </div>

        {/* Status Message */}
        {!isLoadingSettings && (
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              activeProvider === 'smtp'
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'bg-purple-50 text-purple-700 border border-purple-200'
            }`}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: activeProvider === 'smtp' ? '#3b82f6' : '#a855f7',
              }}
            ></div>
            <span className="text-sm font-medium">
              Currently using {activeProvider === 'smtp' ? 'SMTP' : 'Resend'} for
              sending emails
            </span>
          </div>
        )}

        {isLoadingSettings && (
          <div className="animate-pulse bg-gray-200 h-10 rounded-lg"></div>
        )}
      </div>

      {/* Provider Selection */}
      {/* <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Configure Email Provider
        </label>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setSelectedProvider('smtp')}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
              selectedProvider === 'smtp'
                ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
            }`}
          >
            <Server size={20} />
            <div className="text-left">
              <div className="font-semibold">SMTP</div>
              <div className="text-xs opacity-75">Custom SMTP Server</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setSelectedProvider('resend')}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
              selectedProvider === 'resend'
                ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
            }`}
          >
            <Zap size={20} />
            <div className="text-left">
              <div className="font-semibold">Resend</div>
              <div className="text-xs opacity-75">Modern Email API</div>
            </div>
          </button>
        </div>
      </div> */}

      {/* Configuration Forms */}
      {/* {selectedProvider === 'smtp' ? <SmtpConfigForm /> : <ResendConfigForm />} */}
    </div>
  );
}

export default EmailSenderPage;