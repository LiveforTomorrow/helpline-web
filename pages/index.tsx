import Head from 'next/head';
import React, { ReactElement, Fragment } from 'react';
import { request } from 'graphql-request';
import gql from 'graphql-tag';
import { print } from 'graphql';
import Search from '../src/components/Search';
import Chrome from '../src/components/Chrome';
import { IndexProps } from './__generated__/IndexProps';

const Home = ({ topics, countries }: IndexProps): ReactElement => {
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

export const getStaticProps = async (): Promise<{ props: IndexProps }> => {
    const query = gql`
        query IndexProps {
            countries {
                code
                name
            }
            topics {
                name
            }
        }
    `;
    const { countries, topics } = await request('https://api.findahelpline.com', print(query));
    return {
        props: {
            countries,
            topics,
        },
    };
};

export default Home;
