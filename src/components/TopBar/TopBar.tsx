import React, { ReactElement, Fragment } from 'react';
import { AppBar, Container, Toolbar, Typography, Button, Hidden } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import CallIcon from '@material-ui/icons/Call';

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
            paddingRight: 0,
            paddingLeft: 0,
            [theme.breakpoints.down('xs')]: {
                gridGap: theme.spacing(1),
                gridRowGap: 0,
                height: '80px',
            },
        },
        toolbarWithCountry: {
            gridTemplateColumns: '1fr auto auto',
            [theme.breakpoints.down('xs')]: {
                textAlign: 'center',
                gridTemplateColumns: '1fr 1fr',
                alignItems: 'flex-start',
            },
        },
        toolbarWithoutCountry: {
            gridTemplateColumns: '1fr auto',
        },
        toolbarSpacer: {
            padding: 0,
            height: '64px',
            [theme.breakpoints.down('xs')]: {
                height: '80px',
            },
        },
        title: {
            minWidth: '80px',
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.8rem',
            },
        },
        titleWithCountry: {
            [theme.breakpoints.down('xs')]: {
                gridColumn: '1 / span 2',
                alignSelf: 'center',
            },
        },
        button: {
            backgroundColor: '#CC001E',
            textAlign: 'left',
            borderRadius: '1000px',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.8rem',
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
        <Fragment>
            <AppBar className={classes.appBar} position="fixed">
                <Container>
                    <Toolbar
                        className={[
                            classes.toolbar,
                            country ? classes.toolbarWithCountry : classes.toolbarWithoutCountry,
                        ].join(' ')}
                    >
                        {country ? (
                            <Fragment>
                                <Typography className={[classes.title, classes.titleWithCountry].join(' ')}>
                                    Are you or someone else in immediate danger?
                                </Typography>
                                <Button
                                    color="inherit"
                                    className={classes.button}
                                    endIcon={<CallIcon />}
                                    href={`tel:${country.emergencyNumber}`}
                                >
                                    Dial {country.emergencyNumber}
                                </Button>
                            </Fragment>
                        ) : (
                            <Typography className={classes.title}>
                                Need to leave quickly? Click to leave this site and open the weather.
                            </Typography>
                        )}
                        <Button
                            color="inherit"
                            className={classes.button}
                            endIcon={<DirectionsRunIcon />}
                            href="https://accuweather.com"
                        >
                            Leave Quickly
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar className={classes.toolbarSpacer} />
        </Fragment>
    );
};

export default TopBar;
