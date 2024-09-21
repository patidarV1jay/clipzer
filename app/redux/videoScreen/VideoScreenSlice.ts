import { createSlice } from "@reduxjs/toolkit";
import fetchVideo from "./VideoScreenService";
import { Thunk } from "../../constants";

export interface item {
    description: string,
    sources:string[],
    thumb:string,
    title:string,
    subtitle:string
}

interface initialState {
    videos : item[],
    isloading:boolean,
    error: string  | unknown

}

const initialState : initialState= {
    videos:[],
    isloading : false,
    error: ''
}

const VideoScreenSlice = createSlice({
    name:Thunk.video,
    initialState,
    reducers:{},
     extraReducers:(builder) =>{
        builder 
        .addCase(fetchVideo.pending,state=>{
            state.isloading = true
        })
        .addCase(fetchVideo.fulfilled,(state,action)=>{
            state.videos = action.payload,
            state.isloading = false
        })
        .addCase(fetchVideo.rejected,(state,action)=>{
            state.error = action.payload,
            state.isloading = false
        }
        )
    } 
})

export default VideoScreenSlice.reducer
