import React, { ReactElement, Fragment } from 'react';
import { request } from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import gql from 'graphql-tag';
import { print } from 'graphql';
import Chrome from '../src/components/Chrome';
import { GetCountryAndOrganizations } from '../types/GetCountryAndOrganizations';
import OrganizationList from '../src/components/OrganizationList';

const CountryPage = ({ country, organizations }: GetCountryAndOrganizations): ReactElement => {
    const router = useRouter();
    let { topics } = router.query;

    if (topics) {
        topics = [topics].flat();
    } else {
        topics = [];
    }

    return (
        <Fragment>
            <Head>
                <title>Find A Helpline | {country.name}</title>
            </Head>
            <Chrome country={country}>
                <OrganizationList organizations={organizations.nodes} country={country} topics={topics} />
            </Chrome>
        </Fragment>
    );
};

export const getStaticProps: GetStaticProps = async (context): Promise<{ props: GetCountryAndOrganizations }> => {
    const query = gql`
        query GetCountryAndOrganizations($countryCode: String!) {
            country(code: $countryCode) {
                code
                name
                emergencyNumber
            }
            organizations(countryCode: $countryCode) {
                nodes {
                    slug
                    name
                    alwaysOpen
                    smsNumber
                    phoneNumber
                    url
                    chatUrl
                    timezone
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
        }
    `;
    const { country, organizations } = await request('https://api.findahelpline.com', print(query), {
        countryCode: context.params.countryCode,
    });
    return {
        props: {
            country,
            organizations,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const query = gql`
        query GetCountries {
            countries {
                code
            }
        }
    `;
    const { countries } = await request('https://api.findahelpline.com', print(query));

    return {
        paths: countries.map((country) => {
            return {
                params: {
                    countryCode: country.code.toLowerCase(),
                },
            };
        }),
        fallback: false,
    };
};

export default CountryPage;
