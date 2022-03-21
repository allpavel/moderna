import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Wrapper = styled.h1`
    font-size: 1.75rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    a {
        font-family: var(--primary-font);
        color: #000;
        text-decoration: none;
    }

`;

const Logo = () => {
    return (
        <Wrapper>
            <Link to="/">Moderna</Link>
        </Wrapper>
    );
};

export default Logo;
