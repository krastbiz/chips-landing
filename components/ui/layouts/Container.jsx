import styled from "styled-components"
import { breakpoint, screenWidth } from "../../../lib/theme";

const Container = styled.div`
    max-width: ${screenWidth.desktop};
    margin: 0 auto;
    // &:first-child {
    //     max-height: 20vh;
    // }

    ${breakpoint.desktop`
        max-width: ${screenWidth.laptop};
    `}

    ${breakpoint.laptop`
        max-width: ${screenWidth.tablet};
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