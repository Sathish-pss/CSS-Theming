import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Define your color palettes
const lightPalette = {
  primary: {
    main: '#1976d2', //Main color of the Theme
    light: '#63a4ff', // Lighter version of the theme
    dark: '#004ba0', //Darker version of the theme
    contrastText: '#ffffff',  // Contrast color of the Primary color
  },
  secondary: {
    main: '#dc004e',  // Secondary color 
    light: '#ff5c8d', // Lighter version of the secondary color
    dark: '#9a0036',  // Darker version of the secondary color
    contrastText: '#ffffff', // Contrast version of the secondary color
  },
  background: {
    default: '#ffffff',  // Default background color
    paper: '#f5f5f5',   // Paper color
  },
  text: {
    primary: '#000000',  // Text Primary color
    secondary: '#555555', // Text secondary color
  },
};


// Dark Mode color Palette with color configurations
const darkPalette = {
  primary: {
    main: '#90caf9',
    light: '#c3fdff',
    dark: '#5d99c6',
    contrastText: '#000000',
  },
  secondary: {
    main: '#f48fb1',
    light: '#ffc1e3',
    dark: '#bf5f82',
    contrastText: '#000000',
  },
  background: {
    default: '#121212',
    paper: '#424242',
  },
  text: {
    primary: '#ffffff',
    secondary: '#aaaaaa',
  },
};

// Base theme configuration with responsive typography and spacing
const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      [`@media (min-width:${960}px)`]: {
        fontSize: '3rem',
      },
      [`@media (min-width:${1280}px)`]: {
        fontSize: '3.5rem',
      },
      [`@media (min-width:${1920}px)`]: {
        fontSize: '4rem',
      },
    },
    h2: {
      fontSize: '2rem',
      [`@media (min-width:${960}px)`]: {
        fontSize: '2.5rem',
      },
      [`@media (min-width:${1280}px)`]: {
        fontSize: '3rem',
      },
      [`@media (min-width:${1920}px)`]: {
        fontSize: '3.5rem',
      },
    },
    h3: {
      fontSize: '1.75rem',
      [`@media (min-width:${960}px)`]: {
        fontSize: '2rem',
      },
      [`@media (min-width:${1280}px)`]: {
        fontSize: '2.25rem',
      },
      [`@media (min-width:${1920}px)`]: {
        fontSize: '2.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      [`@media (min-width:${960}px)`]: {
        fontSize: '1.75rem',
      },
      [`@media (min-width:${1280}px)`]: {
        fontSize: '2rem',
      },
      [`@media (min-width:${1920}px)`]: {
        fontSize: '2.25rem',
      },
    },
    h5: {
      fontSize: '1.25rem',
      [`@media (min-width:${960}px)`]: {
        fontSize: '1.5rem',
      },
      [`@media (min-width:${1280}px)`]: {
        fontSize: '1.75rem',
      },
      [`@media (min-width:${1920}px)`]: {
        fontSize: '2rem',
      },
    },
    h6: {
      fontSize: '1rem',
      [`@media (min-width:${960}px)`]: {
        fontSize: '1.25rem',
      },
      [`@media (min-width:${1280}px)`]: {
        fontSize: '1.5rem',
      },
      [`@media (min-width:${1920}px)`]: {
        fontSize: '1.75rem',
      },
    },
    body1: {
      fontSize: '1rem',
      [`@media (min-width:${960}px)`]: {
        fontSize: '1.125rem',
      },
      [`@media (min-width:${1280}px)`]: {
        fontSize: '1.25rem',
      },
      [`@media (min-width:${1920}px)`]: {
        fontSize: '1.375rem',
      },
    },
    body2: {
      fontSize: '0.875rem',
      [`@media (min-width:${960}px)`]: {
        fontSize: '1rem',
      },
      [`@media (min-width:${1280}px)`]: {
        fontSize: '1.125rem',
      },
      [`@media (min-width:${1920}px)`]: {
        fontSize: '1.25rem',
      },
    },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
});

// Create light and dark themes with responsive font sizes
const lightTheme = responsiveFontSizes(createTheme({
  ...baseTheme,
  palette: lightPalette,
}));

const darkTheme = responsiveFontSizes(createTheme({
  ...baseTheme,
  palette: darkPalette,
}));

export { lightTheme, darkTheme };
