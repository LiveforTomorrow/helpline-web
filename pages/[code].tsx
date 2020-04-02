import React, { ReactElement, Fragment } from 'react';
import { request } from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Typography, Container, Box } from '@material-ui/core';
import { useRouter } from 'next/router';
import Head from 'next/head';
import gql from 'graphql-tag';
import { print } from 'graphql';
import formatArrayIntoSentence from '../src/util/formatArrayIntoSentence';
import Chrome from '../src/components/Chrome';
import { CountryProps } from './__generated__/CountryProps';

const Country = ({ country }: CountryProps): ReactElement => {
    const router = useRouter();
    let { topics } = router.query;

    if (topics) {
        topics = [topics].flat();
    }

    return (
        <Fragment>
            <Head>
                <title>Find A Helpline | {country.name}</title>
            </Head>
            <Chrome country={country}>
                <Container>
                    <Box my={2}>
                        <Typography variant="h6">
                            Best helplines in {country.name}
                            {topics && <Fragment> for {formatArrayIntoSentence(topics).toLowerCase()}</Fragment>}.
                        </Typography>
                    </Box>
                </Container>
            </Chrome>
        </Fragment>
    );
};

export const getStaticProps: GetStaticProps = async (context): Promise<{ props: CountryProps }> => {
    const query = gql`
        query CountryProps($code: String!) {
            country(code: $code) {
                code
                name
                emergencyNumber
            }
        }
    `;
    const { country } = await request('https://api.findahelpline.com', print(query), { code: context.params.code });
    return {
        props: {
            country,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const query = gql`
        query Countries {
            countries {
                code
            }
        }
    `;
    const { countries } = await request('https://api.findahelpline.com', print(query));

    return {
        paths: countries.map((country) => {
            return {
                params: {
                    code: country.code.toLowerCase(),
                },
            };
        }),
        fallback: false,
    };
};

export default Country;
