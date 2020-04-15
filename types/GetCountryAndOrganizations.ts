/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCountryAndOrganizations
// ====================================================

export interface GetCountryAndOrganizations_country {
  __typename: "Country";
  code: string;
  name: string;
  emergencyNumber: string | null;
}

export interface GetCountryAndOrganizations_organizations_nodes_humanSupportTypes {
  __typename: "Tag";
  name: string;
}

export interface GetCountryAndOrganizations_organizations_nodes_categories {
  __typename: "Tag";
  name: string;
}

export interface GetCountryAndOrganizations_organizations_nodes_topics {
  __typename: "Tag";
  name: string;
}

export interface GetCountryAndOrganizations_organizations_nodes_openingHours {
  __typename: "OpeningHour";
  day: string;
  open: any;
  close: any;
}

export interface GetCountryAndOrganizations_organizations_nodes {
  __typename: "Organization";
  slug: string;
  name: string;
  alwaysOpen: boolean;
  smsNumber: string | null;
  phoneNumber: string | null;
  url: string | null;
  chatUrl: string | null;
  timezone: string;
  humanSupportTypes: GetCountryAndOrganizations_organizations_nodes_humanSupportTypes[];
  categories: GetCountryAndOrganizations_organizations_nodes_categories[];
  topics: GetCountryAndOrganizations_organizations_nodes_topics[];
  openingHours: GetCountryAndOrganizations_organizations_nodes_openingHours[];
}

export interface GetCountryAndOrganizations_organizations {
  __typename: "OrganizationConnection";
  /**
   * A list of nodes.
   */
  nodes: (GetCountryAndOrganizations_organizations_nodes | null)[] | null;
}

export interface GetCountryAndOrganizations {
  /**
   * Find a country by code
   */
  country: GetCountryAndOrganizations_country;
  /**
   * Find all organizations
   */
  organizations: GetCountryAndOrganizations_organizations;
}

export interface GetCountryAndOrganizationsVariables {
  countryCode: string;
}
