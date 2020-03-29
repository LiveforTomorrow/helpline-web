import Head from 'next/head';
import React, { ReactElement, Fragment, useState } from 'react';
import TopBar from '../src/components/TopBar/TopBar';
import CountrySelect from '../src/components/CountrySelect';
import { request } from 'graphql-request';
import { Typography, Container, Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            textAlign: 'center',
        },
    }),
);
const Home = ({ countries }: Props): ReactElement => {
    const [country, setCountry] = useState(null);
    const classes = useStyles();

    return (
        <Fragment>
            <Head>
                <title>Find A Helpline</title>
            </Head>
            <TopBar />
            <Container className={classes.container} maxWidth="xs">
                <Box my={5}>
                    {!country && (
                        <Fragment>
                            <Typography variant="h5">find a helpline</Typography>
                            <Box my={2}>
                                <Typography>
                                    Struggling? Talk to a real person about what&apos;s going on, for free.
                                </Typography>
                            </Box>
                        </Fragment>
                    )}
                    <CountrySelect countries={countries} onChange={setCountry} />
                </Box>
            </Container>
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
