interface BaseAuthRequest {
  phoneNumber?: string;
}

export type BaseResponse = {
  message?: string;
  errorMessage?: string;
};

export type LoginRequest = BaseAuthRequest & {
  password: string;
};

export type LoginResponse = BaseResponse & {
  isFirstLogin?: boolean;
  firstAndLastName?: string;
};

export type TokenDataType = {
  jwtToken: string;
  expiration: string;
  refreshToken: string;
  userName: string;
};
