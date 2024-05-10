import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Iproduct{
    id:any;
    title :any;
    img:any;
    price:any;
    quantity:any;
}

const initialState : Array<Iproduct> =[]

export const  cartSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addToCart : (state, action: PayloadAction<Iproduct>) => {

            if(state.findIndex((pro) => pro.id === action.payload.id) === -1){
                state.push(action.payload)
            }else{
                return state.map((item)=>{
                    return item.id === action.payload.id ? {...item, quantity:item.quantity+1}
                    :item;
                })
            }

            
        },
        removeFromCart : (state, action:PayloadAction<number>) =>{
              const id = action.payload
              return state.filter((item)=> item.id !== id)
        },

        removeQuantity : (state, action:PayloadAction<number>)=>{

            const id = action.payload
            
            return state.map((item)=> item.id === id && item.quantity>=2 ? {...item,quantity: item.quantity-1}:item)

        },
        addQuantity : (state, action:PayloadAction<number>)=>{

            const id = action.payload
            return state.map((item)=> item.id === id ? {...item,quantity: item.quantity+1}:item)

        },

    },
   
});

export const {addToCart,removeFromCart,removeQuantity,addQuantity} = cartSlice.actions
export default cartSlice.reducer