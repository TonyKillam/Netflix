import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body {
    height: 100%;
    font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu,
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color: #333333;
    font-size: 16px;
    }
`;
