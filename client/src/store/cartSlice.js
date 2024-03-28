import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            const indexToRemove = state.items.findIndex(item => item.id === action.payload.id);
            if (indexToRemove !== -1) {
                state.items[indexToRemove].quan+=1;
              
            }
            else{
            
            const newItem = { ...action.payload, quan: 1 };
           

            state.items.push(newItem);
            }
        },
        removeItem:(state,action)=>{
        const indexToRemove = state.items.findIndex(item => item.id === action.payload.id);
        if (indexToRemove !== -1 && state.items[indexToRemove].quan===1) {
            state.items.splice(indexToRemove, 1);
        }
        else if(indexToRemove !== -1 && state.items[indexToRemove].quan>1){
            state.items[indexToRemove].quan-=1;
        }
        },
        clearCart:(state)=>{
            state.items.length=0;
        },
    }, 
});

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;