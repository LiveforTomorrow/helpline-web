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
    widget?: boolean;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            [theme.breakpoints.down('xs')]: {
                paddingRight: theme.spacing(1),
                paddingLeft: theme.spacing(1),
            },
        },
        appBar: {
            backgroundColor: (props: Props): string => (props.widget ? '#F0F1F5' : '#181719'),
            color: (props: Props): string => (props.widget ? '#000' : '#FFF'),
            zIndex: theme.zIndex.drawer + 2,
        },
        toolbar: {
            display: 'grid',
            gridGap: theme.spacing(2),
            paddingRight: 0,
            paddingLeft: 0,
            [theme.breakpoints.down('xs')]: {
                gridGap: theme.spacing(1),
                gridRowGap: 0,
                height: (props: Props): string => (props.widget ? 'auto' : '80px'),
            },
        },
        toolbarWithCountry: {
            gridTemplateColumns: '1fr auto auto',
            [theme.breakpoints.down('xs')]: {
                textAlign: (props: Props): string => (props.widget ? 'left' : 'center'),
                gridTemplateColumns: (props: Props): string => (props.widget ? '1fr auto' : '1fr 1fr'),
                alignItems: 'flex-start',
            },
        },
        toolbarWithoutCountry: {
            gridTemplateColumns: '1fr auto',
        },
        title: {
            minWidth: '80px',
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.8rem',
            },
        },
        titleWithCountry: {
            [theme.breakpoints.down('xs')]: {
                gridColumn: (props: Props): string => !props.widget && '1 / span 2',
                alignSelf: 'center',
            },
        },
        button: {
            backgroundColor: '#CC001E',
            color: '#FFF',
            textAlign: 'left',
            borderRadius: '1000px',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            alignSelf: 'center',
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.7rem',
            },
            '&:hover': {
                backgroundColor: '#CC001E',
            },
        },
        buttonEndIcon: {
            [theme.breakpoints.down('xs')]: {
                display: 'none',
            },
        },
    }),
);

const TopBar = ({ country, widget }: Props): ReactElement => {
    const classes = useStyles({ widget });

    return (
        <AppBar className={classes.appBar} position="static">
            <Container className={country && classes.container}>
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
                                classes={{ root: classes.button, endIcon: classes.buttonEndIcon }}
                                endIcon={<CallIcon />}
                                href={`tel:${country?.emergencyNumber || 911}`}
                                data-testid="emergencyServicesButton"
                            >
                                <Hidden smUp>Call {country.emergencyNumber || 911}</Hidden>
                                <Hidden only="xs">Emergency Services</Hidden>
                            </Button>
                        </Fragment>
                    ) : (
                        <Typography className={classes.title}>
                            Need to leave quickly? Click to leave this site and open the weather.
                        </Typography>
                    )}
                    {!widget && (
                        <Button
                            color="inherit"
                            classes={{ root: classes.button, endIcon: classes.buttonEndIcon }}
                            endIcon={<DirectionsRunIcon />}
                            href="https://accuweather.com"
                            data-testid="leaveQuicklyButton"
                        >
                            Leave Quickly
                        </Button>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default TopBar;
