import { createSlice } from '@reduxjs/toolkit';
import { ScreenStrings, Thunk } from '../../constants';
import { NotificationType } from '../../types';

interface InitialStateType {
  notifications: NotificationType[];
  unreadNotification: NotificationType[];
  routes: string;
}

const initialState: InitialStateType = {
  notifications: [],
  unreadNotification: [],
  routes: ScreenStrings.home
};

const NotificationSlice = createSlice({
  name: Thunk.notification,
  initialState,
  reducers: {
    saveNotification: (state, action) => {
      state.notifications = [action.payload, ...state.notifications];
      state.unreadNotification = [action.payload, ...state.unreadNotification];
    },
    clearNotificaton: state => {
      state.unreadNotification = [];
    },
    routesFocused: (state, action) => {
      state.routes = action.payload
    },
  },
});

export const { saveNotification, clearNotificaton, routesFocused } = NotificationSlice.actions;
export default NotificationSlice.reducer;
