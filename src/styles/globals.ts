import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* ==========================================================================
   Reset
   ========================================================================== */
/**
 * Remove anchor text-decoration
 */
 a {
  text-decoration: none;
}

/**
 * Remove list-style
 */
ol, ul {
  list-style: none;
}

html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, a, em, img, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, article, footer, header, nav, section, main {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

h1, h2, h3, h4, h5, h6, p, a, ul {
  font-size: 1em;
  font-weight: normal;
}

img {
  max-width: 100%;
  display: block;
}

html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-size: 62.5%;
}
@media only screen and (max-width: 600px) {
  html {
    font-size: 55%;
  }
}

body {
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1.5;
  background-color: ${props => props.theme['gray-800']};
  -webkit-font-smoothing: antialiased;
}

body * {
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme['gray-100']};
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  line-height: 1.1;
}

h1 {
  font-size: 6.4rem;
}

h2 {
  font-size: 4.2rem;
}

h3 {
  font-size: 3.6rem;
}

h4 {
  font-size: 2.4rem;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  outline-offset: 0.25rem;
}

img,
iframe,
object,
embed,
video {
  max-width: 100%;
}

img[width],
iframe[width],
object[width],
embed[width],
video[width] {
  width: auto;
  /* Defer to max-width */
}

img[width][height],
iframe[width][height],
object[width][height],
embed[width][height],
video[width][height] {
  height: auto;
  /* Preserve aspect ratio */
}

label {
  cursor: pointer;
}

:focus:not(:focus-visible) {
  box-shadow: none;
  outline: 0;
}

:focus-visible {
  outline-color: ${props => props.theme['green-500']};
}

::-moz-selection {
  background-color: ${props => props.theme['green-500']};
}

::selection {
  background-color: ${props => props.theme['green-500']};
}

::marker {
  color: ${props => props.theme['green-500']};
}

::-webkit-calendar-picker-indicator {
  color: ${props => props.theme['green-500']};
}

::-webkit-clear-button {
  color: ${props => props.theme['green-500']};
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  color: ${props => props.theme['green-500']};
}

.sr-only {
  height: 1px;
  left: -10000px;
  overflow: hidden;
  position: absolute;
  top: auto;
  width: 1px;
}
`
