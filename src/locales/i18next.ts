import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from './tr';
import en from './en';
import { LocalLanguageType } from '@/types/commonTypes';

export const LocalLanguages: LocalLanguageType = {
  0: { id: 0, text: 'Turkish', key: 'tr' },
  1: { id: 1, text: 'English', key: 'en' },
  2: { id: 2, text: 'Arabic', key: 'ar' }
};

i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: tr },
    en: { translation: en }
  },
  lng: 'tr',
  fallbackLng: 'tr',
  compatibilityJSON: 'v4'
});

export default { i18n };
