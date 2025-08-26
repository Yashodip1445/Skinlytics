import { QueryClient } from "@tanstack/react-query";

// Frontend-only: provide a no-op generic query function that rejects unsupported network calls
export const getQueryFn = () =>
  async () => {
    throw new Error("Network requests are disabled in frontend-only mode.");
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn(),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});