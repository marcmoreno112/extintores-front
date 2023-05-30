import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      "tertiary-dark": string;
      "feedback-ok": string;
    };

    fonts: {
      primary: string;
      secondary: string;
    };
  }
}
