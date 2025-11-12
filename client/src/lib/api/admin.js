import apiClient from "../axios";


export const adminAPI = {
  // Get profile
  getProfile: async () => {
    const response = await apiClient.get('/api/admin/profile');
    return response.data;
  },

  // Update profile
  updateProfile: async (data) => {
    const response = await apiClient.put('/api/admin/profile', data);
    return response.data;
  },

  // Example: Get dashboard stats
  getDashboardStats: async () => {
    const response = await apiClient.get('/api/admin/dashboard/stats');
    return response.data;
  }
};