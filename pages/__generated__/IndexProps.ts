/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexProps
// ====================================================

export interface IndexProps_countries {
  __typename: "Country";
  code: string;
  name: string;
}

export interface IndexProps_topics {
  __typename: "Tag";
  name: string;
}

export interface IndexProps {
  /**
   * Find all countries
   */
  countries: IndexProps_countries[];
  /**
   * Find all topics
   */
  topics: IndexProps_topics[];
}
