import styled from "styled-components";

export const Delimeter = styled.div`
    position: relative;
    height: 1px;
    background-color: #C4C4C4;
    width: ${({ width }) => width ? width : '100%'};
    ${({ hideDot, right }) => !hideDot ? `
    ::before {
        content: '';
        display: block;
        position: absolute;
        ${right ? 'right:0;' : 'left: 0;'}
        top: 50%;
        width: 7px;
        height: 7px;
        border-radius: 10px;
        background: #C4C4C4;
        transform: translateY(-50%);
    ` : ''}
    }
`
