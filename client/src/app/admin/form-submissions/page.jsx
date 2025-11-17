'use client';

import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Search, Download, Eye, ChevronLeft, ChevronRight, RefreshCw, Filter, X } from 'lucide-react';
import ViewModal from '@/components/admin/form-submissions/ViewModal';

const AdminDashboard = () => {
  const queryClient = useQueryClient();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  // Status mapping
  const STATUS_MAP = {
    0: 'Cancelled',
    1: 'New',
    2: 'Contacted',
    3: 'Converted Lead'
  };

  const STATUS_OPTIONS = [
    { value: 0, label: 'Cancelled' },
    { value: 1, label: 'New' },
    { value: 2, label: 'Contacted' },
    { value: 3, label: 'Converted Lead' }
  ];

  // Filters
  const [filters, setFilters] = useState({
    status: '',
    formType: '',
    submittedFrom: '',
    foundUs: '',
    sortBy: 'newest',
    searchTerm: ''
  });

  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [showFilters, setShowFilters] = useState(true);

  const formTypes = ['contact-modal', 'contact-page-form', 'contact-form'];
  const foundUsOptions = ['social_media', 'google_search', 'referral', 'advertisement', 'other', 'not_specified'];

  // Status update mutation
  const statusMutation = useMutation({
    mutationFn: async ({ id, status }) => {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update status');
      }

      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch submissions
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    },
    onError: (error) => {
      console.error('Error updating status:', error);
      alert(`Failed to update status: ${error.message}`);
    }
  });

  // Fetch submissions with TanStack Query
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['submissions', currentPage, itemsPerPage, filters],
    queryFn: async () => {
      const params = new URLSearchParams({
        page: currentPage,
        limit: itemsPerPage,
        ...(filters.status !== '' && { status: filters.status }),
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

        if (filters.searchTerm) {
          const term = filters.searchTerm.toLowerCase();
          filteredData = filteredData.filter(sub =>
            sub.name?.toLowerCase().includes(term) ||
            sub.email?.toLowerCase().includes(term) ||
            sub.mobile?.includes(term) ||
            sub.message?.toLowerCase().includes(term)
          );
        }

        // Sort by date
        filteredData.sort((a, b) => {
          const dateA = new Date(a.submittedAt).getTime();
          const dateB = new Date(b.submittedAt).getTime();
          return filters.sortBy === 'newest' ? dateB - dateA : dateA - dateB;
        });

        return {
          submissions: filteredData,
          pagination: data.pagination
        };
      }
      throw new Error('Invalid response format');
    },
    staleTime: 30000,
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
      sortBy: 'newest',
      searchTerm: ''
    });
    setCurrentPage(1);
  };

  const getActiveFiltersCount = () => {
    return Object.values(filters).filter(value => value !== '').length;
  };

  // Handle status change from modal
  const handleStatusChange = async (id, newStatus) => {
    await statusMutation.mutateAsync({ id, status: newStatus });
    
    // Update the selected submission to reflect the change
    setSelectedSubmission(prev => {
      if (prev && prev._id === id) {
        return { ...prev, status: newStatus };
      }
      return prev;
    });
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
      STATUS_MAP[sub.status] || sub.status,
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
      0: 'bg-red-100 text-red-800 border-red-200',
      1: 'bg-blue-100 text-blue-800 border-blue-200',
      2: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      3: 'bg-green-100 text-green-800 border-green-200'
    };
    return colors[status] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-black">
      <div className="max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Form Submissions</h1>
              <p className="text-gray-600 flex items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {totalItems} Total
                </span>
                <span className="text-sm">
                  {isLoading ? 'Loading...' : `Showing ${submissions.length} results`}
                </span>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center cursor-pointer gap-2 px-4 py-2.5 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all shadow-sm border border-gray-200 font-medium"
              >
                <Filter size={18} />
                Filters
                {getActiveFiltersCount() > 0 && (
                  <span className="ml-1 px-2 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                    {getActiveFiltersCount()}
                  </span>
                )}
              </button>
              <button
                onClick={() => refetch()}
                disabled={isLoading}
                className="flex items-center cursor-pointer gap-2 px-4 py-2.5 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all shadow-sm border border-gray-200 disabled:opacity-50 font-medium"
              >
                <RefreshCw size={18} className={isLoading ? 'animate-spin' : ''} />
                Refresh
              </button>
              <button
                onClick={exportToCSV}
                disabled={submissions.length === 0}
                className="flex items-center cursor-pointer gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-md disabled:opacity-50 font-medium"
              >
                <Download size={18} />
                Export CSV
              </button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-6 transition-all">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Filter size={20} className="text-blue-600" />
                Filter Options
              </h2>
              {getActiveFiltersCount() > 0 && (
                <button
                  onClick={resetFilters}
                  className="flex items-center cursor-pointer gap-2 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium"
                >
                  <X size={16} />
                  Clear All
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {/* Search */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by name, email, mobile..."
                    value={filters.searchTerm}
                    onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Sort By Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By Date
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={filters.status}
                  onChange={(e) => handleFilterChange('status', e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">All Statuses</option>
                  {STATUS_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
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
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
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
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">All Sources</option>
                  {foundUsOptions.map(option => (
                    <option key={option} value={option}>{option.replace('_', ' ')}</option>
                  ))}
                </select>
              </div>

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
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                >
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {isLoading ? (
            <div className="p-16 text-center">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
              <p className="mt-6 text-gray-600 font-medium">Loading submissions...</p>
            </div>
          ) : error ? (
            <div className="p-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <X size={32} className="text-red-600" />
              </div>
              <p className="text-red-600 font-semibold mb-2">Error Loading Data</p>
              <p className="text-gray-600 mb-4">{error.message}</p>
              <button
                onClick={() => refetch()}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium"
              >
                Try Again
              </button>
            </div>
          ) : submissions.length === 0 ? (
            <div className="p-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Search size={32} className="text-gray-400" />
              </div>
              <p className="text-gray-600 font-medium">No submissions found</p>
              <p className="text-sm text-gray-500 mt-2">Try adjusting your filters</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Form Type
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Found Us
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {submissions.map((submission, index) => (
                      <tr key={submission._id} className="hover:bg-blue-50/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-semibold text-gray-900">{submission.name}</div>
                          {submission.service && (
                            <div className="text-xs text-gray-500 mt-0.5">{submission.service}</div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{submission.email}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{submission.mobile}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-medium">{submission.formType}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{submission.submittedFrom}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {submission.foundUs.replace('_', ' ')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${getStatusColor(submission.status)}`}>
                            {STATUS_MAP[submission.status] || submission.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            onClick={() => setSelectedSubmission(submission)}
                            className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
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
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 flex items-center justify-between border-t-2 border-gray-200">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center cursor-pointer px-4 py-2 border border-gray-300 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 shadow-sm"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="ml-3 relative inline-flex items-center cursor-pointer px-4 py-2 border border-gray-300 text-sm font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 shadow-sm"
                  >
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700 font-medium">
                      Page <span className="font-bold text-blue-600">{currentPage}</span> of{' '}
                      <span className="font-bold">{totalPages}</span>
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-xl shadow-sm -space-x-px">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="relative inline-flex items-center px-3 py-2 rounded-l-xl border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <span className="relative inline-flex items-center px-4 py-2 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-700">
                        {currentPage}
                      </span>
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="relative inline-flex items-center px-3 py-2 rounded-r-xl border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
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

      {/* Modal - NOW WITH onStatusChange PROP */}
      {selectedSubmission && (
        <ViewModal
          submission={selectedSubmission}
          onClose={() => setSelectedSubmission(null)}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
};

export default AdminDashboard;