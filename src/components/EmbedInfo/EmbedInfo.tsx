import React, { ReactElement, useState, ChangeEvent } from 'react';
import { Container, Box, Typography, TextField, FormControl, MenuItem, InputLabel, Select } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Country = {
    code: string;
    name: string;
};

type Props = {
    countries?: Country[];
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        logo: {
            '& img': {
                maxWidth: '250px',
            },
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: theme.spacing(5),
            paddingBottom: theme.spacing(5),
            marginTop: theme.spacing(5),
            marginBottom: theme.spacing(5),
            height: '100%',
        },
        box: {
            display: 'grid',
            gridGap: theme.spacing(2),
        },
        codeSnippet: {
            backgroundColor: '#F0F1F5',
        },
        code: {
            padding: theme.spacing(2),
            width: '100%',
            fontFamily: 'Courier',
        },
        copy: {
            color: '#07838E',
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(1),
            float: 'right',
        },
        buttonRoot: {
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
        formControl: {
            marginBottom: theme.spacing(1),
            minWidth: 120,
            alignSelf: 'center',
        },
        steps: {
            fontWeight: 'bold',
        },
    }),
);

const Embed = ({ countries }: Props): ReactElement => {
    const [selectedCountryCode, setSelectedCountryCode] = useState<string>('US');
    const classes = useStyles();

    const domainUrl = process.env.NOW_URL ? JSON.stringify(`https://${process.env.NOW_URL}`) : 'http://localhost:3000';

    const snippet = `<div id="widget"></div>
    <script src="${domainUrl}/widget.min.js"></script>
    <script>
      Widget.default.render(
        {
          countryCode: '${selectedCountryCode}',
        },
        "#widget"
      );
    </script>`;

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSelectedCountryCode(event.target.value);
    };

    return (
        <Container maxWidth="sm" className={classes.container} data-testid="embedContainer">
            <Box className={classes.box}>
                <Box className={classes.logo}>
                    <img src="/logo.svg" alt="find a helpline" />
                </Box>
                <Typography component="div">
                    <p>We’re putting every free mental health helpline in the world at your fingertips.</p>
                    <p>Quick. Easy. Reliable.</p>
                    <h3>Embed the Find A Helpline widget</h3>
                    <p>
                        <span className={classes.steps}>Step 1:</span> Choose the default country for the widget.
                    </p>
                </Typography>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedCountryCode}
                        onChange={handleChange}
                    >
                        {countries ? (
                            countries.map(
                                (country): ReactElement => {
                                    return (
                                        <MenuItem key={country.code} value={country.code}>
                                            {country.name}
                                        </MenuItem>
                                    );
                                },
                            )
                        ) : (
                            <MenuItem value="US" data-testid="defaultMenuItem">
                                United States of America
                            </MenuItem>
                        )}
                        ;
                    </Select>
                </FormControl>
                <Typography component="div">
                    <p>
                        <span className={classes.steps}>Step 2:</span> Simply copy the code snippet and paste it in your
                        page’s HTML where you want the widget to appear.
                    </p>
                </Typography>
                <Box className={classes.codeSnippet}>
                    <TextField className={classes.code} multiline value={snippet} />
                </Box>
            </Box>
        </Container>
    );
};

export default Embed;
