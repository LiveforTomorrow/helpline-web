import React, { useState, ReactElement, ReactNode } from 'react';
import EmblaCarouselReact from 'embla-carousel-react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Fab } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import useWindowSize from '../../util/useWindowSize';
import ConditionalWrapper from '../../util/conditionalWrapper';

type Props = {
    children: ReactNode;
};

type size = {
    height?: number;
    width?: number;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            // // position: 'relative',
            // display: 'flex',
            // flex: '0 0 auto',
            // height: '40em',
            // // alignItems: 'flex-start',
            // // flexDirection: 'column',
            // '@media (min-width: 480px)': {
            //     flexDirection: 'row',
            // },
            // // minWidth: 0,
        },
        carouselWrapper: {
            // display: 'flex',
            // position: 'fixed',
            // alignItems: 'flex-start',
            // '@media (max-width: 320px)': {
            //     flexDirection: 'column',
            //     overflowX: 'scroll',
            // },
        },
        fab: {
            position: 'absolute',
            border: '1px solid black',
            backgroundColor: '#FFFFFF',
            borderRadius: '50%',
            flexShrink: 0,
            zIndex: theme.zIndex.mobileStepper,
            top: '15em',
        },
        prevIcon: {
            left: '0em',
            '@media (max-width: 320px)': {
                display: 'none',
            },
        },
        nextIcon: {
            right: '0em',
            '@media (max-width: 320px)': {
                display: 'none',
            },
        },
        icon: {
            fontSize: '4em',
        },
    }),
);

const OrganizationCarousel = ({ children }: Props): ReactElement => {
    const classes = useStyles();
    const size = useWindowSize();
    const [embla, setEmbla] = useState(null);

    return (
        <div className={classes.container}>
            <Fab
                onClick={(): void => embla.scrollPrev()}
                aria-label="scroll-previous"
                data-testid="scroll-previous"
                className={`${classes.fab} ${classes.prevIcon}`}
            >
                <ChevronLeftIcon className={`${classes.icon}`} />
            </Fab>
            <ConditionalWrapper
                condition={size && size.width >= 320}
                wrapper={(children): JSX.Element => (
                    <EmblaCarouselReact emblaRef={setEmbla} options={{ loop: false }}>
                        {children}
                    </EmblaCarouselReact>
                )}
            >
                <Container className={classes.carouselWrapper}>{children}</Container>
            </ConditionalWrapper>
            <Fab
                onClick={(): void => embla.scrollNext()}
                aria-label="scroll-next"
                data-testid="scroll-next"
                className={`${classes.fab} ${classes.nextIcon}`}
            >
                <ChevronRightIcon className={`${classes.icon}`} />
            </Fab>
        </div>
    );
};

export default OrganizationCarousel;
