import React from 'react';

import Table from '../components/elements/Table';

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
    width: 66,
    height:16,
}

Medium.args = {
    width: 77,
    height: 20,
};

Large.args = {
    width: 89,
    height: 28,
};
