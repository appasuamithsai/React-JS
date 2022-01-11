import BannerImage from "./BannerImage";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/banner/BannerImage',
    Component: BannerImage,
}as ComponentMeta<typeof BannerImage>

const Template:ComponentStory<typeof BannerImage> = ()=><BannerImage />;

export const Primary = Template.bind({});