// lib/api/auth.client.ts
// API client to communicate with Express backend from Next.js

const API_URL = process.env.NEXT_PUBLIC_EXPRESS_BACKEND_URL || 'http://localhost:3000';

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

interface UpdateProfileData {
  name?: string;
  email?: string;
}

interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

/**
 * API client for authentication
 */
export const authApi = {
  /**
   * Sign in user
   */
  signIn: async (data: SignInData) => {
    const response = await fetch(`${API_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include', // Important: Include cookies
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Sign in failed');
    }

    return result;
  },

  /**
   * Sign up user
   */
  signUp: async (data: SignUpData) => {
    const response = await fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Sign up failed');
    }

    return result;
  },

  /**
   * Sign out user
   */
  signOut: async () => {
    const response = await fetch(`${API_URL}/auth/signout`, {
      method: 'POST',
      credentials: 'include',
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Sign out failed');
    }

    return result;
  },

  /**
   * Get current user
   */
  getCurrentUser: async () => {
    const response = await fetch(`${API_URL}/auth/me`, {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      return null;
    }

    const result = await response.json();
    return result.user;
  },

  /**
   * Update profile
   */
  updateProfile: async (data: UpdateProfileData) => {
    const response = await fetch(`${API_URL}/auth/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Update profile failed');
    }

    return result;
  },

  /**
   * Change password
   */
  changePassword: async (data: ChangePasswordData) => {
    const response = await fetch(`${API_URL}/auth/change-password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Change password failed');
    }

    return result;
  },

  /**
   * Verify token
   */
  verifyToken: async () => {
    const response = await fetch(`${API_URL}/auth/verify`, {
      method: 'GET',
      credentials: 'include',
    });

    const result = await response.json();

    if (!response.ok) {
      return { valid: false };
    }

    return result;
  },
};
