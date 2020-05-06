import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TagManager from 'react-gtm-module';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import theme from '../src/theme';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    useEffect(() => {
        TagManager.initialize({
            gtmId: process.env.GTM_ID,
        });
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
        Router.events.on('routeChangeComplete', (url) => {
            ga && ga('gtm1.send', { hitType: 'pageview', page: url });
        });
    }, []);

    return (
        <>
            <Head>
                <title>Find A Helpline</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default App;
