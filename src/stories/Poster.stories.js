import React from 'react';

import Poster from '../components/elements/Poster';

const content = 'My Poster'

export default {
    title: 'Poster',
    component: Poster,
    argTypes: {
        width: {control: 'range'},
        height: {control: 'range'},
    },
};

const Template = (args) => <Poster {...args} />;

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = {
    content,
    width: 18,
    height:28,
}

Medium.args = {
    content,
    width: 25,
    height: 35,
};

Large.args = {
    content,
    width: 32,
    height: 42,
};
