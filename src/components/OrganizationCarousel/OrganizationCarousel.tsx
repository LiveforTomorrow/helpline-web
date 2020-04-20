import React, { useState, useEffect, useCallback, ReactElement, ReactNode } from 'react';
import EmblaCarouselReact from 'embla-carousel-react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import useWindowSize from '../../util/useWindowSize';
import ConditionalWrapper from '../../util/conditionalWrapper';
import { PrevButton, NextButton } from './OrganizationCarouselButtons';

type Props = {
    children: ReactNode;
};

type size = {
    height?: number;
    width?: number;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        carouselWrapper: {
            display: 'flex',
            alignItems: 'flex-start',
            '@media (max-width: 320px)': {
                flexDirection: 'column',
                overflowX: 'scroll',
            },
        },
    }),
);

const OrganizationCarousel = ({ children }: Props): ReactElement => {
    const classes = useStyles();
    const size = useWindowSize();
    const [embla, setEmbla] = useState(null);
    const scrollPrev = useCallback(() => embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla.scrollNext(), [embla]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    useEffect(() => {
        const onSelect = (): void => {
            setPrevBtnEnabled(embla.canScrollPrev());
            setNextBtnEnabled(embla.canScrollNext());
        };
        if (embla) {
            embla.on('select', onSelect);
            onSelect();
        }
    }, [embla]);

    return (
        <div>
            <ConditionalWrapper
                condition={size && size.width >= 320}
                wrapper={(children): JSX.Element => (
                    <EmblaCarouselReact
                        emblaRef={setEmbla}
                        options={{ loop: false, align: 'start', containScroll: true }}
                    >
                        {children}
                    </EmblaCarouselReact>
                )}
            >
                <Container className={classes.carouselWrapper}>{children}</Container>
            </ConditionalWrapper>
            {prevBtnEnabled && <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />}
            {nextBtnEnabled && <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />}
        </div>
    );
};

export default OrganizationCarousel;
