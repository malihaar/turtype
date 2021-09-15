import React from 'react';

import Bowl from '../components/elements/Bowl';

const wpm = 100;

export default {
    title: 'Bowl',
    component: Bowl,
    argTypes: {
        width: {control: 'range'},
        height: {control: 'range'},
    },
};

const Template = (args) => <Bowl {...args}/>;

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = {
    width: 7,
    height:7, 
    wpm  
}

Medium.args = {
    width: 8,
    height: 8,
    wpm 
};

Large.args = {
    width: 15,
    height: 15,
    wpm 
};
