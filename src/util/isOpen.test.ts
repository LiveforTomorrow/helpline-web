import isOpen from './isOpen';

describe('isOpen', () => {
    let organization;

    beforeEach(() => {
        organization = { alwaysOpen: false, openingHours: [], timezone: 'Pacific/Auckland' };
    });

    it('should return closed by default', () => {
        expect(isOpen(organization)).toEqual({ open: false });
    });

    describe('alwaysOpen set', () => {
        beforeEach(() => {
            organization.alwaysOpen = true;
        });

        it('should return open', () => {
            expect(isOpen(organization)).toEqual({ open: true });
        });
    });

    describe('openingHours set', () => {
        const RealDate = Date.now;

        beforeEach(() => {
            organization.openingHours = [{ open: '00:00', close: '23:59', day: 'wednesday' }];
        });

        describe('current time is outside opening hours', () => {
            beforeAll(() => {
                global.Date.now = jest.fn(() => new Date('2020-04-09T10:20:30Z').getTime());
            });

            afterAll(() => {
                global.Date.now = RealDate;
            });

            it('should return closed', () => {
                expect(isOpen(organization)).toEqual({ open: false });
            });
        });

        describe('current time is inside opening hours', () => {
            beforeAll(() => {
                global.Date.now = jest.fn(() => new Date('2020-04-08T10:20:30Z').getTime());
            });

            afterAll(() => {
                global.Date.now = RealDate;
            });

            it('should return open', () => {
                const { open, openTime, closeTime } = isOpen(organization);
                expect(open).toEqual(true);
                expect(openTime.toISOString()).toEqual('2020-04-07T12:00:00.000Z');
                expect(closeTime.toISOString()).toEqual('2020-04-08T11:59:00.000Z');
            });
        });
    });
});
