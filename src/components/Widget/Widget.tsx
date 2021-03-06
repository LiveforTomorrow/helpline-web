import CloseIcon from '@material-ui/icons/Close';
import React, { ReactElement, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Button, Backdrop, NoSsr } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import CodeIcon from '@material-ui/icons/Code';
import { OutboundLink } from 'react-ga';
import NavBar from '../NavBar';
import filterAndSortOrganizations from '../../util/filterAndSortOrganizations';
import OrganizationFilter from '../OrganizationFilter';
import WidgetOrganizationList from '../WidgetOrganizationList';
import TopBar from '../TopBar';
import WidgetSearch from '../WidgetSearch';
import { Organization } from '../OrganizationCard/OrganizationCard';
import { LocalityEnum } from '../../../types/globalTypes';

type Subdivision = {
    name: string;
    code: string;
};

type Country = {
    name: string;
    code: string;
    emergencyNumber: string;
    subdivisions: Subdivision[];
    locality: LocalityEnum;
};

export type WidgetProps = {
    preselectedCountry: Country;
    preselectedSubdivision?: Subdivision;
    preselectedTopics: { name: string }[];
    countries: Country[];
    categories: { name: string }[];
    humanSupportTypes: { name: string }[];
    topics: { name: string }[];
    organizations: Organization[];
    organizationsWhenEmpty: Organization[];
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            border: '1px solid #181719',
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
        },
        backdrop: {
            display: 'block',
            zIndex: theme.zIndex.drawer + 1,
            top: 0,
            overflow: 'auto',
        },
        filters: {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2),
            background: '#FFFFFF',
        },
        filterButton: {
            background: '#FFFFFF',
            borderRadius: '1000px',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            '&:hover': {
                backgroundColor: '#CCCCCC',
            },
        },
        sortText: {
            [theme.breakpoints.down('xs')]: {
                display: 'none',
            },
        },
        embed: {
            textAlign: 'center',
            padding: theme.spacing(1),
        },
        embedButton: {
            color: '#000',
            textDecoration: 'underline',
            textTransform: 'none',
            textAlign: 'left',
            '&:hover': {
                textDecoration: 'underline',
                color: theme.palette.primary.main,
            },
        },
        link: {
            color: '#000',
        },
    }),
);

const Widget = ({
    preselectedCountry,
    preselectedSubdivision,
    preselectedTopics,
    countries,
    categories,
    humanSupportTypes,
    topics,
    organizations,
    organizationsWhenEmpty,
}: WidgetProps): ReactElement => {
    const classes = useStyles();
    const [showFilters, setShowFilters] = useState(false);
    const filterByPreselectedTopics = (): Organization[] => {
        return filterAndSortOrganizations(organizations, {
            contactMethods: [],
            categories: [],
            humanSupportTypes: [],
            topics: preselectedTopics,
            sorts: [{ name: preselectedTopics.length > 0 ? 'Relevance' : 'Featured' }],
        });
    };
    const [filteredOrganizations, setOrganizations] = useState(filterByPreselectedTopics());

    const onChange = (changes): void => {
        setOrganizations(filterAndSortOrganizations(organizations, changes));
        setShowFilters(false);
    };

    useEffect(() => {
        setOrganizations(filterByPreselectedTopics());
    }, [preselectedTopics]);

    return (
        <>
            <NavBar variant="widget">
                <Button
                    className={classes.filterButton}
                    onClick={(): void => setShowFilters(true)}
                    endIcon={<FilterListIcon />}
                    data-testid="filter"
                >
                    Filter<span className={classes.sortText}>&nbsp;&amp; Sort</span>
                </Button>
            </NavBar>
            <WidgetSearch
                preselectedCountry={preselectedCountry}
                countries={countries}
                preselectedSubdivision={preselectedSubdivision}
            />
            <Box className={classes.box}>
                <TopBar variant="widget" country={preselectedCountry} />
                <NoSsr>
                    <WidgetOrganizationList
                        organizations={filteredOrganizations}
                        organizationsWhenEmpty={organizationsWhenEmpty}
                    />
                </NoSsr>
            </Box>
            <Box className={classes.embed}>
                <OutboundLink
                    eventLabel="https://livefortomorrow.typeform.com/to/TT2N2v3r"
                    to="https://livefortomorrow.typeform.com/to/TT2N2v3r"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button
                        startIcon={<CodeIcon />}
                        color="primary"
                        size="small"
                        classes={{ root: classes.embedButton, label: classes.link }}
                    >
                        Embed Find A Helpline on your website
                    </Button>
                </OutboundLink>
            </Box>
            <Backdrop
                className={classes.backdrop}
                open={showFilters}
                onClick={(): void => setShowFilters(false)}
                data-testid="backdrop"
            >
                <Box onClick={(e): void => e.stopPropagation()}>
                    <NavBar variant="widget">
                        <Button
                            className={classes.filterButton}
                            onClick={(): void => setShowFilters(false)}
                            endIcon={<CloseIcon />}
                        >
                            Close
                        </Button>
                    </NavBar>
                    <Box className={classes.filters}>
                        <OrganizationFilter
                            categories={categories}
                            humanSupportTypes={humanSupportTypes}
                            preselectedTopics={preselectedTopics}
                            topics={topics}
                            onChange={onChange}
                        />
                    </Box>
                </Box>
            </Backdrop>
        </>
    );
};

export default Widget;
