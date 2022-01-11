import BlinkImage from "./BlinkImage";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/blinkimage/BlinkImage',
    Component: BlinkImage,
}as ComponentMeta<typeof BlinkImage>

const Template:ComponentStory<typeof BlinkImage> = ()=><BlinkImage />;

export const Primary = Template.bind({});