// lib/axios.js (updated - no circular dependency)
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

let store = null;

// Function to set the store reference (called after store is created)
export const setStoreReference = (storeInstance) => {
  store = storeInstance;
};

// Request interceptor - Attach access token from Redux store
apiClient.interceptors.request.use(
  (config) => {
    if (store) {
      const state = store.getState();
      const token = state.auth.accessToken;
      
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    
    console.log('📤 API Request:', config.url, {
      hasAuthHeader: !!config.headers.Authorization
    });
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle token refresh
apiClient.interceptors.response.use(
  (response) => {
    // Update tokens in Redux if new ones are returned
    if (response.data?.accessToken && store) {
      const { updateTokens } = require('@/store/slices/authSlice');
      store.dispatch(updateTokens({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      }));
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry && store) {
      originalRequest._retry = true;

      try {
        const state = store.getState();
        const refreshToken = state.auth.refreshToken;

        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        console.log('🔄 Attempting token refresh...');
        
        // Try to refresh the token
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/auth/refresh`,
          { refreshToken }
        );

        const { accessToken, refreshToken: newRefreshToken } = response.data;

        // Update tokens in Redux
        const { updateTokens } = require('@/store/slices/authSlice');
        store.dispatch(updateTokens({
          accessToken,
          refreshToken: newRefreshToken || refreshToken,
        }));

        console.log('✅ Token refreshed successfully');

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error('❌ Token refresh failed:', refreshError);
        
        // Clear auth state and redirect to login
        const { clearAuth } = require('@/store/slices/authSlice');
        store.dispatch(clearAuth());
        
        if (typeof window !== 'undefined') {
          window.location.href = '/admin/login';
        }
        
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;