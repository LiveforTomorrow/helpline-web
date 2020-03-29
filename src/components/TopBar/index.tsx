import React, { ReactElement, Fragment } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import CallIcon from '@material-ui/icons/Call';
import Link from 'next/link';

type Country = {
    emergencyNumber: string;
};

type Props = {
    country?: Country;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: '#181719',
        },
        toolbar: {
            display: 'grid',
            gridGap: theme.spacing(2),
            gridAutoFlow: 'column',
            gridTemplateColumns: '1fr',
            [theme.breakpoints.down('xs')]: {
                gridGap: theme.spacing(1),
                paddingTop: theme.spacing(1),
                paddingRight: theme.spacing(1),
                paddingBottom: theme.spacing(1),
                paddingLeft: theme.spacing(1),
            },
        },
        title: {
            fontSize: '0.8rem',
            minWidth: '80px',
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.7rem',
            },
        },
        button: {
            backgroundColor: '#CC001E',
            fontSize: '0.6rem',
            textAlign: 'left',
            borderRadius: '1000px',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            [theme.breakpoints.down('xs')]: {
                paddingRight: theme.spacing(1),
                paddingLeft: theme.spacing(1),
            },
            '&:hover': {
                backgroundColor: '#CC001E',
            },
        },
    }),
);

const TopBar = ({ country }: Props): ReactElement => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                {country ? (
                    <Fragment>
                        <Typography className={classes.title}>Are you or someone else in immediate danger?</Typography>
                        <Button
                            color="inherit"
                            className={classes.button}
                            endIcon={<CallIcon />}
                            href={`tel:${country.emergencyNumber}`}
                        >
                            Emergency Services
                        </Button>
                    </Fragment>
                ) : (
                    <Typography className={classes.title}>
                        Need to leave quickly? Click to leave this site and open the weather.
                    </Typography>
                )}
                <Link href="/weather" passHref>
                    <Button color="inherit" className={classes.button} endIcon={<DirectionsRunIcon />}>
                        Leave Quickly
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
