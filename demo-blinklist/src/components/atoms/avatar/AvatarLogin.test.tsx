import React from "react";
import {render,screen} from "@testing-library/react";
import AvatarLogin from "./AvatarLogin";

test("Checking the Avatar",()=>{
    const {getByText} =render(<AvatarLogin name="F" />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const name=getByText("F");
    expect(name).toBeInTheDocument();
});