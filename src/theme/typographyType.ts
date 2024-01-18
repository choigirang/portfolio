import { TypographyVariantsOptions } from '@mui/material';

export type ThemeMode = 'light' | 'dark';
// 다크 모드 구현을 위해 테마 모드 정의

export type FontFamily =
  | 'PretendardExtraBold'
  | 'PretendardBold'
  | 'PretendardSemiBold'
  | 'PretendardMedium'
  | 'PretendardRegular';

export interface CustomTypographyVariantsOptions extends TypographyVariantsOptions {
  fontWeightSemiBold: number;
  fontWeightExtraBold: number;
}
