import React from 'react';

import Button from '../components/elements/Button';

const content = 'My button'
const color = '#7AB54B'

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        width: {control: 'range'},
        height: {control: 'range'},
        color: {control: 'color'}
    },
};

const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = {
    content,
    width: 5,
    height:3,   
    color
}

Medium.args = {
    content,
    width: 9,
    height: 3,
    color
};

Large.args = {
    content,
    width: 15,
    height: 8,
    color
};
