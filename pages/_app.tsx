import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import ToastList from '../components/common/ToastList';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ToastList />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
