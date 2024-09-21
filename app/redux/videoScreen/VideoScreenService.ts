import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { APIConstants, Thunk } from '../../constants';

const fetchVideo = createAsyncThunk(
    Thunk.video, async(_,{rejectWithValue})=>{
        try{
           const response = await(axios.get(APIConstants.video))
           return response?.data?.categories[0]?.videos
        }
        catch(error){
            return rejectWithValue(error)
        }
    }
)

export default fetchVideo
