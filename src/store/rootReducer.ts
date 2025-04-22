import {combineReducers} from '@reduxjs/toolkit';
import {commonSlice} from '../store/slices/commonSlicer';
import {authSlice} from '../store/slices/authSlicer';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  common: commonSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
