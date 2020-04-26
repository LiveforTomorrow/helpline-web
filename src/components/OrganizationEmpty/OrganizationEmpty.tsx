import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'grid',
            gridGap: theme.spacing(2),
            textAlign: 'center',
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
        },
        emoji: {
            fontSize: '4rem',
        },
    }),
);

const OrganizationEmpty = (): ReactElement => {
    const classes = useStyles();

    return (
        <Container maxWidth="xs" className={classes.container}>
            <Typography className={classes.emoji}>🤔</Typography>
            <Typography variant="h6">
                We’ve hunted high and low, but no helplines match that search criteria.
            </Typography>
            <Typography variant="h6">Try searching with fewer criteria.</Typography>
        </Container>
    );
};

export default OrganizationEmpty;
