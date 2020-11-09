import Head from 'next/head';
import React, { ReactElement } from 'react';
import Chrome from '../src/components/Chrome';
import About from '../src/components/About';
import Footer from '../src/components/Footer';

const AboutPage = (): ReactElement => {
    return (
        <>
            <Head>
                <title>Find A Helpline | About</title>
            </Head>
            <Chrome>
                <About />
                <Footer />
            </Chrome>
        </>
    );
};

export default AboutPage;
