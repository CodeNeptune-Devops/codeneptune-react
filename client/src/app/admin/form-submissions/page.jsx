'use client';

import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Search, Download, Eye, ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react';

const AdminDashboard = () => {
  const queryClient = useQueryClient();
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  
  // Filters
  const [filters, setFilters] = useState({
    status: '',
    formType: '',
    submittedFrom: '',
    foundUs: '',
    startDate: '',
    endDate: '',
    searchTerm: ''
  });

  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const formTypes = ['contact-modal', 'contact-page-form', 'contact-form'];
  const statuses = ['new', 'contacted', 'resolved', 'spam'];
  const foundUsOptions = ['social_media', 'google_search', 'referral', 'advertisement', 'other', 'not_specified'];

  // Fetch submissions with TanStack Query
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['submissions', currentPage, itemsPerPage, filters],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: currentPage,
        limit: itemsPerPage,
        ...(filters.status && { status: filters.status }),
        ...(filters.formType && { formType: filters.formType }),
        ...(filters.submittedFrom && { submittedFrom: filters.submittedFrom })
      });

      const response = await fetch(`/api/contact?${params}`);
      if (!response.ok) {
        throw new Error('Failed to fetch submissions');
      }
      const data = await response.json();

      if (data.success) {
        let filteredData = data.data;

        // Client-side filtering
        if (filters.foundUs) {
          filteredData = filteredData.filter(sub => sub.foundUs === filters.foundUs);
        }

        if (filters.startDate) {
          filteredData = filteredData.filter(sub => 
            new Date(sub.submittedAt) >= new Date(filters.startDate)
          );
        }

        if (filters.endDate) {
          const endDate = new Date(filters.endDate);
          endDate.setHours(23, 59, 59, 999);
          filteredData = filteredData.filter(sub => 
            new Date(sub.submittedAt) <= endDate
          );
        }

        if (filters.searchTerm) {
          const term = filters.searchTerm.toLowerCase();
          filteredData = filteredData.filter(sub =>
            sub.name?.toLowerCase().includes(term) ||
            sub.email?.toLowerCase().includes(term) ||
            sub.mobile?.includes(term) ||
            sub.message?.toLowerCase().includes(term)
          );
        }

        return {
          submissions: filteredData,
          pagination: data.pagination
        };
      }
      throw new Error('Invalid response format');
    },
    staleTime: 30000, // 30 seconds
    refetchOnWindowFocus: false
  });

  const submissions = data?.submissions || [];
  const totalPages = data?.pagination?.pages || 1;
  const totalItems = data?.pagination?.total || 0;

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setFilters({
      status: '',
      formType: '',
      submittedFrom: '',
      foundUs: '',
      startDate: '',
      endDate: '',
      searchTerm: ''
    });
    setCurrentPage(1);
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Mobile', 'Service', 'Message', 'Form Type', 'Found Us', 'Submitted From', 'Status', 'Date'];
    const rows = submissions.map(sub => [
      sub.name,
      sub.email,
      sub.mobile,
      sub.service || '',
      sub.message || '',
      sub.formType,
      sub.foundUs,
      sub.submittedFrom,
      sub.status,
      new Date(sub.submittedAt).toLocaleString()
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `submissions_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
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
      new: 'bg-blue-100 text-blue-800',
      contacted: 'bg-yellow-100 text-yellow-800',
      resolved: 'bg-green-100 text-green-800',
      spam: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Form Submissions</h1>
              <p className="text-gray-600 mt-1">Total: {totalItems} submissions</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => refetch()}
                disabled={isLoading}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <RefreshCw size={20} className={isLoading ? 'animate-spin' : ''} />
                Refresh
              </button>
              <button
                onClick={exportToCSV}
                disabled={submissions.length === 0}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <Download size={20} />
                Export CSV
              </button>
            </div>
          </div>

          {/* Filters - Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="lg:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by name, email, mobile..."
                  value={filters.searchTerm}
                  onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={filters.status}
                onChange={(e) => handleFilterChange('status', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Statuses</option>
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            {/* Form Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Form Type
              </label>
              <select
                value={filters.formType}
                onChange={(e) => handleFilterChange('formType', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Types</option>
                {formTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Found Us Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Found Us
              </label>
              <select
                value={filters.foundUs}
                onChange={(e) => handleFilterChange('foundUs', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">All Sources</option>
                {foundUsOptions.map(option => (
                  <option key={option} value={option}>{option.replace('_', ' ')}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Filters - Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
            {/* Submitted From Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Submitted From
              </label>
              <input
                type="text"
                placeholder="e.g., /contact"
                value={filters.submittedFrom}
                onChange={(e) => handleFilterChange('submittedFrom', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={filters.startDate}
                onChange={(e) => handleFilterChange('startDate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input
                type="date"
                value={filters.endDate}
                onChange={(e) => handleFilterChange('endDate', e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Items Per Page */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Items Per Page
              </label>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>

            {/* Reset Filters Button */}
            <div className="flex items-end">
              <button
                onClick={resetFilters}
                className="w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {isLoading ? (
            <div className="p-12 text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Loading submissions...</p>
            </div>
          ) : error ? (
            <div className="p-12 text-center">
              <p className="text-red-600">Error: {error.message}</p>
              <button
                onClick={() => refetch()}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Try Again
              </button>
            </div>
          ) : submissions.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-600">No submissions found</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Form Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Found Us
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {submissions.map((submission) => (
                      <tr key={submission._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(submission.submittedAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{submission.name}</div>
                          {submission.service && (
                            <div className="text-xs text-gray-500">{submission.service}</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{submission.email}</div>
                          <div className="text-xs text-gray-500">{submission.mobile}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{submission.formType}</div>
                          <div className="text-xs text-gray-500">{submission.submittedFrom}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.foundUs.replace('_', ' ')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(submission.status)}`}>
                            {submission.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => setSelectedSubmission(submission)}
                            className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                          >
                            <Eye size={16} />
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing page <span className="font-medium">{currentPage}</span> of{' '}
                      <span className="font-medium">{totalPages}</span>
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Submission Details</h2>
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedSubmission.name}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedSubmission.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedSubmission.mobile}</p>
                </div>

                {selectedSubmission.service && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Service</label>
                    <p className="mt-1 text-sm text-gray-900">{selectedSubmission.service}</p>
                  </div>
                )}

                {selectedSubmission.message && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <p className="mt-1 text-sm text-gray-900 whitespace-pre-wrap">{selectedSubmission.message}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">Found Us</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedSubmission.foundUs.replace('_', ' ')}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Form Type</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedSubmission.formType}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Submitted From</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedSubmission.submittedFrom}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Submitted At</label>
                  <p className="mt-1 text-sm text-gray-900">{formatDate(selectedSubmission.submittedAt)}</p>
                </div>

                {selectedSubmission.userAgent && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">User Agent</label>
                    <p className="mt-1 text-xs text-gray-600 break-all">{selectedSubmission.userAgent}</p>
                  </div>
                )}

                {selectedSubmission.referrer && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Referrer</label>
                    <p className="mt-1 text-sm text-gray-900 break-all">{selectedSubmission.referrer}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <span className={`mt-1 inline-block px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(selectedSubmission.status)}`}>
                    {selectedSubmission.status}
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">reCAPTCHA Verified</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedSubmission.recaptchaVerified ? 'Yes' : 'No'}</p>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;