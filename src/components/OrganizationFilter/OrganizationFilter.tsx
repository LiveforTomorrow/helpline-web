import React, { ReactElement, useState, useEffect } from 'react';
import { Box, Container, Typography, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ItemSelect from '../ItemSelect/ItemSelect';

type ContactMethod = {
    name: string;
};

type Category = {
    name: string;
};

type HumanSupportType = {
    name: string;
};

type Topic = {
    name: string;
};

type Sort = {
    name: string;
};

type Changes = {
    contactMethods: ContactMethod[];
    categories: Category[];
    humanSupportTypes: HumanSupportType[];
    topics: Topic[];
    sorts: Sort[];
};

type Props = {
    categories?: Category[];
    humanSupportTypes?: HumanSupportType[];
    topics?: Topic[];
    preselectedTopics?: Topic[];
    onChange: (changes: Changes) => void;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        heading: {
            fontWeight: 'bold',
        },
        title: {
            marginBottom: theme.spacing(1),
        },
        button: {
            borderRadius: '1000px',
        },
    }),
);

const OrganizationFilter = ({
    categories,
    humanSupportTypes,
    topics,
    preselectedTopics,
    onChange,
}: Props): ReactElement => {
    const classes = useStyles();
    const [selectedContactMethods, setSelectedContactMethods] = useState<ContactMethod[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [selectedHumanSupportTypes, setSelectedHumanSupportTypes] = useState<HumanSupportType[]>([]);
    const [selectedTopics, setSelectedTopics] = useState<Topic[]>([]);
    const [selectedSorts, setSelectedSorts] = useState<Sort[]>([{ name: 'A – Z' }]);

    const onClick = (): void => {
        onChange({
            contactMethods: selectedContactMethods,
            categories: selectedCategories,
            humanSupportTypes: selectedHumanSupportTypes,
            topics: selectedTopics,
            sorts: selectedSorts,
        });
    };

    useEffect(() => {
        setSelectedTopics(preselectedTopics);
    }, [preselectedTopics]);

    return (
        <Container className={classes.container}>
            <Typography className={classes.heading} variant="h6">
                Filter &amp; Sort
            </Typography>
            <Box mt={2} mb={3}>
                {topics && topics.length > 0 && preselectedTopics && preselectedTopics.length > 0 && (
                    <Box my={2}>
                        <Typography className={classes.title}>Topics</Typography>
                        <ItemSelect
                            items={topics}
                            preselectedItems={preselectedTopics}
                            onChange={setSelectedTopics}
                            hideUnselected
                        />
                    </Box>
                )}
                <Box my={2}>
                    <Typography className={classes.title}>Contact Method</Typography>
                    <ItemSelect
                        items={[{ name: 'Phone' }, { name: 'Text' }, { name: 'Web Chat' }]}
                        onChange={setSelectedContactMethods}
                    />
                </Box>
                {humanSupportTypes && humanSupportTypes.length > 0 && (
                    <Box my={2}>
                        <Typography className={classes.title}>Human Support Type</Typography>
                        <ItemSelect items={humanSupportTypes} onChange={setSelectedHumanSupportTypes} />
                    </Box>
                )}
                {categories && categories.length > 0 && (
                    <Box my={2}>
                        <Typography className={classes.title}>Categories</Typography>
                        <ItemSelect items={categories} onChange={setSelectedCategories} />
                    </Box>
                )}
                <Box my={2}>
                    <Typography className={classes.title}>Sort by</Typography>
                    <ItemSelect
                        items={[{ name: 'A – Z' }, { name: 'Open now' }]}
                        preselectedItems={selectedSorts}
                        onChange={setSelectedSorts}
                        single
                    />
                </Box>
            </Box>
            <Button className={classes.button} variant="contained" color="primary" onClick={onClick} size="large">
                Apply
            </Button>
        </Container>
    );
};

export default OrganizationFilter;
