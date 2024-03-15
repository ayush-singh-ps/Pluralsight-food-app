import { fireEvent,render,screen } from "@testing-library/react";
import Header from "../Header";
import store from "../../store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

test("load header component with the list",()=>{
    render(
        <BrowserRouter>
        <Provider store={store}>
        <Header/>
        </Provider>
        </BrowserRouter>
        )

    const btn=screen.getByRole('list');
    expect(btn).toBeInTheDocument();
});

test("load header component with the empty cart",()=>{
    render(
        <BrowserRouter>
        <Provider store={store}>
        <Header/>
        </Provider>
        </BrowserRouter>
        )

    const btn=screen.getByText('CART 🛒 - (0 item)');
    expect(btn).toBeInTheDocument();
})

