/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCountriesAndSubdivisions
// ====================================================

export interface GetCountriesAndSubdivisions_countries_subdivisions {
  __typename: "Subdivision";
  code: string;
}

export interface GetCountriesAndSubdivisions_countries {
  __typename: "Country";
  code: string;
  subdivisions: GetCountriesAndSubdivisions_countries_subdivisions[];
}

export interface GetCountriesAndSubdivisions {
  /**
   * Find all countries
   */
  countries: GetCountriesAndSubdivisions_countries[];
}
