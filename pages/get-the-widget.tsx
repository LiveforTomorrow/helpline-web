import React, { ReactElement } from 'react';
import { request } from 'graphql-request';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import gql from 'graphql-tag';
import { print } from 'graphql';
import WidgetPartners from '../src/components/WidgetPartners';
import { WidgetProps } from '../src/components/Widget/Widget';
import { GetWidgetCountryCodeProps } from '../types/GetWidgetCountryCodeProps';

const GetTheWidgetPage = (widgetProps: WidgetProps): ReactElement => {
    return (
        <>
            <Head>
                <title>Find A Helpline | Get the Widget</title>
            </Head>
            <WidgetPartners widgetProps={widgetProps} />
        </>
    );
};

export const getStaticProps: GetStaticProps = async (): Promise<{ props: WidgetProps }> => {
    const query = gql`
        query GetWidgetCountryCodeProps($countryCode: String!) {
            country(code: $countryCode) {
                code
                name
                emergencyNumber
                subdivisions {
                    code
                    name
                }
            }
            organizations(countryCode: $countryCode, subdivisionCodes: []) {
                nodes {
                    id
                    slug
                    name
                    alwaysOpen
                    smsNumber
                    phoneNumber
                    url
                    chatUrl
                    timezone
                    featured
                    verified
                    rating
                    reviewCount
                    humanSupportTypes {
                        name
                    }
                    categories {
                        name
                    }
                    topics {
                        name
                    }
                    openingHours {
                        day
                        open
                        close
                    }
                }
            }
            categories {
                name
            }
            humanSupportTypes {
                name
            }
            topics {
                name
            }
            countries {
                code
                name
                emergencyNumber
                subdivisions {
                    code
                    name
                }
            }
        }
    `;
    const { country, organizations, categories, humanSupportTypes, topics, countries } = await request<
        GetWidgetCountryCodeProps
    >('https://api.findahelpline.com', print(query), {
        countryCode: 'us',
    });

    return {
        props: {
            preselectedCountry: country,
            organizations: organizations.nodes,
            categories,
            humanSupportTypes,
            topics,
            countries,
        },
    };
};

export default GetTheWidgetPage;
