import React, { ReactElement } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TagManager from 'react-gtm-module';
import theme from '../src/theme';

export default class MyApp extends App {
    componentDidMount(): void {
        TagManager.initialize({
            gtmId: process.env.GTM_ID,
        });
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }

    render(): ReactElement {
        const { Component, pageProps } = this.props;

        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}
