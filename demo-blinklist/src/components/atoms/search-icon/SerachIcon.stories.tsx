import SerachIcon from "./SearchIcon";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/serach-icon/SerachIcon',
    Component: SerachIcon,
}as ComponentMeta<typeof SerachIcon>

const Template:ComponentStory<typeof SerachIcon> = ()=><SerachIcon  />;

export const Primary = Template.bind({});

Primary.args={
    
};