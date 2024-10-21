import styled from 'styled-components'
import { breakpoint, screenWidth } from '../../../lib/theme'

const Container = styled.div`
    max-width: 90%;
    margin: 0 auto;

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
export { Container }
