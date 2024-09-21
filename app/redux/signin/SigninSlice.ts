import { createSlice } from '@reduxjs/toolkit';
import { users } from '../../types';
import authUser from './SigninService';

interface initialStateType {
  users: users;
  isloading: boolean;
  error: string | unknown;
  isSuccess: boolean;
  usersList: {
    [key: string]: string;
  };
}
const initialState: initialStateType = {
  users: { email: '', avatar: '', id: 0, first_name: '', last_name: '' },
  isloading: false,
  error: '',
  isSuccess: false,
  usersList: {},
};

const SigninSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    logOut: state => {
      (state.isloading = false), (state.error = ''), (state.isSuccess = false);
    },
    editUser: (state, action) => {
      state.users = action.payload;
    },
    resetError: state => {
      state.error = '';
    },
    logIn: (state, action) => {
      state.usersList[state.users.email] = action.payload.password;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authUser.pending, state => {
        state.isloading = true;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.users = { ...action.payload };
        (state.isloading = false), (state.isSuccess = true);
      })
      .addCase(authUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isloading = false;
      });
  },
});

export const { logOut, editUser, resetError, logIn } = SigninSlice.actions;
export default SigninSlice.reducer;
