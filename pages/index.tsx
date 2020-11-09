import Head from 'next/head';
import React, { ReactElement } from 'react';
import { request } from 'graphql-request';
import gql from 'graphql-tag';
import { print } from 'graphql';
import Search from '../src/components/Search';
import Chrome from '../src/components/Chrome';
import { GetSearchProps } from '../types/GetSearchProps';
import About from '../src/components/About';

const IndexPage = ({ topics, countries }: GetSearchProps): ReactElement => {
    return (
        <>
            <Head>
                <title>Find A Helpline</title>
            </Head>
            <Chrome footer={true}>
                <Search countries={countries} topics={topics} />
                <About />
            </Chrome>
        </>
    );
};

export const getStaticProps = async (): Promise<{ props: GetSearchProps }> => {
    const query = gql`
        query GetSearchProps {
            countries {
                code
                name
                subdivisions {
                    code
                    name
                }
            }
            topics {
                name
            }
        }
    `;
    const { countries, topics } = await request<GetSearchProps>('https://api.findahelpline.com', print(query));
    return {
        props: {
            countries,
            topics,
        },
    };
};

export default IndexPage;
