import styled from 'styled-components'
import { breakpoint } from '../../../lib/theme'

export const BaseContentContainer = styled.div`
    color: ${({ theme }) => theme.colors.base};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 14px;
    line-height: 18px;
    background-color: ${({ theme }) => theme.colors.altBackground};
    font-family: ${({ theme }) => theme.fonts.velasanslight};
    border-radius: 30px;
    padding: 10px 15px;

    /* ${breakpoint.laptop`
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
    `} */
`
