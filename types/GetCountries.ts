/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCountries
// ====================================================

export interface GetCountries_countries {
  __typename: "Country";
  code: string;
}

export interface GetCountries {
  /**
   * Find all countries
   */
  countries: GetCountries_countries[];
}
