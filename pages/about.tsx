import Head from 'next/head';
import React, { ReactElement } from 'react';
import Chrome from '../src/components/Chrome';
import About from '../src/components/About';
import Footer from '../src/components/Footer';
import NavBar from '../src/components/NavBar';
import SideBar from '../src/components/SideBar';

const AboutPage = (): ReactElement => {
    return (
        <>
            <Head>
                <title>Find A Helpline | About</title>
            </Head>
            <Chrome>
                <NavBar>
                    <SideBar />
                </NavBar>
                <About />
                <Footer />
            </Chrome>
        </>
    );
};

export default AboutPage;
