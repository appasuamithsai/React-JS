import NavDown from './NavDown';
import {ComponentMeta , ComponentStory} from  '@storybook/react';

export default {
    title:'atoms/nav/NavDown',
    Component:NavDown,
} as ComponentMeta<typeof NavDown>;

const Template:ComponentStory<typeof NavDown> = ()=><NavDown />;

export const Primary = Template.bind({});
