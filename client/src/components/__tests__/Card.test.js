import { render,screen } from "@testing-library/react"
import Card from "../Card"
import { Promotedcard } from "../Card"
import MOCK_DATA from './mocks/cardmock.json'
import "@testing-library/jest-dom"

test("card component is rendering",()=>{
    render(<Card resdata={MOCK_DATA} />)

    const title=screen.getByText("Andhra,Biryani,South Indian");
    expect(title).toBeInTheDocument();
})

test("card component with promoted r",()=>{

    const Procard=Promotedcard(Card);
    render(<Procard resdata={MOCK_DATA}/>)

    const title=screen.getByText("Promoted");
    expect(title).toBeInTheDocument();
})