import React from 'react';

import Clock from '../components/elements/Clock';

const time = "Start";

export default {
    title: 'Clock',
    component: Clock,
    argTypes: {
        width: {control: 'range'},
        height: {control: 'range'},
    },
};

const Template = (args) => <Clock {...args}/>;

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = {
    width: 6,
    height:6, 
    time  
}

Medium.args = {
    width: 12,
    height: 12,
    time 
};

Large.args = {
    width: 16,
    height: 16,
    time 
};
