/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCountry
// ====================================================

export interface GetCountry_country {
  __typename: "Country";
  code: string;
  name: string;
  emergencyNumber: string | null;
}

export interface GetCountry {
  /**
   * Find a country by code
   */
  country: GetCountry_country;
}

export interface GetCountryVariables {
  countryCode: string;
}
