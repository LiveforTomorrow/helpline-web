import React, { ReactElement, Fragment, useState } from 'react';
import CountrySelect from '../CountrySelect';
import { Typography, Box, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TopicSelect from '../TopicSelect';
import Link from 'next/link';

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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
            textAlign: 'center',
        },
        button: {
            borderRadius: '1000px',
        },
    }),
);

const TopBar = ({ topics, countries }: Props): ReactElement => {
    const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(undefined);
    const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            {!selectedCountry && (
                <Fragment>
                    <Typography variant="h5">find a helpline</Typography>
                    <Box my={2}>
                        <Typography>Struggling? Talk to a real person about what&apos;s going on, for free.</Typography>
                    </Box>
                </Fragment>
            )}
            <CountrySelect countries={countries} onChange={setSelectedCountry} />
            {selectedCountry && (
                <Fragment>
                    <Box my={2}>
                        <Typography variant="h5">What would you like help with?</Typography>
                    </Box>
                    <Box my={2}>
                        <TopicSelect topics={topics} onChange={setSelectedTopics} />
                    </Box>
                    <Link
                        href={{
                            pathname: `/${selectedCountry.code.toLowerCase()}`,
                            query: { topics: selectedTopics.map((topic) => topic.name) },
                        }}
                        passHref
                    >
                        <Button className={classes.button} variant="contained" color="primary" size="large">
                            Search
                        </Button>
                    </Link>
                </Fragment>
            )}
        </Box>
    );
};

export default TopBar;
