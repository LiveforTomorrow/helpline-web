/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCountryAndSubdivisions
// ====================================================

export interface GetCountryAndSubdivisions_country_subdivisions {
  __typename: "Subdivision";
  code: string;
  name: string;
}

export interface GetCountryAndSubdivisions_country {
  __typename: "Country";
  code: string;
  name: string;
  emergencyNumber: string | null;
  subdivisions: GetCountryAndSubdivisions_country_subdivisions[];
}

export interface GetCountryAndSubdivisions {
  /**
   * Find a country by code
   */
  country: GetCountryAndSubdivisions_country;
}

export interface GetCountryAndSubdivisionsVariables {
  countryCode: string;
}
