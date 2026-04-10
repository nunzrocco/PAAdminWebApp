import { useAuthStore } from '@/features/auth/stores/AuthStore'
import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3019/api",
  withCredentials: true, // 👈 necesario para cookies (refresh)
})

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => response, // Si la respuesta es OK, solo la retorna
  async (error) => {
    const originalRequest = error.config;
    const { logout, setAuth } = useAuthStore.getState();

    // Si el error es 401 y no hemos intentado refrescar aún
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Intentamos obtener nuevos tokens
        const res = await axios.post(
          'http://localhost:3019/api/auth/refresh',
          {},
          { withCredentials: true }
        );

        const { user, accessToken } = res.data;
        
        // Actualizamos Zustand
        setAuth(user, accessToken);

        // Actualizamos el header de la petición original y reintentamos
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Si el refresh falla (ej. cookie expirada), cerramos sesión
        logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export {
    api
}