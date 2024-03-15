import {render,screen} from '@testing-library/react';
import Contact from '../contact';
import "@testing-library/jest-dom"

describe("contact is page tests",()=>{
test("should load contact on screen ",()=>{
    render(<Contact/>);

    const heading=screen.getByText("Contact Us");
    expect(heading).toBeInTheDocument();
})

test("should load button on screen ",()=>{
    render(<Contact/>);

    const button=screen.getByRole("button");
    expect(button).toBeInTheDocument();
})


// test("should load email input on screen ",()=>{
//     render(<Contact/>);

//     const box=screen.getAllByRole("textbox")
//     expect(box).toEqual(2);
// });
});