import styled from 'styled-components'

export const BurgerMenu = (props) => {
    const { isActive, onClick } = props

    return (
        <BurgerWrapper isActive={isActive} onClick={onClick}>
            <BurgerLine />
            <BurgerLine />
            <BurgerLine />
        </BurgerWrapper>
    )
}

const BurgerLine = styled.div`
    height: 2px;
    width: 100%;
    background: #545d49;
`

const BurgerWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;

    width: 25px;
    height: 20px;
    ${({ isActive }) =>
        isActive &&
        `
        ${BurgerLine}:nth-child(1) {
            transform: rotate(45deg);
            position: absolute;
            top: 50%;
        }
        ${BurgerLine}:nth-child(2) {
            display: none;
        }
        ${BurgerLine}:nth-child(3) {
            transform: rotate(-45deg);
            position: absolute;
            top: 50%;
        }
    `}
`
