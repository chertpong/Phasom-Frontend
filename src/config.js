import getMuiTheme from 'material-ui/styles/getMuiTheme';
import spacing from 'material-ui/styles/spacing';
import * as colors from 'material-ui/styles/colors';
import zIndex from 'material-ui/styles/zIndex';
import * as colorManipulator from 'material-ui/utils/colorManipulator';

export const muiTheme = getMuiTheme({
  spacing,
  zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: colors.brown500,
    primary2Color: colors.brown600,
    primary3Color: colors.brown100,
    accent1Color: colors.pinkA200,
    accent2Color: colors.grey100,
    accent3Color: colors.grey500,
    textColor: colors.darkBlack,
    alternateTextColor: colors.white,
    canvasColor: colors.white,
    borderColor: colors.grey300,
    disabledColor: colorManipulator.fade(colors.darkBlack, 0.3),
    pickerHeaderColor: colors.cyan500,
  },
});

// Profiles
export const PROFILE = {
  DEVELOPMENT: 'DEVELOPMENT',
  PRODUCTION: 'PRODUCTION',
};

export const API_URL = 'http://localhost:51504/en';
export const CURRENT_PROFILE = PROFILE.DEVELOPMENT;
