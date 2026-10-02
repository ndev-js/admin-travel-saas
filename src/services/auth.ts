import { api } from 'src/api/axios.client';
import { ENDPOINTS } from 'src/constants/endpoints';

export interface ApiResponse<T = unknown> {
  message: string;
  success: boolean;
  data: T;
}

export interface AdminUser {
  id: string;
  fullName: string;
  email: string;
  role: string;
}

export interface AdminLoginResult {
  user: AdminUser;
  accessToken: string;
  refreshToken: string;
}

interface AdminLoginPayload {
  email: string;
  password: string;
}

export const adminLogin = async (payload: AdminLoginPayload) => {
  const response = await api.post<ApiResponse<AdminLoginResult>>(ENDPOINTS.ADMIN.AUTH.LOGIN, payload);
  return response.data.data;
};
