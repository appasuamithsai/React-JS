import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import book2 from '../../atoms/assets/book2.png';
import MainSearch from './MainSearch';



export default {
  title: 'organisam/main/MainSearch',
  component: MainSearch,

} as ComponentMeta<typeof MainSearch>;


const Template: ComponentStory<typeof MainSearch> = () => <MainSearch />;




export const Primary = Template.bind({});

Primary.args = {

    details: [{image:book2, name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read"}],
  };
  

