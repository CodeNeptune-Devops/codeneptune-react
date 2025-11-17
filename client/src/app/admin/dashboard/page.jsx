'use client'

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { TrendingUp, Users, Clock, CheckCircle, Mail, Phone, Calendar, ExternalLink, BarChart3, PieChart, Activity } from 'lucide-react';

// Fetch function for contact submissions
const fetchContacts = async () => {
  const response = await fetch('/api/contact');
  if (!response.ok) {
    throw new Error('Failed to fetch contacts');
  }
  const data = await response.json();

  // Handle different response structures
  // If data is wrapped in an object with a contacts/data/submissions property
  if (data.contacts) return data.contacts;
  if (data.data) return data.data;
  if (data.submissions) return data.submissions;

  // If data is already an array
  if (Array.isArray(data)) return data;

  // Otherwise return empty array
  console.log('Unexpected API response format:', data);
  return [];
};

export default function ContactAnalyticsDashboard() {
  const [timeRange, setTimeRange] = useState('all');

  // Use TanStack Query to fetch contacts
  const { data: contacts = [], isLoading, error } = useQuery({
    queryKey: ['contacts'],
    queryFn: fetchContacts,
  });

  // Debug: Log the data
  console.log('Contacts data:', contacts);
  console.log('Total contacts:', contacts.length);

  // Map numeric status to labels
  const statusLabels = {
    0: 'Cancelled',
    1: 'New',
    2: 'Contacted',
    3: 'Converted Lead'
  };

  // Analytics calculations
  const contactsArray = Array.isArray(contacts) ? contacts : [];
  const totalSubmissions = contactsArray.length;

  const statusData = contactsArray.reduce((acc, contact) => {
    const status = contact.status !== undefined ? contact.status : 1; // Default to 'new' (1)
    const label = statusLabels[status] || 'Unknown';
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});

  const statusChartData = Object.entries(statusData).map(([status, count]) => ({
    name: status,
    value: count
  }));

  const serviceData = contactsArray.reduce((acc, contact) => {
    const service = contact.service || 'other';
    acc[service] = (acc[service] || 0) + 1;
    return acc;
  }, {});

  const serviceChartData = Object.entries(serviceData).map(([service, count]) => ({
    name: service.replace(/-/g, ' ').toUpperCase(),
    count: count
  }));

  const sourceData = contactsArray.reduce((acc, contact) => {
    const source = contact.foundUs || 'unknown';
    acc[source] = (acc[source] || 0) + 1;
    return acc;
  }, {});

  const sourceChartData = Object.entries(sourceData).map(([source, count]) => ({
    name: source.replace(/_/g, ' ').toUpperCase(),
    value: count
  }));

  // Daily submissions trend
  const dailyData = contactsArray.reduce((acc, contact) => {
    const date = new Date(contact.submittedAt).toLocaleDateString();
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const trendData = Object.entries(dailyData)
    .map(([date, count]) => ({
      date: date,
      submissions: count
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(-14);

  const pageData = contactsArray.reduce((acc, contact) => {
    const page = contact.submittedFrom || '/';
    acc[page] = (acc[page] || 0) + 1;
    return acc;
  }, {});

  const pageChartData = Object.entries(pageData).map(([page, count]) => ({
    name: page,
    count: count
  }));

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4'];

  const conversionRate = totalSubmissions > 0
    ? ((statusData['Converted Lead'] || 0) / totalSubmissions * 100).toFixed(1)
    : 0;
  const responseRate = totalSubmissions > 0
    ? (((statusData['Contacted'] || 0) + (statusData['Converted Lead'] || 0)) / totalSubmissions * 100).toFixed(1)
    : 0;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-xl text-gray-600">Loading analytics...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center bg-white p-8 rounded-lg shadow">
          <div className="text-red-600 text-xl mb-2">Error loading data</div>
          <div className="text-gray-600">{error.message}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Stats */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Form Analytics</h1>
          <p className="text-gray-600">Real-time insights and performance metrics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Total Submissions</div>
                <div className="text-3xl font-bold text-gray-900">{totalSubmissions}</div>
                <div className="text-sm text-green-600 mt-2 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  All time
                </div>
              </div>
              <Users className="w-12 h-12 text-blue-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">New Leads</div>
                <div className="text-3xl font-bold text-gray-900">{statusData['New'] || 0}</div>
                <div className="text-sm text-gray-500 mt-2 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  Awaiting response
                </div>
              </div>
              <Mail className="w-12 h-12 text-green-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Response Rate</div>
                <div className="text-3xl font-bold text-gray-900">{responseRate}%</div>
                <div className="text-sm text-gray-500 mt-2 flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  Contacted or converted
                </div>
              </div>
              <TrendingUp className="w-12 h-12 text-purple-500 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-500 mb-1">Conversion Rate</div>
                <div className="text-3xl font-bold text-gray-900">{conversionRate}%</div>
                <div className="text-sm text-gray-500 mt-2 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Converted leads
                </div>
              </div>
              <CheckCircle className="w-12 h-12 text-orange-500 opacity-20" />
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Submissions Trend */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Submissions Trend</h3>
              <Activity className="w-5 h-5 text-blue-600" />
            </div>
            <div className="space-y-3">
              {trendData.slice(-7).map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 w-24">{item.date}</span>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-blue-500 h-3 rounded-full flex items-center justify-end px-2"
                        style={{ width: `${(item.submissions / Math.max(...trendData.map(d => d.submissions))) * 100}%` }}
                      >
                        <span className="text-xs text-white font-semibold">{item.submissions}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Distribution */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Lead Status Distribution</h3>
              <PieChart className="w-5 h-5 text-blue-600" />
            </div>
            <div className="space-y-4">
              {statusChartData.map((item, index) => {
                const percentage = ((item.value / totalSubmissions) * 100).toFixed(1);
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                      <span className="text-sm font-semibold text-gray-900">{item.value} ({percentage}%)</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: COLORS[index % COLORS.length]
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Requests */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Service Requests</h3>
              <BarChart3 className="w-5 h-5 text-blue-600" />
            </div>
            <div className="space-y-3">
              {serviceChartData.map((item, index) => {
                const maxCount = Math.max(...serviceChartData.map(d => d.count));
                return (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 w-32 truncate">{item.name}</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-green-500 h-3 rounded-full flex items-center justify-end px-2"
                          style={{ width: `${(item.count / maxCount) * 100}%` }}
                        >
                          <span className="text-xs text-white font-semibold">{item.count}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">How They Found Us</h3>
              <ExternalLink className="w-5 h-5 text-blue-600" />
            </div>
            <div className="space-y-4">
              {sourceChartData.map((item, index) => {
                const percentage = ((item.value / totalSubmissions) * 100).toFixed(1);
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{item.name}</span>
                      <span className="text-sm font-semibold text-gray-900">{item.value} ({percentage}%)</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-3">
                      <div
                        className="h-3 rounded-full"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: COLORS[index % COLORS.length]
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Page Performance */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Submissions by Page</h3>
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
          <div className="space-y-3">
            {pageChartData.map((item, index) => {
              const maxCount = Math.max(...pageChartData.map(d => d.count));
              return (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 w-32">{item.name}</span>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-200 rounded-full h-6">
                      <div
                        className="bg-purple-500 h-6 rounded-full flex items-center justify-end px-2"
                        style={{ width: `${(item.count / maxCount) * 100}%` }}
                      >
                        <span className="text-xs text-white font-semibold">{item.count}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Submissions Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Recent Submissions</h3>
            <Clock className="w-5 h-5 text-blue-600" />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Source</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Date
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {contactsArray.slice(0, 10).map((contact) => (
                  <tr key={contact._id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{contact.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{contact.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 capitalize">
                      {(contact.service || "other").replace(/-/g, ' ')}
                    </td>

                    <td className="px-4 py-3 text-sm text-gray-600 capitalize">
                      {(contact.foundUs || "unknown").replace(/_/g, ' ')}
                    </td>

                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${contact.status === 1 ? 'bg-blue-100 text-blue-800' :
                          contact.status === 2 ? 'bg-yellow-100 text-yellow-800' :
                            contact.status === 3 ? 'bg-green-100 text-green-800' :
                              'bg-red-100 text-red-800'
                        }`}>
                        {contact.status === 3 && <CheckCircle className="w-3 h-3 mr-1" />}
                        {contact.status === 1 && <Clock className="w-3 h-3 mr-1" />}
                        {statusLabels[contact.status] || 'Unknown'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {new Date(contact.submittedAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {contactsArray.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No submissions yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}