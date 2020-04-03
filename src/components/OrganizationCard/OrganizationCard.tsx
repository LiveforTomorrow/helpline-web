import React, { ReactElement, Fragment } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Chip, Button } from '@material-ui/core';

type OpeningHour = {
    day: string;
    open: number;
    close: number;
};

type Organization = {
    name: string;
    alwaysOpen: boolean;
    openingHours: OpeningHour[];
};

type Props = {
    organization: Organization;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chip: {
            color: '#FFFFFF',
            fontWeight: 'bold',
            backgroundColor: theme.palette.secondary.main,
        },
    }),
);

const OrganizationCard = ({ organization }: Props): ReactElement => {
    const classes = useStyles();

    return (
        <Fragment>
            <Typography variant="h2">{organization.name}</Typography>
            {organization.alwaysOpen && <Chip className={classes.chip} label="24/7" />}
            {organization.alwaysOpen && <Button>Open</Button>}
        </Fragment>
    );
};

export default OrganizationCard;
