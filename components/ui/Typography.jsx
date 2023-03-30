import styled from "styled-components";
import { breakpoint } from "../../lib/theme";

export const H1 = styled.h1`
    margin-bottom: 52px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.light};
    font-weight: bold;
    font-size: 45px;
    line-height: 55px;

    ${breakpoint.tablet`
        font-size: 48px;
    `}

    ${breakpoint.mobile`
        margin-bottom: 30px;
        font-size: 20px;
        line-height: 30px;
    `}
`

export const H2 = styled.h2`
    margin-bottom: 30px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
`

export const H3 = styled.h3`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};
`

export const Text = styled.p`
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.roboto};
    color: #000000;
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
`