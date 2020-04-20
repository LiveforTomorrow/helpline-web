import React, { Fragment, ReactElement } from 'react';
import { Box, Typography } from '@material-ui/core';
import * as Faker from 'faker';
import OrganizationCard from '../OrganizationCard/OrganizationCard';
import OrganizationCarousel from './OrganizationCarousel';

Faker.seed(30);

export default {
    title: 'OrganizationCarousel',
};

const organization = {
    slug: 'youthline',
    name: 'Youthline',
    alwaysOpen: true,
    openingHours: [],
    humanSupportTypes: [{ name: 'Volunteers' }, { name: 'Staff' }],
    categories: [{ name: 'For youth' }, { name: 'All issues' }],
    smsNumber: '234',
    phoneNumber: '0800 376 633',
    url: 'https://www.youthline.co.nz/learn-and-grow.html',
    chatUrl: 'https://youthline.co.nz',
    timezone: 'Pacific/Auckland',
    topics: [],
};

export const Default = (): ReactElement => (
    <OrganizationCarousel>
        {[1, 2, 3, 4, 5, 6].map((v, index) => (
            <OrganizationCard key={index + organization.slug} organization={organization} />
        ))}
    </OrganizationCarousel>
);
