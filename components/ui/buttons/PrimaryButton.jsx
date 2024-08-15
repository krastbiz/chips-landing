import styled, { css } from "styled-components";

const PrimaryButton = styled.button`
    display: block;
    border: 2px solid ${({ theme }) => theme.colors.light};
    box-sizing: border-box;
    border-radius: 5px;
    width: 228px;
    height: 40px;
    text-align: center;
    text-transform: uppercase;
    line-height: 36px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-weight: bold;
    font-size: 12px;
    color: white;
    cursor: ${({ theme }) => theme.colors.light};
    transition: 0.3s;
    background:  ${({ theme }) => theme.colors.red};

    :hover {
        background: white;
        color: ${({ theme }) => theme.colors.primary}
    }

    ${(props) => props.filled && filledCss}
    ${(props) => props.red && redCss}
`

const filledCss = css`
    background: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.primary};

    :hover {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.light};
        border: 2px solid ${({ theme }) => theme.colors.primary};
    }
`
const redCss = css`
background: 'red';
`

export { PrimaryButton }