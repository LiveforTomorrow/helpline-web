import React, { useState, useEffect, useCallback, useContext, ReactElement, ReactNode } from 'react';
import EmblaCarouselReact from 'embla-carousel-react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Container } from '@material-ui/core';
import { useWindowResize, useThrottledFn } from 'beautiful-react-hooks';
import ConditionalWrapper from '../../util/conditionalWrapper';
import OrganizationContext from '../../context/organizationContext';
import OrganizationCard from '../OrganizationCard/OrganizationCard';
import { PrevButton, NextButton } from './OrganizationCarouselButtons';

type size = {
    height?: number;
    width?: number;
};

const organizations = [
    {
        slug: 'youthline',
        name: 'Youthline',
        alwaysOpen: true,
        smsNumber: '234',
        phoneNumber: '0800 376 633',
        url: 'https://www.youthline.co.nz',
        chatUrl: 'https://www.youthline.co.nz/web-chat-counselling.html',
        timezone: 'Pacific/Auckland',
        topics: [{ name: 'Topic 1' }],
        categories: [{ name: 'Category 1' }],
        humanSupportTypes: [],
        openingHours: [
            {
                day: 'monday',
                open: '2000-01-01T00:00:00Z',
                close: '2000-01-01T23:59:00Z',
            },
        ],
    },
    {
        slug: 'youthline',
        name: 'Youthline',
        alwaysOpen: true,
        smsNumber: '234',
        phoneNumber: '0800 376 633',
        url: 'https://www.youthline.co.nz',
        chatUrl: 'https://www.youthline.co.nz/web-chat-counselling.html',
        timezone: 'Pacific/Auckland',
        topics: [{ name: 'Topic 1' }],
        categories: [{ name: 'Category 1' }],
        humanSupportTypes: [],
        openingHours: [
            {
                day: 'monday',
                open: '2000-01-01T00:00:00Z',
                close: '2000-01-01T23:59:00Z',
            },
        ],
    },
    {
        slug: 'youthline',
        name: 'Youthline',
        alwaysOpen: true,
        smsNumber: '234',
        phoneNumber: '0800 376 633',
        url: 'https://www.youthline.co.nz',
        chatUrl: 'https://www.youthline.co.nz/web-chat-counselling.html',
        timezone: 'Pacific/Auckland',
        topics: [{ name: 'Topic 1' }],
        categories: [{ name: 'Category 1' }],
        humanSupportTypes: [],
        openingHours: [
            {
                day: 'monday',
                open: '2000-01-01T00:00:00Z',
                close: '2000-01-01T23:59:00Z',
            },
        ],
    },
    {
        slug: 'youthline',
        name: 'Youthline',
        alwaysOpen: true,
        smsNumber: '234',
        phoneNumber: '0800 376 633',
        url: 'https://www.youthline.co.nz',
        chatUrl: 'https://www.youthline.co.nz/web-chat-counselling.html',
        timezone: 'Pacific/Auckland',
        topics: [{ name: 'Topic 1' }],
        categories: [{ name: 'Category 1' }],
        humanSupportTypes: [],
        openingHours: [
            {
                day: 'monday',
                open: '2000-01-01T00:00:00Z',
                close: '2000-01-01T23:59:00Z',
            },
        ],
    },
];

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

const OrganizationCarousel = (): ReactElement => {
    const classes = useStyles();

    // const { organizations } = useContext(OrganizationContext);
    const [embla, setEmbla] = useState(null);

    const scrollPrev = useCallback(() => embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla.scrollNext(), [embla]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);

    useWindowResize(() => {
        setWidth(window.innerWidth);
    });

    useEffect(() => {
        if (embla) {
            // const onSelect = (): void => {
            //     setPrevBtnEnabled(embla.canScrollPrev());
            //     setNextBtnEnabled(embla.canScrollNext());
            // };
            // embla.on('select', () => {
            //     console.log(`Current index is ${embla.selectedScrollSnap()}`);
            // });
            // embla.on('select', onSelect);
            // onSelect();
        }
    }, [embla]);

    return (
        <Container>
            <ConditionalWrapper
                condition={true}
                wrapper={(children): ReactElement => (
                    <EmblaCarouselReact
                        emblaRef={setEmbla}
                        options={{ loop: false, align: 'start', containScroll: true }}
                    >
                        {children}
                    </EmblaCarouselReact>
                )}
            >
                <EmblaCarouselReact emblaRef={setEmbla} options={{ loop: false, align: 'start', containScroll: true }}>
                    {organizations &&
                        organizations.map((organization) => (
                            <Box key={organization.slug} p={2}>
                                <OrganizationCard organization={organization} />
                            </Box>
                        ))}
                </EmblaCarouselReact>
            </ConditionalWrapper>
            {prevBtnEnabled && <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />}
            {nextBtnEnabled && <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />}
        </Container>
    );
};

export default OrganizationCarousel;
