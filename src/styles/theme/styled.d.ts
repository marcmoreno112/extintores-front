import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      "feedback-ok": string;
    };

    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
