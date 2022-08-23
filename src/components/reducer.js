import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { BusinessData, HealthData, NationData, SportsData, TrendingData, WorldData } from '../Data'


// export const getPosts = createAsyncThunk( 'articles/getItems', async ()=>{
//     return fetch('https://newsdata.io/api/1/news?apikey=pub_104367874abb24c680d4c186f264c41356692&q=india ').then((res)=>res.json())
// }
// ) 

 export const reducer = createSlice({
    name:'items' ,
    initialState:{
        show:true,
        items:TrendingData,
        filteredItems:TrendingData,
        Nation:NationData,
        filteredNation:NationData,
        World:HealthData,
        filteredWorld:HealthData,
        Sports:SportsData,
        filteredSports:SportsData,
        Business:BusinessData,
        filteredBusiness:BusinessData,
        Health:HealthData,
        filteredHealth:HealthData,
   

    },
    reducers:{
        showSidebar : state =>{
            state.show = !state.show
        },
       
//     filterTrending:(state, action)=>{

//         const filteredItem =state.items.filter((i)=>i.description.toLowerCase().includes(action.payload.toLowerCase())) 
//         return {
// ...state,
//             filteredItems: action.payload.length > 0 ? filteredItem : [...state.items]
//         }
//     }
}
    // extraReducers:{
    //     [getPosts.fulfilled]:(state, action)=>{
    //         state.items = action.payload
    //     }
    // }
})

export const {showSidebar, filterTrending, nextPage} = reducer.actions


export default reducer.reducer

