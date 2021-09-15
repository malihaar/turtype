import React from 'react';

import Table from '../components/elements/Table';

const content = 'My Table'

export default {
    title: 'Table',
    component: Table,
    argTypes: {
        width: {control: 'range'},
        height: {control: 'range'},
    },
};

const Template = (args) => <Table {...args} />;

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = {
    content,
    width: 66,
    height:16,   
    
}

Medium.args = {
    content,
    width: 77,
    height: 20,
    
};

Large.args = {
    content,
    width: 89,
    height: 28,
    
};
