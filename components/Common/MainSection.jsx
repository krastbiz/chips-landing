import styled from 'styled-components'
import { breakpoint } from '../../lib/theme'

export const MainSection = styled.section`
    overflow: hidden;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;

    ${breakpoint.laptop`
        padding: 130px 64px;
    `}

    ${breakpoint.mobile`
        text-align: center;
        padding: 10px 10px;
    `}
`
