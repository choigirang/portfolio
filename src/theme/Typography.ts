import { PaletteOptions } from '@mui/material';
import { CustomTypographyVariantsOptions, FontFamily, ThemeMode } from './typographyType';

const Typography = (
  mode: ThemeMode, // 다크 모드를 위해
  fontFamily: FontFamily, // text의 폰트를 위해
  palette: PaletteOptions, // 정의한 팔레트를 활용해 text 색깔을 위해
): CustomTypographyVariantsOptions => ({
  // 텍스트 스타일 설정
  htmlFontSize: 16,
  fontFamily,
  fontWeightRegular: 100,
  fontWeightMedium: 200,
  fontWeightSemiBold: 300,
  fontWeightBold: 400,
  fontWeightExtraBold: 500,
  // Title1
  h1: {
    fontFamily: 'PretendardBold',
    fontWeight: 600,
    fontSize: '24px',
    color: mode === 'light' ? palette.grey?.[900] : palette.grey?.[50],
  },
  // Title2
  h2: {
    fontFamily: 'PretendardBold',
    fontWeight: 600,
    fontSize: '22px',
    color: mode === 'light' ? palette.grey?.[900] : palette.grey?.[50],
  },
  // Title3
  h3: {
    fontFamily: 'PretendardBold',
    fontWeight: 600,
    fontSize: '20px',
    color: mode === 'light' ? palette.grey?.[900] : palette.grey?.[50],
  },
  // Title4
  h4: {
    fontFamily: 'PretendardBold',
    fontWeight: 600,
    fontSize: '18px',
    color: mode === 'light' ? palette.grey?.[900] : palette.grey?.[50],
  },
  // Title5
  h5: {
    fontFamily: 'PretendardBold',
    fontWeight: 600,
    fontSize: '16px',
    color: mode === 'light' ? palette.grey?.[900] : palette.grey?.[50],
  },
  // Body1
  body1: {
    fontFamily: 'PretendardMedium',
    fontSize: '15px',
    color: mode === 'light' ? palette.grey?.[900] : palette.grey?.[50],
  },
  // Body2
  body2: {
    fontFamily: 'PretendardMedium',
    fontSize: '14px',
    color: mode === 'light' ? palette.grey?.[900] : palette.grey?.[50],
  },
  // Body3
  subtitle1: {
    fontFamily: 'PretendardMedium',
    fontSize: '13px',
    fontWeight: 600,
    color: mode === 'light' ? palette.grey?.[900] : palette.grey?.[50],
  },
  // Body4
  subtitle2: {
    fontFamily: 'PretendardMedium',
    fontSize: '12px',
    fontWeight: 500,
    color: mode === 'light' ? palette.grey?.[900] : palette.grey?.[50],
  },
  // Body5
  caption: {
    fontFamily: 'PretendardMedium',
    fontSize: '11px',
    fontWeight: 500,
    color: mode === 'light' ? palette.grey?.[900] : palette.grey?.[50],
  },
  overline: {
    lineHeight: 1.66,
    color: mode === 'light' ? palette.grey?.[900] : palette.grey?.[50],
  },
  button: {
    fontFamily: 'PretendardRegular',
    textTransform: 'capitalize',
    color: mode === 'light' ? palette.grey?.[900] : palette.grey?.[50],
  },
});

export default Typography;
