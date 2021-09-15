import React from 'react';

import Turtle from '../components/elements/Turtle';

export default {
    title: 'Turtle',
    component: Turtle,
    argTypes: {
        width: {control: 'range'},
        height: {control: 'range'},
    },
};

const Template = (args) => <Turtle {...args} />;

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = {
    width: 6,
    height:8,
}

Medium.args = {
    width: 8,
    height: 10,
};

Large.args = {
    width: 10,
    height: 13,
};
