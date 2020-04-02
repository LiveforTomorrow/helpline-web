/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CountryProps
// ====================================================

export interface CountryProps_country {
  __typename: "Country";
  code: string;
  name: string;
  emergencyNumber: string | null;
}

export interface CountryProps {
  /**
   * Find a country by code
   */
  country: CountryProps_country;
}

export interface CountryPropsVariables {
  code: string;
}
