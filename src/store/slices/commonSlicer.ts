import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../rootReducer';
import {Colors} from '../../styles/colorPallets';
import {BaseColorType} from '../../types';

export enum LanguagesKey {
  TR = 'tr',
  EN = 'en',
  AR = 'ar',
}
interface CommonState {
  commonLoading: boolean;
  isDarkMode: boolean;
  theme: BaseColorType;
  showSplashScreen: boolean;
  language: LanguagesKey;
}

const initialState: CommonState = {
  isDarkMode: false,
  language: LanguagesKey.TR,
  theme: Colors.LIGHT,
  showSplashScreen: false,
  commonLoading: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setShowSplashScreen: (state, action) => {
      state.showSplashScreen = action.payload;
    },
    setIsDarkMode: (state, action) => {
      state.isDarkMode = action.payload;
      state.theme = action.payload ? Colors.DARK : Colors.LIGHT;
    },
    setLanguage: (state, action: PayloadAction<LanguagesKey>) => {
      state.language = action.payload;
    },
    setCommonLoading: (state, action) => {
      state.commonLoading = action.payload;
    },
  },
});

export const GetCommonState = (state: RootState) => state.common;

export const {
  setIsDarkMode,
  setShowSplashScreen,
  setCommonLoading,
  setLanguage,
} = commonSlice.actions;

export default commonSlice.reducer;
