import Head from 'next/head';
import React, { ReactElement, Fragment } from 'react';
import Chrome from '../src/components/Chrome';
import { request } from 'graphql-request';
import Search from '../src/components/Search';

type Country = {
    code: string;
    name: string;
};

type Topic = {
    name: string;
};

type Props = {
    countries: Country[];
    topics: Topic[];
};

const Home = ({ topics, countries }: Props): ReactElement => {
    return (
        <Fragment>
            <Head>
                <title>Find A Helpline</title>
            </Head>
            <Chrome>
                <Search countries={countries} topics={topics} />
            </Chrome>
        </Fragment>
    );
};

export const getStaticProps = async (): Promise<{ props: Props }> => {
    const query = `
        query {
            countries {
                code
                name
            }
            topics {
              name
            }
        }
    `;
    const { countries, topics } = await request('https://api.findahelpline.com', query);
    return {
        props: {
            countries,
            topics,
        },
    };
};

export default Home;
