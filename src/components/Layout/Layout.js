import React from "react";
import { createGlobalStyle } from "styled-components";
import Roboto from "../../fonts/Roboto.woff2";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto}) format('woff2');
    }

    :root {
        --main-color: #a2cce3;
        --max-width-desktop: 1296px;
        --primary-font: 'Roboto', sans-serif;

    }

    html {
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Open Sans", sans-serif;
        max-width: 100%;
        color: #444;
    }


    main {
        display: block;
    }


    h1 {
        font-size: 2em;
        margin: 0.67em 0;
    }

    a {
        background-color: transparent;
    }

    img {
        border-style: none;
    }

    button, 
    select {
        text-transform: none;
    }


    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }



    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }


    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
        outline: 1px dotted ButtonText;
    }

    textarea {
        overflow: auto;
    }
`;

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
