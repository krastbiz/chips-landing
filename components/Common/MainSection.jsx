import styled from "styled-components";
import { breakpoint } from "../../lib/theme";

export const MainSection = styled.section`
    overflow: hidden;
    margin-bottom: 64px;
    position: relative;
    padding: 80px 64px;
    background: url('/static/images/main-bj1.jpeg') center no-repeat;
    background-size: cover;
    overflow: hidden;

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

    ${breakpoint.laptop`
        padding: 130px 64px;
    `}

    ${breakpoint.tablet`
        ::before {
            display: none;
        }
    `}

    ${breakpoint.mobile`
        text-align: center;
        padding: 10px 10px;
    `}
`