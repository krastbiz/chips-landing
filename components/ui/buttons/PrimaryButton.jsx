import styled, { css } from 'styled-components'

const PrimaryButton = styled.button`
    display: block;
    border: 1px solid ${({ theme }) => theme.colors.active};
    box-sizing: border-box;
    border-radius: 35px;
    width: 228px;
    height: 40px;
    text-align: center;
    line-height: 25px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-weight: bold;
    font-size: 18px;
    color: white;
    cursor: pointer;
    transition: 0.3s;
    background: ${({ theme }) => theme.colors.greenBackground};

    :hover {
        background: ${({ theme }) => theme.colors.lightGreenBackground};
        color: ${({ theme }) => theme.colors.active};
    }
`

export { PrimaryButton }
