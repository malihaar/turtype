import React from 'react';

import Turtle from '../components/elements/Turtle';

const content = 'My Turtle'

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
    content,
    width: 6,
    height:8,   
    
}

Medium.args = {
    content,
    width: 8,
    height: 10,
    
};

Large.args = {
    content,
    width: 10,
    height: 13,
    
};
