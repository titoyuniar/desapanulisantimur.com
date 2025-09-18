import { FC, ReactNode, useState } from "react";
import { QueryClient, QueryClientConfig, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: { refetchOnMount: false, refetchOnWindowFocus: false, staleTime: 60 * 1000, cacheTime: 0 },
  },
};

type IReactQueryProvider = FC<{ children: ReactNode }>;
export const ReactQueryProvider: IReactQueryProvider = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig));
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
