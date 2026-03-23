import { useAuthStore } from "../stores/AuthStore";

export const useAuthInitializing = () =>
  useAuthStore((s) => s.isInitializing)