import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import book2 from '../../atoms/assets/book2.png';
import CardAdd from './CardAdd';



export default {
  title: 'organisam/cards/CardAdd',
  component: CardAdd,

} as ComponentMeta<typeof CardAdd>;


const Template: ComponentStory<typeof CardAdd> = (args) => <CardAdd {...args} />;




export const Primary = Template.bind({});

Primary.args = {

    details: [{image:book2, name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read"}],
  };
  

