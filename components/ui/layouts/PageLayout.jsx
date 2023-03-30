import Link from "next/link"
import styled from "styled-components"
import { Container } from "./Container"

export const PageLayout = (props) => {
    const { mainSection, children } = props
    return (
        <Container>
            <MainSection>
                {mainSection}
            </MainSection>

            <PageContentWrapper>
                <Aside>
                    <LinkGroup>
                        <h3>О КОМПАНИИ</h3>
                        <Link href="/contacts">Контакты</Link>
                    </LinkGroup>
                    
                    <LinkGroup>
                        <h3>ПОСТАВКИ</h3>
                        <Link href="/delivery">Линейка поставок</Link>
                        <Link href="/#develop">Поставка компонентов под разработку</Link>
                        <Link href="/#bulk">Преимущества</Link>
                    </LinkGroup>
                </Aside>
                <PageContent>{children}</PageContent>
            </PageContentWrapper>
        </Container>
    )
}
const MainSection = styled.section`
    position: relative;
    padding: 200px 64px;
    background: url('/static/main-bj1.jpeg') center no-repeat;
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

const PageContentWrapper = styled.div`
    display: flex;
`
const PageContent = styled.div`
    width: 75%;
`

const Aside = styled.aside`
    width: 25%;
`
const LinkGroup = styled.div`
    a {
        display: block;
    }
`