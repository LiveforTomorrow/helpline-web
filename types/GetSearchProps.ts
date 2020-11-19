/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LocalityEnum } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetSearchProps
// ====================================================

export interface GetSearchProps_countries_subdivisions {
  code: string;
  name: string;
}

export interface GetSearchProps_countries {
  code: string;
  name: string;
  locality: LocalityEnum;
  subdivisions: GetSearchProps_countries_subdivisions[];
}

export interface GetSearchProps_topics {
  name: string;
}

export interface GetSearchProps {
  /**
   * Find all countries
   */
  countries: GetSearchProps_countries[];
  /**
   * Find all topics
   */
  topics: GetSearchProps_topics[];
}
