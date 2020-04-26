import filterAndSortOrganizations from './filterAndSortOrganizations';

describe('filterAndSortOrganizations', () => {
    const organization = {
        slug: 'bbb',
        name: 'Beta',
        alwaysOpen: false,
        openingHours: [],
        humanSupportTypes: [{ name: 'Volunteers' }, { name: 'Staff' }],
        categories: [{ name: 'For youth' }, { name: 'All issues' }],
        topics: [{ name: 'Depression' }, { name: 'School' }, { name: 'Pride' }],
        smsNumber: '234',
        phoneNumber: '0800 376 633',
        url: 'https://youthline.co.nz/website',
        chatUrl: 'https://youthline.co.nz/chat',
        timezone: 'Pacific/Auckland',
    };
    const filteredOrganization = {
        slug: 'aaa',
        name: 'Alpha',
        alwaysOpen: true,
        openingHours: [],
        humanSupportTypes: [{ name: 'Migrants' }, { name: 'AI' }],
        categories: [{ name: 'For men' }, { name: 'All issues' }],
        topics: [{ name: 'Anxiety' }, { name: 'Bullying' }],
        smsNumber: '',
        phoneNumber: null,
        url: 'https://test.co.nz/website',
        chatUrl: undefined,
        timezone: 'Pacific/Auckland',
    };
    const organizations = [organization, filteredOrganization];
    let changes;

    beforeEach(() => {
        changes = {
            contactMethods: [],
            categories: [],
            humanSupportTypes: [],
            topics: [],
            sorts: [],
        };
    });

    it('peforms no filtering', () => {
        expect(filterAndSortOrganizations(organizations, changes)).toEqual(organizations);
    });

    describe('when categories provided', () => {
        it('filters by single category', () => {
            changes.categories = [{ name: 'For youth' }];
            expect(filterAndSortOrganizations(organizations, changes)).toEqual([organization]);
        });

        it('filters by multiple categories', () => {
            changes.categories = [{ name: 'For youth' }, { name: 'For adults' }];
            expect(filterAndSortOrganizations(organizations, changes)).toEqual([organization]);
        });
    });

    describe('when contactMethods provided', () => {
        it('filters by Text', () => {
            changes.contactMethods = [{ name: 'Text' }];
            expect(filterAndSortOrganizations(organizations, changes)).toEqual([organization]);
        });

        it('filters by Phone', () => {
            changes.contactMethods = [{ name: 'Phone' }];
            expect(filterAndSortOrganizations(organizations, changes)).toEqual([organization]);
        });

        it('filters by Web Chat', () => {
            changes.contactMethods = [{ name: 'Web Chat' }];
            expect(filterAndSortOrganizations(organizations, changes)).toEqual([organization]);
        });
    });

    describe('when humanSupportTypes provided', () => {
        it('filters by single humanSupportType', () => {
            changes.humanSupportTypes = [{ name: 'Volunteers' }];
            expect(filterAndSortOrganizations(organizations, changes)).toEqual([organization]);
        });

        it('filters by multiple humanSupportTypes', () => {
            changes.humanSupportTypes = [{ name: 'Volunteers' }, { name: 'Employees' }];
            expect(filterAndSortOrganizations(organizations, changes)).toEqual([organization]);
        });
    });

    describe('when topics provided', () => {
        it('filters by single topic', () => {
            changes.topics = [{ name: 'Depression' }];
            expect(filterAndSortOrganizations(organizations, changes)).toEqual([organization]);
        });

        it('filters by multiple topics', () => {
            changes.topics = [{ name: 'Depression' }, { name: 'Food' }];
            expect(filterAndSortOrganizations(organizations, changes)).toEqual([organization]);
        });
    });

    describe('when sort provided', () => {
        const alwaysOpenLastOrganization = {
            slug: 'ooo',
            name: 'Omega',
            alwaysOpen: true,
            openingHours: [],
            humanSupportTypes: [{ name: 'Migrants' }, { name: 'AI' }],
            categories: [{ name: 'For men' }, { name: 'All issues' }],
            topics: [{ name: 'Anxiety' }, { name: 'Bullying' }],
            smsNumber: '',
            phoneNumber: null,
            url: 'https://test.co.nz/website',
            chatUrl: undefined,
            timezone: 'Pacific/Auckland',
        };

        const closedLastOrganization = {
            slug: 'ooo',
            name: 'Omega',
            alwaysOpen: false,
            openingHours: [],
            humanSupportTypes: [{ name: 'Migrants' }, { name: 'AI' }],
            categories: [{ name: 'For men' }, { name: 'All issues' }],
            topics: [{ name: 'Anxiety' }, { name: 'Bullying' }],
            smsNumber: '',
            phoneNumber: null,
            url: 'https://test.co.nz/website',
            chatUrl: undefined,
            timezone: 'Pacific/Auckland',
        };

        it('sorts by A – Z', () => {
            changes.sorts = [{ name: 'A – Z' }];
            expect(filterAndSortOrganizations(organizations, changes)).toEqual([filteredOrganization, organization]);
        });

        it('sorts by open now', () => {
            changes.sorts = [{ name: 'Open now' }];
            expect(
                filterAndSortOrganizations(
                    [alwaysOpenLastOrganization, closedLastOrganization, organization, filteredOrganization],
                    changes,
                ),
            ).toEqual([filteredOrganization, alwaysOpenLastOrganization, organization, closedLastOrganization]);
        });
    });
});
