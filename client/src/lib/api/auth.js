import apiClient from "../axios";

export const authAPI = {
  // Signup
  signup: async (data) => {
    const response = await apiClient.post('/api/auth/signup', data);
    return response.data;
  },

  // Login
  login: async (credentials) => {
    const response = await apiClient.post('/api/auth/login', credentials);
    return response.data;
  },

  // Logout
  logout: async () => {
    const response = await apiClient.post('/api/auth/logout');
    return response.data;
  },

  // Verify token
  verifyToken: async () => {
    const response = await apiClient.get('/api/auth/verify');
    return response.data;
  },

  // Refresh token (manual call if needed)
  refreshToken: async () => {
    const response = await apiClient.post('/api/auth/refresh');
    return response.data;
  }
};