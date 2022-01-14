import React  from "react";
import {render,screen} from '@testing-library/react';
import AuthorName from "./AuthorName";

test("Testing AuthorName",()=>{
    render(<AuthorName authName="Amith"/>);
    const author=screen.getByText("Amith");
    expect(author).toBeInTheDocument();
});