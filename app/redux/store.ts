import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import { HomeScreenReducer } from './homeScreen';
import { NotificationReducer } from './notification';
import { authReducer } from './signin';
import { VideoScreenReducer } from './videoScreen';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['signin', 'notification'],
};

const rootReducer = combineReducers({
  signin: authReducer,
  homeScreen: HomeScreenReducer,
  videoScreen: VideoScreenReducer,
  notification: NotificationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  devTools: true,
});

type AppDispatchType = typeof store.dispatch;
type RootStateType = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const persistor = persistStore(store);
export default store;
