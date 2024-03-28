import Body from "../Body";
import { fireEvent, render,screen } from "@testing-library/react";
import data from './mocks/bodymock.json'
import {act} from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(data)
        }
    })
});

test("all cards getting rendered",async()=>{
    await act(async()=>
   
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>)
    );
    const card=screen.getAllByTestId('cards')
   expect(card.length).toBe(20); 
})

test("the search functionality",async()=>{
    await act(async()=>
   
    render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>)
    );

    const srcbtn=screen.getByRole('button',{name:"Search"})

    const inp=screen.getByRole("textbox")
   

    fireEvent.change(inp,{target:{value:'Burger'}})
    fireEvent.click(srcbtn)
    const card=screen.getAllByTestId('cards')

    

    expect(card.length).toBe(2);

   
})

test("checking filter button functionality",async()=>{

    await act(async()=>{
    render(
        <BrowserRouter>
    <Body/>
    </BrowserRouter>)
    })

    const filbtn=screen.getByText('Filter top Restaurant')

    fireEvent.click(filbtn)

    const cards=screen.getAllByTestId('cards')

    expect(cards.length).toBe(16);


})