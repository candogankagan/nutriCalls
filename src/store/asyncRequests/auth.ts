
import authServices from '@/services/auth.services';
import { LocalResponse } from '@/types/API/BaseApi';
import { LoginRequest, LoginResponse, TokenDataType } from '@/types/API/auth';

import { createAsyncThunk } from '@reduxjs/toolkit';

export type BaseStringResponse = LocalResponse<string>;
export type LoginOtpResponse = LocalResponse<TokenDataType>;

export const login = createAsyncThunk<LocalResponse<LoginResponse>, LoginRequest>('auth/login', async data => {
  try {
    const response = await authServices.login({ ...data });
    return response;
  } catch (error: any) {
    return error;
  }
});
