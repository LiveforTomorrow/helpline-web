import React, { ReactElement, useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Divider, ListItemIcon } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import EmailIcon from '@material-ui/icons/Email';
import ExtensionIcon from '@material-ui/icons/Extension';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from 'next/link';

const useStyles = makeStyles(() =>
    createStyles({
        list: {
            width: 250,
        },
    }),
);

const SideBar = (): ReactElement => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <>
            <IconButton onClick={(): void => setOpen(true)} size="small" data-testid="menuButton">
                <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={open} onClose={(): void => setOpen(false)}>
                <div className={classes.list} onClick={(): void => setOpen(false)}>
                    <List>
                        <Link href="/" passHref prefetch={process.env.NODE_ENV === 'production'}>
                            <ListItem button component="a">
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                        </Link>
                        <Link href="/about" passHref prefetch={process.env.NODE_ENV === 'production'}>
                            <ListItem button component="a">
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary="About" />
                            </ListItem>
                        </Link>
                        <Link href="/get-the-widget" passHref prefetch={process.env.NODE_ENV === 'production'}>
                            <ListItem button component="a">
                                <ListItemIcon>
                                    <ExtensionIcon />
                                </ListItemIcon>
                                <ListItemText primary="Get the Widget" />
                            </ListItem>
                        </Link>
                        <Link href="/contact" passHref prefetch={process.env.NODE_ENV === 'production'}>
                            <ListItem button component="a">
                                <ListItemIcon>
                                    <EmailIcon />
                                </ListItemIcon>
                                <ListItemText primary="Contact" />
                            </ListItem>
                        </Link>
                        <Link href="/gratitude" passHref prefetch={process.env.NODE_ENV === 'production'}>
                            <ListItem button component="a">
                                <ListItemIcon>
                                    <FavoriteIcon />
                                </ListItemIcon>
                                <ListItemText primary="Gratitude" />
                            </ListItem>
                        </Link>
                        <Divider />
                        <Link href="/privacy" passHref prefetch={process.env.NODE_ENV === 'production'}>
                            <ListItem button component="a">
                                <ListItemText primary="Privacy Policy" primaryTypographyProps={{ variant: 'body2' }} />
                            </ListItem>
                        </Link>
                        <Link href="/terms" passHref prefetch={process.env.NODE_ENV === 'production'}>
                            <ListItem button component="a">
                                <ListItemText
                                    primary="Terms of Service"
                                    primaryTypographyProps={{ variant: 'body2' }}
                                />
                            </ListItem>
                        </Link>
                    </List>
                </div>
            </Drawer>
        </>
    );
};

export default SideBar;
