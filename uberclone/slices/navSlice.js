import {createSlice} from  '@reduxjs/toolkit';


const initialState ={
origin:null,
dest:null,
time:null,


};

export const navSlice = createSlice({
    name:"nav",
    initialState,
    reducer:{
        setOrigin:(state,action)=>{
            state.origin= action.payload
        },
        setDest:(state,action)=>{
            state.dest= action.payload
        },
        setTime:(state,action)=>{
            state.time= action.payload
        },
    },

});
export const {setOrigin,setDest,setTime} = navSlice.actions;

//Selectors
export const selectOrigin=(state) => state.nav.origin;
export const selectDest=(state) => state.nav.dest;
export const selectTime=(state) => state.nav.time;

//export 
export default navSlice.reducer;

