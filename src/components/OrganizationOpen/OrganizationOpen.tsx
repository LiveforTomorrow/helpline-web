import React, { ReactElement, useState, Fragment } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useInterval } from 'beautiful-react-hooks';
import isOpen, { IsOpenStatus } from '../../util/isOpen';

type OpeningHour = {
    day: string;
    open: string;
    close: string;
};

type Organization = {
    alwaysOpen: boolean;
    openingHours: OpeningHour[];
    timezone: string;
};

type Props = {
    organization: Organization;
};

const useStyles = makeStyles(() =>
    createStyles({
        body: {
            fontSize: 'inherit',
        },
        open: {
            color: '#3FA607',
            fontWeight: 'bold',
        },
    }),
);

const OrganizationOpen = ({ organization }: Props): ReactElement => {
    const classes = useStyles();
    const [openStatus, setOpenStatus] = useState<IsOpenStatus>(isOpen(organization));

    if (!organization.alwaysOpen) {
        useInterval(() => setOpenStatus(isOpen(organization)), 1000);
    }

    return (
        <Typography className={classes.body}>
            {organization.alwaysOpen && (
                <Fragment>
                    <span className={classes.open}>Open</span> &nbsp;&middot;&nbsp; <span>Available 24/7</span>
                </Fragment>
            )}
            {!organization.alwaysOpen && (
                <Fragment>
                    {openStatus.open && (
                        <Fragment>
                            <span className={classes.open}>Open</span> &nbsp;&middot;&nbsp;{' '}
                            <span>
                                {openStatus.openTime.local().format('h:mm A')} -{' '}
                                {openStatus.closeTime.local().format('h:mm A')}
                            </span>
                        </Fragment>
                    )}
                    {!openStatus.open && <span>Closed</span>}
                </Fragment>
            )}
        </Typography>
    );
};

export default OrganizationOpen;
