import React, { ReactElement, ReactNode } from 'react';
import { AppBar, Box, Container, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { compact } from 'lodash/fp';

type Props = {
    children?: ReactNode;
    variant?: 'widget';
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            backgroundColor: '#F0F1F5',
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        appBarWidget: {
            boxShadow: 'none',
            backgroundColor: '#181719',
            color: '#FFFFFF',
        },
        container: {
            display: 'flex',
            alignItems: 'center',
        },
        logo: {
            display: 'grid',
            gridColumnGap: theme.spacing(1),
            gridTemplateColumns: 'auto 1fr',
            flexGrow: 1,
            paddingTop: theme.spacing(1),
            [theme.breakpoints.down('xs')]: {
                gridTemplateColumns: '1fr',
            },
            '& img': {
                height: '25px',
            },
        },
    }),
);

const NavBar = ({ children, variant }: Props): ReactElement => {
    const classes = useStyles();

    return (
        <AppBar
            className={compact([classes.appBar, variant == 'widget' && classes.appBarWidget]).join(' ')}
            position="static"
        >
            <Container className={classes.container}>
                <Box className={classes.logo}>
                    <img src="/logo.svg" alt="find a helpline" />
                    {variant == 'widget' && <Typography>Struggling? Talk to a real person, for free.</Typography>}
                </Box>
                <Box>{children}</Box>
            </Container>
        </AppBar>
    );
};

export default NavBar;
