import React, { ReactElement } from 'react';
import { request } from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import TopBar from '../src/components/TopBar';

type Country = {
    code: string;
    name: string;
    emergencyNumber: string;
};

type Props = {
    country: Country;
};

const Country = ({ country }: Props): ReactElement => {
    return <TopBar country={country} />;
};

export const getStaticProps: GetStaticProps = async (context): Promise<{ props: Props }> => {
    const query = `
      query {
        country(code: "${context.params.code}") {
          code
          name
          emergencyNumber
        }
      }
  `;
    const { country } = await request('https://api.findahelpline.com', query);
    return {
        props: {
            country,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const query = `
        query {
            countries {
                code
            }
        }
    `;
    const { countries } = await request('https://api.findahelpline.com', query);

    return {
        paths: countries.map((country) => {
            return {
                params: {
                    code: country.code.toLowerCase(),
                },
            };
        }),
        fallback: false,
    };
};

export default Country;
