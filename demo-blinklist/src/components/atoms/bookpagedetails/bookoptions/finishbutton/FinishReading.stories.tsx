import FinishReading from "./FinishReading";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/bookpagedetails/bookoptions/finishreading/FinishReading',
    Component: FinishReading,
}as ComponentMeta<typeof FinishReading>

const Template:ComponentStory<typeof FinishReading> = (args)=><FinishReading {...args} />;

export const Primary = Template.bind({});

