import { Provider } from "react-redux"
import Item from "../items"
import data from "./mocks/cartmock.json"
import { fireEvent, render,screen } from "@testing-library/react"
import store from '../../store/store'
import Header from "../Header"
import '@testing-library/jest-dom'
import { BrowserRouter } from "react-router-dom"
import Cart from "../cart"
import { clearCart } from "../../store/cartSlice"


beforeEach(() => {
    // Code to run before each test case
    store.dispatch(clearCart());
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Item data={data} />
          <Cart/>
        </Provider>
      </BrowserRouter>
    );
  });

  afterEach(() => {

    jest.clearAllMocks(); // Clear all mock function calls
  });


test("check the cart functionality",()=>{
    
    const items=screen.getAllByText('Add+');
    fireEvent.click(items[0]);

   const cart= screen.getByText('CART 🛒 - (1 item)')
   expect(cart).toBeInTheDocument();


})

test("checking clear cart button",()=>{
 

    const items=screen.getAllByText('Add+');
    fireEvent.click(items[0]);

    const cart= screen.getByText('CART 🛒 - (1 item)')
    // expect(cart).toBeInTheDocument();

    const clrbtn=screen.getByRole('button',{name:"Clear Cart"})
    fireEvent.click(clrbtn);

    const it=screen.getAllByTestId('items');
    expect(it.length).toBe(2);
    // expect(cart).toBeInTheDocument();


})
test("checking add button",()=>{
 

  const items=screen.getAllByText('Add+');
 
  fireEvent.click(items[0]);

  const cart= screen.getByText('CART 🛒 - (1 item)')
  expect(cart).toBeInTheDocument();

  const clrbtn=screen.getAllByRole('button',{name:"+"})

  fireEvent.click(clrbtn[1]);


  const it=screen.getAllByText('2');
  expect(it[0]).toBeInTheDocument();
  expect(it[1]).toBeInTheDocument();


})

test("checking remove button",()=>{
 
  
  const items=screen.getAllByText('Add+');
 
  fireEvent.click(items[0]);


  const cart= screen.getByText('CART 🛒 - (1 item)')
  console.log(cart)
  expect(cart).toBeInTheDocument();

  const clrbtn=screen.getAllByRole('button',{name:"-"})
  const its=screen.getAllByTestId('items');
  expect(its.length).toBe(3);

  fireEvent.click(clrbtn[1]);

  const car= screen.getByText('CART 🛒 - (0 item)')
  expect(car).toBeInTheDocument();
  

  const it=screen.getAllByTestId('items');
  expect(it.length).toBe(2);


})
