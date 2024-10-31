import styled from 'styled-components'
import { breakpoint } from '../../../lib/theme'

const PrimaryButton = styled.button`
    display: block;
    border: 1px solid ${({ theme }) => theme.colors.active};
    box-sizing: border-box;
    border-radius: 35px;
    width: 252px;
    height: 55px;
    text-align: center;
    font-size: 24px;
    line-height: 29px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.base};
    cursor: pointer;
    transition: 0.3s;
    background: ${({ theme }) => theme.colors.greenBackground};

    :hover {
        background: ${({ theme }) => theme.colors.lightGreenBackground};
        color: ${({ theme }) => theme.colors.base};
    }
    ${breakpoint.mobile`
        font-size: 14px;
    line-height: 20px;
    width: 152px;
    height: 35px;
    `}
`

export { PrimaryButton }
