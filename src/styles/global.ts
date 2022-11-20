import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    ${({ theme }) =>
      Object.entries(theme)
        .filter(([_key, value]) => typeof value === 'string')
        .map(([key, value]) => `--${key}: ${value}`)
        .join(';\n') + ';\n'}
  }

  /* CONFIGURE FONTS */
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('static/fonts/Roboto-Regular.ttf') format("truetype");
  }
  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('static/fonts/Roboto-Italic.ttf') format("truetype");
  }

  @font-face {
    font-family: 'Roboto Semibold';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('static/fonts/Roboto-Medium.ttf') format("truetype");
  }
  @font-face {
    font-family: 'Roboto Semibold';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: url('static/fonts/Roboto-MediumItalic.ttf') format("truetype");
  }

  @font-face {
    font-family: 'Roboto Bold';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url('static/fonts/Roboto-Bold.ttf') format("truetype");
  }
  @font-face {
    font-family: 'Roboto Bold';
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: url('static/fonts/Roboto-BoldItalic.ttf') format("truetype");
  }

  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: url('static/fonts/RobotoMono-Regular.ttf') format("truetype");
  }
  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 400;
    src: url('static/fonts/RobotoMono-Italic.ttf') format("truetype");
  }
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 600;
    src: url('static/fonts/RobotoMono-SemiBold.ttf') format("truetype");
  }
  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 600;
    src: url('static/fonts/RobotoMono-SemiBoldItalic.ttf') format("truetype");
  }
  @font-face {
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 700;
    src: url('static/fonts/RobotoMono-Bold.ttf') format("truetype");
  }
  @font-face {
    font-family: 'Roboto Mono';
    font-style: italic;
    font-weight: 700;
    src: url('static/fonts/RobotoMono-BoldItalic.ttf') format("truetype");
  }
  /* END CONFIGURE FONTS */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
    background: var(--gray-800);
  }

  *, button, input, select, textarea {
    appearance: none;
    outline: 0;
    font-family: var(--font-regular);
    font-size: var(--font-size-1);
    color: var(--gray-0);
  }
`
