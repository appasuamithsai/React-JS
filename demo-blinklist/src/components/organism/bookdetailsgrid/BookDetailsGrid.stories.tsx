import BookDetailsGrid from "./BookDetailsGrid";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/bookpagedetails/bookoptions/bookdetailsgrid/BookDetailsGrid',
    Component: BookDetailsGrid,
}as ComponentMeta<typeof BookDetailsGrid>

const Template:ComponentStory<typeof BookDetailsGrid> = (args)=><BookDetailsGrid {...args} />;

export const Primary = Template.bind({});

