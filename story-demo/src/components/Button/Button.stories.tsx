import  ButtonMui from './Button';

import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    component: ButtonMui,
    title: 'Atoms/Button',
}as ComponentMeta<typeof ButtonMui>;

const Template: ComponentStory<typeof ButtonMui> = (args) => <ButtonMui {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    variant:'outlined',
    placeholder:"lol"
};
export const Secondary = Template.bind({});

Secondary.args = {
    variant:'outlined',
    placeholder:"Cool"
};