import React, { ReactElement, Fragment } from 'react';
import { Typography, Link, Box } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import NextLink from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            textAlign: 'center',
            margin: theme.spacing(2),
        },
        links: {
            display: 'grid',
            gridGap: theme.spacing(1),
            gridAutoFlow: 'column',
            fontSize: '0.8rem',
            marginBottom: theme.spacing(1),
        },
        link: {
            color: '#999999',
        },
        copyright: {
            fontSize: '0.8rem',
            fontWeight: 'bold',
            color: '#999999',
        },
    }),
);

const Footer = (): ReactElement => {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Typography className={classes.links}>
                <NextLink href="/privacy" passHref>
                    <Link className={classes.link} data-testid="privacy">
                        Your Privacy
                    </Link>
                </NextLink>
                <NextLink href="/about" passHref>
                    <Link className={classes.link} data-testid="about">
                        About
                    </Link>
                </NextLink>
                <Link href="mailto:elliot@livefortomorrow.co" className={classes.link} data-testid="contact">
                    Contact
                </Link>
                <Link href="https://zealnz.typeform.com/to/BtdlLP" className={classes.link} data-testid="crowdsource">
                    Crowdsource
                </Link>
            </Typography>
            <Typography className={classes.copyright}>
                Powered by Live For Tomorrow &copy; {new Date().getFullYear()}
            </Typography>
        </Box>
    );
};

export default Footer;
