import {createSlice} from '@reduxjs/toolkit'


 export const sidebarSlice = createSlice({
    name:'sidebar' ,
    initialState:{
        show:true
    },
    reducers:{
        showSidebar : state =>{
            state.show = !state.show
        }
    }
})

export const {showSidebar} = sidebarSlice.actions


export default sidebarSlice.reducer

