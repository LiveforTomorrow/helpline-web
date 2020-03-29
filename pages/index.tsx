import Head from 'next/head';
import React, { ReactElement, Fragment } from 'react';
import TopBar from '../src/components/TopBar/TopBar';

const Home = (): ReactElement => (
    <Fragment>
        <Head>
            <title>Find A Helpline</title>
        </Head>
        <TopBar />
    </Fragment>
);

export default Home;
