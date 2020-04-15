import { find } from 'lodash/fp';
import moment from 'moment-timezone';

type OpeningHour = {
    day: string;
    open: string;
    close: string;
};

type Organization = {
    openingHours: OpeningHour[];
    timezone: string;
};

const isOpen = ({ openingHours, timezone }: Organization): IsOpenStatus => {
    const now = moment.tz(timezone);
    const date = now.format('YYYY-MM-DD');
    const openingHour = find({ day: now.format('dddd').toLowerCase() }, openingHours);

    if (openingHour === undefined) {
        return { open: false };
    }

    const openTime = moment.tz(`${date} ${openingHour.open}`, 'YYYY-MM-DD HH:mm', timezone);
    const closeTime = moment.tz(`${date} ${openingHour.close}`, 'YYYY-MM-DD HH:mm', timezone);
    const open = now.isBetween(openTime, closeTime, null, '[)');
    return { open, openTime, closeTime };
};

export type IsOpenStatus = {
    open: boolean;
    openTime?: moment.Moment;
    closeTime?: moment.Moment;
};

export default isOpen;
