/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCountriesAndTopics
// ====================================================

export interface GetCountriesAndTopics_countries_subdivisions {
  __typename: "Subdivision";
  code: string;
  name: string;
}

export interface GetCountriesAndTopics_countries {
  __typename: "Country";
  code: string;
  name: string;
  subdivisions: GetCountriesAndTopics_countries_subdivisions[];
}

export interface GetCountriesAndTopics_topics {
  __typename: "Tag";
  name: string;
}

export interface GetCountriesAndTopics {
  /**
   * Find all countries
   */
  countries: GetCountriesAndTopics_countries[];
  /**
   * Find all topics
   */
  topics: GetCountriesAndTopics_topics[];
}
