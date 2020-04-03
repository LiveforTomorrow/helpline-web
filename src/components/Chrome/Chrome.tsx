import React, { ReactElement, ReactNode } from 'react';
import Div100vh from 'react-div-100vh';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TopBar from '../TopBar';

type Country = {
    emergencyNumber: string;
};

type Props = {
    country?: Country;
    children: ReactNode;
};

const useStyles = makeStyles(() =>
    createStyles({
        div100vh: {
            display: 'grid',
            gridTemplateRows: 'auto 1fr',
        },
        content: {
            overflow: 'auto',
        },
    }),
);
const Chrome = ({ country, children }: Props): ReactElement => {
    const classes = useStyles();

    return (
        <Div100vh className={classes.div100vh} as="main">
            <TopBar country={country} />
            <div className={classes.content}>{children}</div>
        </Div100vh>
    );
};

export default Chrome;
