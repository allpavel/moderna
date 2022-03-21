import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";

const Wrapper = styled.header`
    height: 3.75rem;
`;

const Container = styled.div`
    max-width: var(--max-width-desktop);
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 .75rem;
    margin: 0 auto;
`;

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Logo />
                <Navbar />
            </Container>
        </Wrapper>
    );
};

export default Header;
