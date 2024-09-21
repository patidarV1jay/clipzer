import { ScreenStrings } from './../../constants/Strings';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useAxios } from '../../config';
import { APIConstants, Thunk } from '../../constants';
import { SigninValuesType } from '../../modules/auth/signin/types';

const authUser = createAsyncThunk(
  Thunk.signin,
  async ({email, password}: SigninValuesType, {rejectWithValue}) => {
    try {
      await useAxios.post(APIConstants.login, {
        email: email,
        password: password,
      });
      const response = await useAxios.get(APIConstants.allUsers);
      const getLoggedInUser = response?.data?.data?.filter(
        (item: {email: string}) => item.email === email,
      );
      return getLoggedInUser?.[0];
    } catch (error) {
      return rejectWithValue(ScreenStrings.failed);
    }
  },
);

export default authUser;
