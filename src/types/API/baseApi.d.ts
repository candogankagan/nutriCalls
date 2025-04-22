export type MainResponse<T> = T & {
  error: errorType;
  isFailure: boolean;
  isSuccess: boolean;
  message: null | string;
};

export type LocalResponse<T> = {
  data?: T;
  isSuccess: boolean;
  uiError?: string;
  uiMessage?: string;
};

type errorType = {
  code: number | string;
  message: string;
};
