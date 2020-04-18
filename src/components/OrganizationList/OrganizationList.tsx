import CloseIcon from '@material-ui/icons/Close';
import React, { ReactElement, Fragment, useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Container, Box, Button, Backdrop } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import OrganizationCard, { Organization } from '../OrganizationCard/OrganizationCard';
import formatArrayIntoSentence from '../../util/formatArrayIntoSentence';
import NavBar from '../NavBar';
import filterAndSortOrganizations from '../../util/filterAndSortOrganizations';
import OrganizationFilter from '../OrganizationFilter';

type Props = {
    country: { name: string };
    subdivision?: { name: string };
    categories: { name: string }[];
    humanSupportTypes: { name: string }[];
    topics: { name: string }[];
    preselectedTopics: { name: string }[];
    organizations: Organization[];
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            display: 'block',
            zIndex: theme.zIndex.drawer + 1,
            top: 64,
            overflow: 'auto',
            [theme.breakpoints.down('xs')]: {
                top: 80,
            },
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
        },
    }),
);

const OrganizationList = ({
    country,
    subdivision,
    categories,
    humanSupportTypes,
    topics,
    preselectedTopics,
    organizations,
}: Props): ReactElement => {
    const classes = useStyles();
    const [showFilters, setShowFilters] = useState(false);
    const [selectedTopics, setSelectedTopics] = useState(preselectedTopics);
    const [filteredOrganizations, setOrganizations] = useState(
        filterAndSortOrganizations(organizations, {
            contactMethods: [],
            categories: [],
            humanSupportTypes: [],
            topics: selectedTopics,
            sorts: [{ name: 'A – Z' }],
        }),
    );

    const onChange = (changes): void => {
        setSelectedTopics(changes.topics);
        setOrganizations(filterAndSortOrganizations(organizations, changes));
        setShowFilters(false);
    };

    useEffect(() => setSelectedTopics(preselectedTopics), [preselectedTopics]);

    return (
        <Fragment>
            <NavBar>
                <Button
                    className={classes.filterButton}
                    onClick={(): void => setShowFilters(true)}
                    endIcon={<FilterListIcon />}
                >
                    Filter &amp; Sort
                </Button>
            </NavBar>
            <Backdrop className={classes.backdrop} open={showFilters} onClick={(): void => setShowFilters(false)}>
                <NavBar>
                    <Button
                        className={classes.filterButton}
                        onClick={(): void => setShowFilters(false)}
                        endIcon={<CloseIcon />}
                    >
                        Close
                    </Button>
                </NavBar>
                <Box className={classes.filters} onClick={(e): void => e.stopPropagation()}>
                    <OrganizationFilter
                        categories={categories}
                        humanSupportTypes={humanSupportTypes}
                        topics={topics}
                        preselectedTopics={preselectedTopics}
                        onChange={onChange}
                    />
                </Box>
            </Backdrop>
            <Container maxWidth="xs">
                <Box my={2}>
                    <Typography variant="h6">
                        {`Best helplines in ${subdivision ? `${subdivision.name}, ` : ''}${country.name}${
                            selectedTopics.length > 0
                                ? ` for ${formatArrayIntoSentence(selectedTopics.map((t) => t.name)).toLowerCase()}`
                                : ''
                        }.`}
                    </Typography>
                </Box>
                {filteredOrganizations.map((organization) => (
                    <Box key={organization.slug} my={2}>
                        <OrganizationCard organization={organization} />
                    </Box>
                ))}
            </Container>
        </Fragment>
    );
};

export default OrganizationList;
