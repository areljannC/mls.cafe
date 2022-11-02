// EXTERNAL IMPORTS
import React, { FunctionComponent, Fragment, memo } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

// SHARED IMPORTS
import { CHAKRA_THEME } from '@constants';

// Component
const CustomApp: FunctionComponent<AppProps> = (props: AppProps) => (
  <Fragment>
    <Head>
      <meta content='width=device-width, initial-scale=1.0' name='viewport' />
      <meta property='og:type' content='website' />
    </Head>
    <ChakraProvider theme={CHAKRA_THEME}>
      <props.Component {...props.pageProps} />
    </ChakraProvider>
  </Fragment>
);

// Display Name
CustomApp.displayName = 'CustomApp';

export default memo(CustomApp);
