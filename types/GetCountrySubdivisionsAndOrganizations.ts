/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCountrySubdivisionsAndOrganizations
// ====================================================

export interface GetCountrySubdivisionsAndOrganizations_country_subdivisions {
  __typename: "Subdivision";
  code: string;
  name: string;
}

export interface GetCountrySubdivisionsAndOrganizations_country {
  __typename: "Country";
  code: string;
  name: string;
  emergencyNumber: string | null;
  subdivisions: GetCountrySubdivisionsAndOrganizations_country_subdivisions[];
}

export interface GetCountrySubdivisionsAndOrganizations_organizations_nodes_humanSupportTypes {
  __typename: "Tag";
  name: string;
}

export interface GetCountrySubdivisionsAndOrganizations_organizations_nodes_categories {
  __typename: "Tag";
  name: string;
}

export interface GetCountrySubdivisionsAndOrganizations_organizations_nodes_topics {
  __typename: "Tag";
  name: string;
}

export interface GetCountrySubdivisionsAndOrganizations_organizations_nodes_openingHours {
  __typename: "OpeningHour";
  day: string;
  open: any;
  close: any;
}

export interface GetCountrySubdivisionsAndOrganizations_organizations_nodes {
  __typename: "Organization";
  slug: string;
  name: string;
  alwaysOpen: boolean;
  smsNumber: string | null;
  phoneNumber: string | null;
  url: string | null;
  chatUrl: string | null;
  timezone: string;
  humanSupportTypes: GetCountrySubdivisionsAndOrganizations_organizations_nodes_humanSupportTypes[];
  categories: GetCountrySubdivisionsAndOrganizations_organizations_nodes_categories[];
  topics: GetCountrySubdivisionsAndOrganizations_organizations_nodes_topics[];
  openingHours: GetCountrySubdivisionsAndOrganizations_organizations_nodes_openingHours[];
}

export interface GetCountrySubdivisionsAndOrganizations_organizations {
  __typename: "OrganizationConnection";
  /**
   * A list of nodes.
   */
  nodes: (GetCountrySubdivisionsAndOrganizations_organizations_nodes | null)[] | null;
}

export interface GetCountrySubdivisionsAndOrganizations {
  /**
   * Find a country by code
   */
  country: GetCountrySubdivisionsAndOrganizations_country;
  /**
   * Find all organizations
   */
  organizations: GetCountrySubdivisionsAndOrganizations_organizations;
}

export interface GetCountrySubdivisionsAndOrganizationsVariables {
  countryCode: string;
  subdivisionCode: string;
}
