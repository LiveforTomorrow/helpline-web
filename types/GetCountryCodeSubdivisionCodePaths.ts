/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LocalityEnum } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetCountryCodeSubdivisionCodePaths
// ====================================================

export interface GetCountryCodeSubdivisionCodePaths_countries_subdivisions {
  code: string;
}

export interface GetCountryCodeSubdivisionCodePaths_countries {
  code: string;
  locality: LocalityEnum;
  subdivisions: GetCountryCodeSubdivisionCodePaths_countries_subdivisions[];
}

export interface GetCountryCodeSubdivisionCodePaths {
  /**
   * Find all countries
   */
  countries: GetCountryCodeSubdivisionCodePaths_countries[];
}
