import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

interface ErrorDetails extends Error {
  status?: number
  data?: unknown
}

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ADMIN_SERVER_BASE_URL,
  timeout: 150_000,
  headers: { 'Content-Type': 'application/json' },
})

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => config,
  (error: AxiosError) => Promise.reject(normalizeError(error)),
)

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(normalizeError(error)),
)

function normalizeError(error: AxiosError): ErrorDetails {
  const responseData = error.response?.data as { message?: string } | undefined
  const details = new Error(responseData?.message ?? error.message ?? 'Request failed') as ErrorDetails
  details.status = error.response?.status
  details.data = error.response?.data
  return details
}

export const api = {
  get<T = unknown>(url: string, config?: InternalAxiosRequestConfig) {
    return apiClient.get<T>(url, config)
  },

  post<T = unknown>(url: string, data?: unknown, config?: InternalAxiosRequestConfig) {
    return apiClient.post<T>(url, data, config)
  },

  put<T = unknown>(url: string, data?: unknown, config?: InternalAxiosRequestConfig) {
    return apiClient.put<T>(url, data, config)
  },

  delete<T = unknown>(url: string, config?: InternalAxiosRequestConfig) {
    return apiClient.delete<T>(url, config)
  },
}

export default apiClient
