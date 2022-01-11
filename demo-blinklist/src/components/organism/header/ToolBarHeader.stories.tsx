import ToolBarHeader from "./ToolBarHeader";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'organisam/header/ToolBarHeader',
    Component: ToolBarHeader,
}as ComponentMeta<typeof ToolBarHeader>

const Template:ComponentStory<typeof ToolBarHeader> = (args)=><ToolBarHeader  {...args}/>;

export const Primary = Template.bind({});

Primary.args={
    
};