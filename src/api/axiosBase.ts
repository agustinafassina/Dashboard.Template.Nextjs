'use client'
import axios from 'axios'

/**
 * Calls go through the server-side proxy (`/api/proxy/*`), which attaches the
 * Auth0 access token. The token never reaches the browser.
 */
const axiosBase = axios.create({
  baseURL: '/api/proxy',
  responseType: 'json',
  headers: { 'Content-Type': 'application/json' },
})

const axiosBaseJson = axios.create({
  baseURL: '/',
  responseType: 'json',
})

axiosBase.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401 && typeof window !== 'undefined') {
      window.location.assign('/api/auth/logout')
    }
    return Promise.reject(error)
  },
)

export { axiosBase, axiosBaseJson }
