import {
  ActionReducerMapBuilder,
  Draft,
  PayloadAction,
  createSlice,
} from '@reduxjs/toolkit';
import getUserList from './homeScreenService';
import { Thunk } from '../../constants';
import { item } from '../../types';

interface initialStateType {
  usersList: item[];
  isloading: boolean;
  error: string | unknown;
  filterUser: item[];
  searchText: string;
  isFollow: boolean;
  followList: item[];
}

const initialState: initialStateType = {
  usersList: [],
  isloading: false,
  error: '',
  filterUser: [],
  searchText: '',
  isFollow: false,
  followList: [],
};

const HomeScreenSlice = createSlice({
  name: Thunk.userList,
  initialState,
  reducers: {
    filterUsers: (state, action) => {
      if (action.payload) {
        state.filterUser = state.usersList.filter((item: item) => {
          const name = item.first_name + ' ' + item.last_name;
          const itemData = name ? name.toUpperCase() : ''.toUpperCase();
          const textdata = action.payload.toUpperCase();
          return itemData.indexOf(textdata) > -1;
        });
      } else {
        state.filterUser = state.usersList;
      }
    },
    addUser: (state: Draft<initialStateType>, action: PayloadAction<item>) => {
      state.filterUser = [action.payload, ...state.filterUser];
      state.usersList = state.filterUser;
    },
    followUser: (state, action) => {
      state.followList = [ ...state.followList, action.payload ];
      state.isFollow = !state.isFollow
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<initialStateType>) => {
    builder
      .addCase(getUserList.pending, (state: Draft<initialStateType>) => {
        state.isloading = true;
      })
      .addCase(
        getUserList.fulfilled,
        (state: Draft<initialStateType>, action: PayloadAction<item[]>) => {
          state.usersList = [...state.usersList, ...action.payload];
          state.filterUser = state.usersList;
          state.isloading = false;
        },
      )
      .addCase(
        getUserList.rejected,
        (
          state: Draft<initialStateType>,
          action: PayloadAction<unknown, string>,
        ) => {
          state.error = action.payload;
          state.isloading = false;
        },
      );
  },
});

export const { filterUsers, addUser, followUser } = HomeScreenSlice.actions;
export default HomeScreenSlice.reducer;
