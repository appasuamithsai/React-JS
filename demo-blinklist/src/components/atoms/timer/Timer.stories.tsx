import Timer from "./Timer";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/timer/Timer',
    Component: Timer,
}as ComponentMeta<typeof Timer>

const Template:ComponentStory<typeof Timer> = ()=><Timer  />;

export const Primary = Template.bind({});

Primary.args={
    
};