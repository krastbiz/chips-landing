import Link from "next/link"
import { Container } from "styled-bootstrap-grid"
import styled from "styled-components"
import { Delimeter } from "../ui/Delimeter"

const NAV_LINKS = [
    {
        text: 'Главная',
        url: '/'
    },
    {
        text: 'Линейка поставок',
        url: '/delivery',
    },
    {
        text: 'Контроль качества',
        url: '/#quality',
    },
    {
        text: 'Контакты',
        url: '/contacts',
    }
]

const AppHeader = () => {

    const renderNavLink = ({ text, url }) => {
        if (url.startsWith('#')) return <a href={url}>{text}</a>

        return <Link href={url}>{text}</Link>
    }

    return (
        <Header>
            <ContainerStyled>

                <a href="/">
                    <Logo src="/static/logo.svg" alt="Логотип"/>
                </a>

                <HeaderInfoWrapper>
                    <HeaderInfoTop>
                        <HeaderInfoItem>
                            <a href="tel:+7(812)3375359">
                                <img src="/static/phone-icon.svg" alt="phone icon"></img>
                                +7 (812) 337 53 59
                            </a>
                        </HeaderInfoItem>
                        <HeaderInfoItem>
                            <a href="mailto:info@chipstrade.ru">
                                <img src="/static/email-icon.svg" alt="phone icon"></img>
                                info@chipstrade.ru
                            </a>
                        </HeaderInfoItem>
                        <HeaderInfoItem>
                            <div>
                                <img src="/static/point-icon.svg" alt="phone icon"></img>
                                Санкт-Петербург, Невский пр-кт, дом № 151, литера А
                            </div>
                        </HeaderInfoItem>
                    </HeaderInfoTop>

                    <Delimeter />

                    <HeaderInfoBotton>
                        <Nav>
                            {
                                NAV_LINKS.map(({ text, url }) => renderNavLink({ text, url }))
                            }
                        </Nav>
                    </HeaderInfoBotton>

                </HeaderInfoWrapper>


            </ContainerStyled>
        </Header>
    )
}

const ContainerStyled = styled(Container)`
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
`

const Header = styled.header``

const HeaderInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`

const HeaderInfoTop = styled.div`
    margin-bottom: 32px;
    display: flex;
    align-items: center;
`

const HeaderInfoBotton = styled.div`
    padding: 32px 0;
`

const HeaderInfoItem = styled.div`
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grayed};

    a, div {
        display: flex;
        align-items: center;

        img {
            margin-right: 6px;
        }
    }

    margin-left: 32px;
`

const Nav = styled.nav`
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primary};

    a {
        transition: all .2s;
        border-bottom: 1px solid rgba(79,79,79,0);
    }

    a:hover {
        border-bottom: 1px solid rgba(79,79,79,1);
    }

    a + a {
        margin-left: 20px;
    }
`

const Logo = styled.img``

export default AppHeader