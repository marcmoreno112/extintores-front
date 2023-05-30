import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      tertiaryDark: string;
      feedbackOk: string;
    };

    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
