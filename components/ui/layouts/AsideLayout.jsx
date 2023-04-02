import Link from "next/link"
import styled from "styled-components"
import { breakpoint } from "../../../lib/theme"
import { Delimeter } from "../Delimeter"
import { H3 } from "../Typography"
import { Container } from "./Container"

export const AsideLayout = (props) => {
    const { children } = props
    return (
        <Container>
            <PageContentWrapper>
                <Aside>
                    <LinkGroup>
                        <LinkGroupTitle>
                            <H3Styled>О КОМПАНИИ</H3Styled>
                            <Delimeter right/>
                        </LinkGroupTitle>
                        <Link href="/contacts">Контакты</Link>
                    </LinkGroup>
                    
                    <LinkGroup>
                        <LinkGroupTitle>
                            <H3Styled>ПОСТАВКИ</H3Styled>
                            <Delimeter right/>
                        </LinkGroupTitle>
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

const PageContentWrapper = styled.div`
    display: flex;
`
const PageContent = styled.div`
    width: 70%;

    ${breakpoint.tablet`
        width: 100%;
    `}
`

const LinkGroup = styled.div`
    a {
        display: block;
        font-family: ${({ theme }) => theme.fonts.roboto};
        font-size: 18px;
        line-height: 21px;
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        padding-left: 60px;
    }

    a:hover {
        text-decoration: underline;
    }

    a + a {
        margin-top: 28px;
    }

    ${breakpoint.desktop`
        a {
            padding-left: 30px;
        }
    `}

    ${breakpoint.laptop`
        a {
            padding-left: 10px;
        }
    `}
`

const Aside = styled.aside`
    width: 30%;
    padding-right: 40px;

    ${LinkGroup} + ${LinkGroup} {
        margin-top: 40px;
    }

    ${breakpoint.tablet`
        display: none;
    `}
`

const LinkGroupTitle = styled.div`
    margin-bottom: 24px;
`

const H3Styled = styled(H3)`
    padding-left: 30px;
    margin-bottom: 12px;

    ${breakpoint.laptop`
        padding-left: 10px;
    `}
`