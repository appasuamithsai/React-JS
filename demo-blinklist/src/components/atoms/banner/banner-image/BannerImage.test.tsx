/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {render} from '@testing-library/react';
import BannerImage from './BannerImage';

test("Checking Banner Image",()=>{
    const {getByTestId}=render(<BannerImage />);
    const image=getByTestId("BannerImage");
    expect(image).toBeInTheDocument();
});
