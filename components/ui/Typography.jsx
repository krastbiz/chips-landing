import styled from 'styled-components'
import { breakpoint } from '../../lib/theme'

export const H1 = styled.h1`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.light};
    font-weight: bold;
    font-size: 45px;
    line-height: 61px;

    ${breakpoint.desktop`
    font-size: 38px;
    line-height: 51px;
    `}

    ${breakpoint.tablet`
        font-size: 38px;
        line-height: 51px;
    `}

    ${breakpoint.mobile`
        font-size: 20px;
        line-height: 41px;
    `}
`

export const H2 = styled.h2`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: ${({ theme }) => theme.colors.base};
    opacity: 0.65;
    ${breakpoint.desktop`
   font-size: 20px;
    line-height: 28px;
    `}
    ${breakpoint.mobile`
        font-size: 16px;
        line-height: 20px;
    `}
`

export const H3 = styled.h3`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    opacity: 0.65;
    color: ${({ theme }) => theme.colors.base};
`

export const Text = styled.p`
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.base};
    opacity: 0.65;
    font-weight: 300;
    font-size: 18px;
    line-height: 25px;
    ${breakpoint.desktop`
   font-size: 16px;
    line-height: 22px;
    `}
`
