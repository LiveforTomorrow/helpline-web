import React, { ReactElement } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Chip } from '@material-ui/core';

type Item = {
    name: string;
};

type Props = {
    items: Item[];
    max?: number;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
            backgroundColor: theme.palette.text.primary,
            fontWeight: 600,
        },
    }),
);

const Chips = ({ items, max }: Props): ReactElement => {
    const classes = useStyles();

    let filteredItems: Item[];

    if (max && items.length > max) {
        filteredItems = items.slice(0, max);
    } else {
        filteredItems = items;
    }

    return (
        <Box className={classes.chips}>
            {filteredItems.map((chip, index) => (
                <Chip className={classes.chip} key={index} label={chip.name} data-testid="chip" />
            ))}
            {max && items.length > max && <Chip className={classes.chip} label={`+${items.length - max} more`}></Chip>}
        </Box>
    );
};

export default Chips;
