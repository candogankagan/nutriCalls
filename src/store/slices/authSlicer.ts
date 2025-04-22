import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TokenDataType } from '@/types';
import { RootState } from '../RootReducer';

interface AuthState {
  credentials: {
    phoneNumber: string;
    rememberMe: boolean;
  };
  otpCode: string;
  isLoggedIn: boolean;
  tokenData: TokenDataType;
}

const initialState: AuthState = {
  isLoggedIn: false,
  tokenData: { jwtToken: '', expiration: '', refreshToken: '', userName: '' },
  credentials: {
    phoneNumber: '',
    rememberMe: false
  },
  otpCode: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<typeof state.credentials>) => {
      state.credentials.rememberMe = action.payload.rememberMe;
      state.credentials.phoneNumber = action.payload.phoneNumber;
    },
    setOtpCode: (state, action: PayloadAction<string>) => {
      state.otpCode = action.payload;
    },
    setTokenData: (state, action: PayloadAction<TokenDataType>) => {
      state.tokenData = action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    resetAuthState: state => {
      state.isLoggedIn = false;
      state.tokenData = { jwtToken: '', expiration: '', refreshToken: '', userName: '' };
      state.credentials = { phoneNumber: '', rememberMe: false };
      state.otpCode = '';
    }
  },
  extraReducers: builder => {
    // builder.addCase(getMonthlyPosTurnover.fulfilled, (state, action) => {
    //   if (action.payload.isSuccess && action.payload.data) state.monthlyPosTurnover = action.payload.data.valuesAndLabels;
    // });
  }
});

export const GetAuthState = (state: RootState) => state.auth;
export const { resetAuthState, setTokenData, setCredentials, setOtpCode, setIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;
