import HeaderLeft from "./HeaderLeft";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'organisam/header/HeaderLeft',
    Component: HeaderLeft,
}as ComponentMeta<typeof HeaderLeft>

const Template:ComponentStory<typeof HeaderLeft> = (args)=><HeaderLeft  {...args}/>;

export const Primary = Template.bind({});

Primary.args={
    
};