import { MainLayout } from "../ui/layouts/MainLayout"
import styled from "styled-components"
import { Container } from "../ui/layouts/Container"
import { PrimaryButton } from "../ui/buttons/PrimaryButton"
import Link from "next/link"

const Home = () => {
    return (
        <MainLayout>
            <Container>
                <MainSection>
                    <H1>ЭЛЕКТРОННЫЕ КОМПОНЕНТЫ</H1>
                    <MainCTAWrapper>
                        <Link href="/contacts" passHref legacyBehavior><PrimaryButton as={'a'}>Контакты</PrimaryButton></Link>
                        <Link href="/delivery" passHref legacyBehavior><PrimaryButton as={'a'} filled marginLeft={'26px'}>Каталог</PrimaryButton></Link>
                    </MainCTAWrapper>
                </MainSection>
            </Container>
        </MainLayout>
    )
}

const MainSection = styled.section`
    position: relative;
    padding: 200px 64px;
    background: url('/static/main-bg.jpeg') center no-repeat;
    background-size: cover;

    ::before {
        content: '';
        display: block;
        position: absolute;
        width: 500px;
        height: 38px;
        background: ${({ theme }) => theme.colors.light};
        transform: skewX(-45deg);
        z-index: 100;
        bottom: 0;
        right: -25px;
    }
`

const H1 = styled.h1`
    margin-bottom: 52px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    color: ${({ theme }) => theme.colors.light};
    font-weight: bold;
    font-size: 64px;
    line-height: 78px;
`

const MainCTAWrapper = styled.div`
    display: flex;

    a + a {
        margin-left: 26px;
    }
`

export default Home