
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BookDetailsTabs from './BookDetailsTabs';



export default {
  title: 'organisam/bookdetailstabs/BookDetailsTabs',
  component: BookDetailsTabs,

} as ComponentMeta<typeof BookDetailsTabs>;


const Template: ComponentStory<typeof BookDetailsTabs> = () => <BookDetailsTabs />;




export const Primary = Template.bind({});

Primary.args = {
 };
  
