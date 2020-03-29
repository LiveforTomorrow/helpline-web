import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import TopBar from './index';
import { Container, Typography } from '@material-ui/core';
import * as Faker from 'faker';

storiesOf('TopBar', module)
    .add('default', () => {
        return (
            <Fragment>
                <TopBar />
                <Container>
                    {[1, 2, 3, 4, 5].map((v) => (
                        <Typography key={v}>{Faker.lorem.paragraph(50)}</Typography>
                    ))}
                </Container>
            </Fragment>
        );
    })
    .add('with country', () => {
        return (
            <Fragment>
                <TopBar country={{ emergencyNumber: '111' }} />
                <Container>
                    {[1, 2, 3, 4, 5].map((v) => (
                        <Typography key={v}>{Faker.lorem.paragraph(50)}</Typography>
                    ))}
                </Container>
            </Fragment>
        );
    });
