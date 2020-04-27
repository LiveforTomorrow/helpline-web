import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Button, Box, Fab } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import PublicIcon from '@material-ui/icons/Public';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import Link from 'next/link';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import OrganizationOpen from '../OrganizationOpen';
import Chips from '../Chips';

type OpeningHour = {
    day: string;
    open: string;
    close: string;
};

type HumanSupportType = {
    name: string;
};

type Category = {
    name: string;
};

type Topic = {
    name: string;
};

export type Organization = {
    slug: string;
    name: string;
    alwaysOpen: boolean;
    humanSupportTypes: HumanSupportType[];
    categories: Category[];
    openingHours: OpeningHour[];
    topics: Topic[];
    smsNumber?: string;
    phoneNumber?: string;
    url?: string;
    chatUrl?: string;
    timezone: string;
    featured: boolean;
};

type Props = {
    organization: Organization;
    variant?: 'widget';
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            display: 'flex',
            border: '1px solid #000',
            borderRadius: '10px',
            gridTemplateColumns: '1fr 88px',
            height: 'calc(100% - 2px)',
            '& > div': {
                padding: theme.spacing(2),
            },
            [theme.breakpoints.down('xs')]: {
                flexDirection: 'column',
            },
        },
        webChatSpacing: {
            display: 'none',
            [theme.breakpoints.down('xs')]: {
                display: 'inline',
            },
        },
        webChatLineBreak: {
            [theme.breakpoints.down('xs')]: {
                display: 'none',
            },
        },
        grid: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
        },
        header: {
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            marginLeft: theme.spacing(1),
            gridGap: theme.spacing(1),
            alignItems: 'center',
        },
        heading: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            '& a': {
                fontWeight: 'bold',
                textDecoration: 'underline',
                color: theme.palette.text.primary,
            },
        },
        featured: {
            color: '#FFD300',
        },
        button: {
            textTransform: 'none',
            lineHeight: '1.5',
        },
        buttonOpen: {
            paddingTop: 0,
            paddingBottom: 0,
            height: '38px',
        },
        buttonDisabled: {
            color: `${theme.palette.text.primary} !important`,
        },
        buttonLink: {
            textDecoration: 'underline',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
        side: {
            display: 'grid',
            backgroundColor: '#F0F1F5',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
            textAlign: 'center',
            gridRowGap: theme.spacing(2),
            gridAutoRows: 'min-content',
            [theme.breakpoints.down('xs')]: {
                borderTopRightRadius: '0',
                borderBottomLeftRadius: '10px',
                gridAutoFlow: 'column',
            },
        },
        fab: {
            fontSize: '2rem',
        },
        fabLabel: {
            textTransform: 'uppercase',
            fontSize: '0.8rem',
            lineHeight: '1rem',
            paddingTop: theme.spacing(1),
        },
    }),
);

const OrganizationCard = ({ organization, variant }: Props): ReactElement => {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Box className={classes.grid}>
                <Box className={classes.header}>
                    <Typography variant="h6" className={classes.heading}>
                        {variant === 'widget' && <a>{organization.name}</a>}
                        {!variant && (
                            <Link href="/organizations/[slug]" as={`/organizations/${organization.slug}`} passHref>
                                <a>{organization.name}</a>
                            </Link>
                        )}
                    </Typography>
                    {organization.featured && (
                        <span className={classes.featured}>
                            <BookmarkIcon />
                        </span>
                    )}
                </Box>
                {(organization.alwaysOpen || organization.openingHours.length > 0) && (
                    <Box data-testid="open">
                        <Button
                            size="large"
                            classes={{
                                root: [classes.button, classes.buttonOpen].join(' '),
                                disabled: classes.buttonDisabled,
                            }}
                            startIcon={<AccessTimeIcon />}
                            disabled
                        >
                            <OrganizationOpen organization={organization} />
                        </Button>
                    </Box>
                )}
                {organization.humanSupportTypes.length > 0 && (
                    <Box>
                        <Button
                            size="large"
                            classes={{ root: classes.button, disabled: classes.buttonDisabled }}
                            startIcon={<AccountCircleIcon />}
                            disabled
                            data-testid="humanSupportTypes"
                        >
                            {organization.humanSupportTypes.map((humanSupportType) => humanSupportType.name).join(', ')}
                        </Button>
                    </Box>
                )}
                {(organization.smsNumber || organization.phoneNumber) && (
                    <Box>
                        {organization.smsNumber && (
                            <Button
                                href={`sms:${organization.smsNumber}`}
                                size="large"
                                className={[classes.button, classes.buttonLink].join(' ')}
                                startIcon={<SmsOutlinedIcon />}
                                data-testid="smsNumber"
                            >
                                {organization.smsNumber}
                            </Button>
                        )}
                        {organization.phoneNumber && (
                            <Button
                                href={`tel:${organization.phoneNumber}`}
                                size="large"
                                className={[classes.button, classes.buttonLink].join(' ')}
                                startIcon={<PhoneIcon />}
                                data-testid="phoneNumber"
                            >
                                {organization.phoneNumber}
                            </Button>
                        )}
                    </Box>
                )}
                {organization.url && (
                    <Box>
                        <Button
                            size="large"
                            href={organization.url}
                            className={[classes.button, classes.buttonLink].join(' ')}
                            startIcon={<PublicIcon />}
                            data-testid="url"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {
                                organization.url
                                    .replace('http://', '')
                                    .replace('https://', '')
                                    .replace('www.', '')
                                    .split(/[/?#]/)[0]
                            }
                        </Button>
                    </Box>
                )}
                {organization.categories.length > 0 && (
                    <Box ml={1} data-testid="categories">
                        <Chips items={organization.categories} max={4} />
                    </Box>
                )}
            </Box>
            {(organization.smsNumber || organization.phoneNumber || organization.chatUrl) && (
                <Box className={classes.side} data-testid="fabs">
                    {organization.smsNumber && (
                        <Box>
                            <Fab
                                href={`sms:${organization.smsNumber}`}
                                color="primary"
                                aria-label="text"
                                data-testid="smsNumberFab"
                                className={classes.fab}
                            >
                                <SmsOutlinedIcon fontSize="inherit" />
                            </Fab>
                            <Typography className={classes.fabLabel}>Text</Typography>
                        </Box>
                    )}
                    {organization.phoneNumber && (
                        <Box>
                            <Fab
                                href={`tel:${organization.phoneNumber}`}
                                color="primary"
                                aria-label="call"
                                data-testid="phoneNumberFab"
                                className={classes.fab}
                            >
                                <PhoneIcon fontSize="inherit" />
                            </Fab>
                            <Typography className={classes.fabLabel}>Call</Typography>
                        </Box>
                    )}
                    {organization.chatUrl && (
                        <Box>
                            <Fab
                                href={organization.chatUrl}
                                color="primary"
                                aria-label="web chat"
                                data-testid="chatUrlFab"
                                className={classes.fab}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageOutlinedIcon fontSize="inherit" />
                            </Fab>
                            <Typography className={classes.fabLabel}>
                                Web<span className={classes.webChatSpacing}>&nbsp;</span>
                                <br className={classes.webChatLineBreak} />
                                Chat
                            </Typography>
                        </Box>
                    )}
                </Box>
            )}
        </Box>
    );
};

export default OrganizationCard;
