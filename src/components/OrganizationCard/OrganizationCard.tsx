import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Chip, Button, Box, Fab, Hidden } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import PhoneIcon from '@material-ui/icons/Phone';
import PublicIcon from '@material-ui/icons/Public';
import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';

type OpeningHour = {
    day: string;
    open: number;
    close: number;
};

type HumanSupportType = {
    name: string;
};

type Category = {
    name: string;
};

type Organization = {
    name: string;
    alwaysOpen: boolean;
    humanSupportTypes: HumanSupportType[];
    categories: Category[];
    openingHours: OpeningHour[];
    smsNumber?: string;
    phoneNumber?: string;
    url?: string;
    chatUrl?: string;
};

type Props = {
    organization: Organization;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            display: 'grid',
            border: '1px solid #000',
            borderRadius: '10px',
            gridTemplateColumns: '1fr 88px',
            '& > div': {
                padding: theme.spacing(2),
            },
            '@media (max-width: 320px)': {
                gridTemplateColumns: '1fr',
            },
        },
        grid: {
            display: 'grid',
            gridAutoRows: 'min-content',
        },
        heading: {
            fontWeight: 'bold',
            textDecoration: 'underline',
        },
        chipAlwaysOpen: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            backgroundColor: theme.palette.secondary.main,
            textDecoration: 'none',
        },
        open: {
            color: '#3FA607',
            fontWeight: 'bold',
        },
        button: {
            textTransform: 'none',
        },
        buttonDisabled: {
            color: '#000000 !important',
        },
        buttonLink: {
            textDecoration: 'underline',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
        chips: {
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
            marginTop: theme.spacing(1),
            '& > *': {
                marginRight: theme.spacing(0.5),
                marginBottom: theme.spacing(0.5),
            },
        },
        chip: {
            color: '#FFFFFF',
            backgroundColor: '#000000',
            fontWeight: 600,
        },
        side: {
            display: 'grid',
            backgroundColor: '#F0F1F5',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
            textAlign: 'center',
            '@media (max-width: 320px)': {
                borderTopRightRadius: '0',
                borderBottomLeftRadius: '10px',
                gridTemplateColumns: '1fr 1fr 1fr',
            },
        },
        fabLabel: {
            textTransform: 'uppercase',
            fontSize: '0.8rem',
            lineHeight: '1rem',
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
    }),
);

const OrganizationCard = ({ organization }: Props): ReactElement => {
    const classes = useStyles();

    return (
        <Box className={classes.box}>
            <Box className={classes.grid}>
                <Typography variant="h6">
                    <span className={classes.heading}>{organization.name}</span>{' '}
                    {organization.alwaysOpen && <Chip className={classes.chipAlwaysOpen} label="24/7" />}
                </Typography>
                {organization.alwaysOpen && (
                    <Box>
                        <Button
                            size="large"
                            classes={{ root: classes.button, disabled: classes.buttonDisabled }}
                            startIcon={<AccessTimeIcon />}
                            disabled
                        >
                            <span className={classes.open}>Open</span>
                            <Hidden xsDown>&nbsp;&#8226; Available 24/7</Hidden>
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
                        >
                            {organization.url}
                        </Button>
                    </Box>
                )}
                {organization.categories.length > 0 && (
                    <Box className={classes.chips}>
                        {organization.categories.map((category, index) => (
                            <Chip className={classes.chip} key={index} label={category.name} />
                        ))}
                    </Box>
                )}
            </Box>
            <Box className={classes.side}>
                {organization.smsNumber && (
                    <Box>
                        <Fab href={`sms:${organization.smsNumber}`} color="primary" aria-label="text">
                            <SmsOutlinedIcon />
                        </Fab>
                        <Typography className={classes.fabLabel}>Text</Typography>
                    </Box>
                )}
                {organization.phoneNumber && (
                    <Box>
                        <Fab href={`tel:${organization.phoneNumber}`} color="primary" aria-label="call">
                            <PhoneIcon />
                        </Fab>
                        <Typography className={classes.fabLabel}>Call</Typography>
                    </Box>
                )}
                {organization.chatUrl && (
                    <Box>
                        <Fab href={organization.chatUrl} color="primary" aria-label="text">
                            <MessageOutlinedIcon />
                        </Fab>
                        <Typography className={classes.fabLabel}>Web Chat</Typography>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default OrganizationCard;
