import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ChakraProvider } from '@chakra-ui/react';
import SideBar from '../common/components/SideBar';
import ComponentWrapper from '../common/components/ComponentWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  switch (pageProps.layout) {
    case 'no-sidebar': {
      return (
        <ChakraProvider>
          <RecoilRoot>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
              </Hydrate>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </RecoilRoot>
        </ChakraProvider>
      );
    }
    case 'sidebar':
    default: {
      return (
        <ChakraProvider>
          <RecoilRoot>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <SideBar />
                <ComponentWrapper>
                  <Component {...pageProps} />
                </ComponentWrapper>
              </Hydrate>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </RecoilRoot>
        </ChakraProvider>
      );
    }
  }
}

export default MyApp;
