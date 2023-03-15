import styled from "styled-components";

export const H1 = styled.h1`
    margin-bottom: 52px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.light};
    font-weight: bold;
    font-size: 64px;
    line-height: 78px;
`

export const H2 = styled.h2`
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