import React, { ReactElement, Fragment } from 'react';
import { request } from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import Chrome from '../src/components/Chrome';
import { Typography, Container, Box } from '@material-ui/core';
import { useRouter } from 'next/router';
import formatArrayIntoSentence from '../src/util/formatArrayIntoSentence';
import Head from 'next/head';

type Country = {
    code: string;
    name: string;
    emergencyNumber: string;
};

type Props = {
    country: Country;
};

const Country = ({ country }: Props): ReactElement => {
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
                        <Typography>
                            Best helplines in{' '}
                            <Typography component="span" color="primary">
                                {country.name}
                            </Typography>
                            {topics && <Fragment> for {formatArrayIntoSentence(topics)}</Fragment>}.
                        </Typography>
                    </Box>
                </Container>
            </Chrome>
        </Fragment>
    );
};

export const getStaticProps: GetStaticProps = async (context): Promise<{ props: Props }> => {
    const query = `
      query {
        country(code: "${context.params.code}") {
          code
          name
          emergencyNumber
        }
      }
  `;
    const { country } = await request('https://api.findahelpline.com', query);
    return {
        props: {
            country,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const query = `
        query {
            countries {
                code
            }
        }
    `;
    const { countries } = await request('https://api.findahelpline.com', query);

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
