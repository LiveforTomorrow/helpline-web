/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Countries
// ====================================================

export interface Countries_countries {
  __typename: "Country";
  code: string;
}

export interface Countries {
  /**
   * Find all countries
   */
  countries: Countries_countries[];
}
