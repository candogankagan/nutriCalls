
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {createTransform, persistReducer, persistStore} from 'redux-persist';
import rootReducer from './rootReducer';

const excludeSpecificStateTransform = createTransform(
  (inboundState: any, key: any) => {
    if (key === 'auth') {
      return {
        ...inboundState,
        isLoggedIn: false,
        otpCode: '',
      };
    }
    if (key === 'common') {
      return {
        ...inboundState,
        commonLoading: false,
      };
    }
    return inboundState;
  },
  (outboundState: any) => outboundState,
  {whitelist: ['auth', 'common']},
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'common'],
  transforms: [excludeSpecificStateTransform],
};

const persistedReducer = persistReducer<ReturnType<typeof rootReducer>>(
  persistConfig,
  rootReducer,
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Redux Persist ile uyumluluk için
    }).concat(logger), // Redux Logger middleware'i ekleniyor
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
