import styled from 'styled-components'
import { breakpoint, screenWidth } from '../../../lib/theme'

export const Container = styled.div`

    ${breakpoint.desktop`
        max-width: 100%;
    `}

    ${breakpoint.tablet`
        padding-right: 10px;
        padding-left: 10px;
        width: 100%;
    `}

    ${breakpoint.mobile`
        padding-right: 10px;
        padding-left: 10px;
        width: 100%;
    `}
`
