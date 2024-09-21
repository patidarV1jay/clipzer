import { useAxios } from "../../config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIConstants, Thunk } from "../../constants";

const {users ,perPage} = APIConstants
const getUserList = createAsyncThunk(
  Thunk.home, async(page:number,{rejectWithValue}) =>{
           try{
             const response = await useAxios.get(`${users}${page}${perPage}`)
            return response?.data?.data
           }
           catch(error){
             return rejectWithValue(error) 
           }
    }
)

export default getUserList
