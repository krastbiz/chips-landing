import styled from 'styled-components'
import { breakpoint } from '../../../lib/theme'

export const MainSection = styled.section`
    margin-bottom: 30px;
    position: relative;

    ${breakpoint.laptop`
        padding: 130px 64px;
    `}

    ${breakpoint.mobile`
        text-align: center;
        padding: 10px 10px;
    `}
`
