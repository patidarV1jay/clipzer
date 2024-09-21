import { Routes } from '../constants';

export interface ColorTheme {
  [key: string]: string;
}
export interface ColorType {
  light: ColorTheme;
  dark: ColorTheme;
  default?: ColorTheme;
}

export interface item {
  avatar: string | undefined;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  following?: boolean
}

export interface SigninValuesType {
  email: string;
  password: string;
  name?: string;
}
export interface users {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface ProfileTypes {
  first_name: string | undefined;
  last_name: string | undefined;
  email: string | undefined;
}

export interface RootStackParamList {
  navigate(signup: Routes): unknown;
  [Routes.Signin]: undefined;
  [Routes.TabNavigation]: undefined;
  [Routes.VideoPlayer]: string;
}

export interface ThemeContextType {
  themeValue: keyof ColorType;
  setThemeValue: React.Dispatch<React.SetStateAction<keyof ColorType>>;
  initialValue: number;
  setInitialValue: React.Dispatch<React.SetStateAction<number>>;
}

export interface PasswordType {
  password: string;
  confirmPassword: string;
  name?: string;
}

export interface NotificationType {
  collapseKey: string;
  from: string;
  messageId: string;
  notification: Partial<{
    android: Record<string, string>;
    body: string;
    title: string;
    clickActionUrl: string;
    iconUrl: string;
  }>;
  sentTime: number;
  ttl: number;
}
