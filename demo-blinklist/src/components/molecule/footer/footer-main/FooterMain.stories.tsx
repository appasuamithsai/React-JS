import FooterMain from "./FooterMain";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'molecule/footer/FooterMain',
    Component: FooterMain,
}as ComponentMeta<typeof FooterMain>

const Template:ComponentStory<typeof FooterMain> = ()=><FooterMain  />;

export const Primary = Template.bind({});

Primary.args={
    
};