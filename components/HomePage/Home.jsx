import { MainLayout } from "../ui/layouts/MainLayout"
import styled from "styled-components"
import { Container } from "../ui/layouts/Container"
import { PrimaryButton } from "../ui/buttons/PrimaryButton"
import Link from "next/link"
import { PageLayout } from "../ui/layouts/PageLayout"

const Home = () => {

    const mainSection = (
        <>
            <H1>ЭЛЕКТРОННЫЕ КОМПОНЕНТЫ</H1>
            <MainCTAWrapper>
                <Link href="/contacts" passHref legacyBehavior><PrimaryButton as={'a'}>Контакты</PrimaryButton></Link>
                <Link href="/delivery" passHref legacyBehavior><PrimaryButton as={'a'} filled marginLeft={'26px'}>Каталог</PrimaryButton></Link>
            </MainCTAWrapper>
        </>
    )

    return (
        <MainLayout>
            <PageLayout mainSection={mainSection}>
                <h2>ИНОВАЦИОННЫЕ РАЗРАБОТКИ</h2>
                <p>ЧипТрейд– Российский дистрибьютор ведущих мировых производителей компонентов и оборудования</p>
                <p>ЧипТрейд предлагает инновационные разработки, используемые для ответственных применений. Поставляемые компанией компоненты и оборудование отвечают самым высоким требованиям наших заказчиков – промышленных предприятий к высокой надежности, качеству и инновационности технических решений.</p>
            </PageLayout>
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