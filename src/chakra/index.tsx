import { extendTheme, theme } from "@chakra-ui/react";

const fonts = {
  ...theme.fonts,
  body: "'Raleway'",
  heading: "'Raleway'",
};

const newTheme = extendTheme({
  fonts: {
    ...fonts,
  },
});

export default newTheme;
