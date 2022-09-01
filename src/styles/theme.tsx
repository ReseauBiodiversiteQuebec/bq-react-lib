// Use http://chir.ag/projects/name-that-color to name colors
const colors = {
  white: '#ffffff',
  black: '#000000',
  darkv1: '#353535',
  darkv2: '#3A3A3A',
  bluev1: '#7A93B5',
  greenv1: '#7AB5B0',
  yellowv1: '#E0B658',
  orangev1: '#E08558',
};

//devices
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  tabletM: '912px',
  laptop: '1024px',
  laptopL: '1440px',
  desktopM: '1700px',
  desktop: '2560px',
};

export const devices = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletM: `(max-width: ${size.tabletM})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
  gtlaptopL: `(min-width: ${size.laptopL})`,
};

//styles

const fonts = {
  roboto: '"Roboto", sans-serif;',
  lato: '"Lato", sans-serif;',
};

const fontStyle = {
  italic: 'italic',
  normal: 'normal',
};

const fontWeight = {
  extralight: '100',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  heavy: '900',
};

const fontSize = {
  small: 0.75,
  normal: 1,
  medium: 1.25,
  large: 2.25,
  extralarge: 3.5,
};

const lineHeight = {
  basic: 1,
  medium: 1.0625,
  customText: 1.051,
  large: 2.3,
  extralarge: 3.55,
};

const letterSpacing = {
  basic: 0.350347,
};

const textStyle = {
  menu: { color: colors.white },
  color: colors.white,
  lineHeight: lineHeight.basic,
  letterSpacing: letterSpacing.basic,
  font: fonts.lato,
  fontSize: fontSize.normal,
  fontWeight: fontWeight.bold,
  fontStyle: fontStyle.normal,
};

const paddings = {
  body: { left: 100, right: 100, top: 0, bottom: 0 },
};

const basicMode = {
  font: fonts.lato,
  fonts,
  colors,
  textStyle,
  letterSpacing,
  lineHeight,
  fontWeight,
  fontStyle,
  fontSize,
  devices,
  mode: 'dark',
  paddings,
};

export const appTheme = {
  lightMode: {
    ...basicMode,
    mode: 'light',
    components: {
      header: {
        background: colors.white,
        fontColor: colors.darkv1,
        tabContentBackground: colors.white,
      },
      body: {
        background: colors.white,
      },
      hero: {
        background: colors.white,
        fontColor: colors.darkv1,
        title: colors.white,
      },
      text: {
        basic: {
          ...textStyle,
          menu: { color: colors.darkv1 },
          color: colors.darkv1,
        },
        title: {
          ...textStyle,
          fontSize: fontSize.large,
          fontWeight: fontWeight.extrabold,
          lineHeight: lineHeight.large,
          menu: { color: colors.darkv1 },
          color: colors.darkv1,
        },
        subtitle: {
          ...textStyle,
          font: fonts.roboto,
          fontSize: fontSize.medium,
          fontWeight: fontWeight.medium,
          menu: { color: colors.darkv1 },
          color: colors.darkv1,
        },
        ...{
          ...textStyle,
          menu: { color: colors.darkv1 },
          color: colors.darkv1,
        },
      },
      errorMessage: {
        errorRed: 'red',
      },
    },
  },
  darkMode: {
    ...basicMode,
    mode: 'dark',
    components: {
      header: {
        background: colors.darkv1,
        fontColor: colors.white,
        tabContentBackground: colors.darkv2,
      },
      body: {
        background: colors.darkv2,
      },
      hero: {
        background: colors.darkv2,
        fontColor: colors.white,
        title: colors.darkv2,
      },
      text: {
        basic: {
          ...textStyle,
        },
        title: {
          ...textStyle,
          fontSize: fontSize.large,
          fontWeight: fontWeight.extrabold,
          lineHeight: lineHeight.large,
        },
        subtitle: {
          ...textStyle,
          font: fonts.roboto,
          fontSize: fontSize.medium,
          fontWeight: fontWeight.medium,
        },
        ...textStyle,
      },
      errorMessage: {
        errorRed: 'red',
      },
    },
  },
};