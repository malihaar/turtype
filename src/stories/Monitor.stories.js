import React from 'react';

import Monitor from '../components/elements/Monitor';

const content = 'My Monitor'

export default {
    title: 'Monitor',
    component: Monitor,
    argTypes: {
        width: {control: 'range'},
        height: {control: 'range'},
    },
};

const Template = (args) => <Monitor {...args} />;

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = {
    content,
    width: 25,
    height:30,   
    
}

Medium.args = {
    content,
    width: 30,
    height: 37,
    
};

Large.args = {
    content,
    width: 45,
    height: 55,
    
};
