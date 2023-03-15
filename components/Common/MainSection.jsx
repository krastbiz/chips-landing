import styled from "styled-components";

export const MainSection = styled.section`
    margin-bottom: 64px;
    position: relative;
    padding: 200px 64px;
    background: url('/static/main-bg.jpeg') center no-repeat;
    background-size: cover;

    ::before {
        content: '';
        display: block;
        position: absolute;
        width: 500px;
        height: 38px;
        background: ${({ theme }) => theme.colors.light};
        transform: skewX(-45deg);
        z-index: 100;
        bottom: 0;
        right: -25px;
    }
`