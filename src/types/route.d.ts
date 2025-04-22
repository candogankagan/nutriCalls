import { AuthScreens } from '@/routes';
import { ResultTypes } from '@/screens/Common/Result';

export type AuthStackParamList = {
  Login: undefined;
  CreatePassword: {
    fullName: string;
    phoneNumber: string;
  };
  Result: {
    resultType: keyof typeof ResultTypes;
  };
  CommonOtp: {
    phoneNumber: string;
  };
  ForgotPassword: undefined;
  ForgotPasswordOtp: {
    phoneNumber: string;
    redirectRoute?: AuthScreens;
  };
  UpdatePassword: {
    phoneNumber: string;
  };
};

export type MainStackParamList = {
  Dashboard: undefined;
  GetPayment: {
    paymentType: 'PaymentDirectly' | 'PaymentViaLink';
  };
  FreePayment: undefined;
  PdfScreen: {
    pdfLink: string;
    pdfTitle: string;
  };
};
