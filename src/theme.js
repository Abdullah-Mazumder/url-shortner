export const darkColors = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000",
  },
  primary: {
    // blue
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
    400: "#4d547d",
    500: "#21295c",
    600: "#191F45",
    700: "#141937",
    800: "#0d1025",
    900: "#070812",
  },
  secondary: {
    // yellow
    50: "#f0f0f0",
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14",
  },
};

export const lightColors = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#f0f0f0",
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000",
  },
  primary: {
    // blue
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
    400: "#4d547d",
    500: "#21295c",
    600: "#191F45",
    700: "#141937",
    800: "#0d1025",
    900: "#070812",
  },
  secondary: {
    // #00887A
    100: "#cce7e4",
    200: "#99cfca",
    300: "#66b8af",
    400: "#33a095",
    500: "#00887a",
    600: "#006d62",
    700: "#005249",
    800: "#003631",
    900: "#001b18",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...darkColors.primary,
              main: darkColors.primary[500],
              light: darkColors.primary[400],
            },
            secondary: {
              ...darkColors.secondary,
              main: darkColors.secondary[500],
              light: darkColors.secondary[700],
            },
            neutral: {
              ...darkColors.grey,
              main: darkColors.grey[500],
            },
            background: {
              default: darkColors.primary[600],
              alt: darkColors.primary[500],
              bg: darkColors.primary[500],
            },
            color: {
              one: darkColors.grey[100],
              two: darkColors.grey[100],
              three: darkColors.grey[700],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...lightColors.primary,
              main: lightColors.grey[200],
              light: lightColors.grey[100],
            },
            secondary: {
              ...lightColors.secondary,
              main: lightColors.secondary[600],
              light: lightColors.secondary[700],
            },
            neutral: {
              ...lightColors.grey,
              main: lightColors.grey[500],
            },
            background: {
              default: darkColors.grey[0],
              alt: lightColors.grey[50],
              bg: lightColors.grey[0],
            },
            color: {
              one: lightColors.grey[600],
              two: lightColors.grey[700],
              three: lightColors.grey[800],
            },
          }),
    },
    typography: {
      fontSize: 14,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 16,
      },
      h6: {
        fontSize: 14,
      },
    },
  };
};
