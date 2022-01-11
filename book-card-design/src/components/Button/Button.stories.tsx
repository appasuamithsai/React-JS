import React from 'react';
import Button from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default{
    title:'Button',
    component:Button
}as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button>=()=><Button variant='primary'>Primary</Button>;
export const Secondary=()=><Button variant='secondary'>Secondary</Button>;
export const Sucess=()=><Button variant='sucess'>Sucess</Button>;
export const Danger=()=><Button variant='danger'>Danger</Button>;