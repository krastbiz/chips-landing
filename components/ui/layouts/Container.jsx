import { Container as ContainerAlias } from "styled-bootstrap-grid";
import styled from "styled-components"
import { breakpoint } from "../../../lib/theme";

const Container = styled.div`
    max-width: 1224px;
    margin: 0 auto;

    ${breakpoint.desktop`
        max-width: 960px;
    `}

    ${breakpoint.laptop`
        max-width: 768px;
    `}

    ${breakpoint.tablet`
        max-width: 100%;
    `}

    ${breakpoint.mobile`
        width: 100%;
    `} 
`
// const Container = styled(ContainerAlias)`
//     padding-left: 0;
//     padding-right: 0;
// `
export { Container }