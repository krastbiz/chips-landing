import Link from "next/link"
import styled from "styled-components"
import { breakpoint } from "../../lib/theme"
import { Delimeter } from "../ui/Delimeter"
import { Container } from "../ui/layouts/Container"

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
        if (url.startsWith('#')) return <a key={url} href={url}>{text}</a>

        return <Link key={url} href={url}>{text}</Link>
    }

    return (
        <Header>
            <ContainerStyled>

                <LogoWrapper>
                    <a href="/">
                        <Logo src="/static/logo.svg" alt="Логотип"/>
                    </a>
                </LogoWrapper>

                <HeaderInfoWrapper>
                    <HeaderInfoTop>
                        <PhoneItem>
                            <a href="tel:+7(812)3375359">
                                <img src="/static/phone-icon.svg" alt="phone icon"></img>
                                +7 (812) 337 53 59
                            </a>
                        </PhoneItem>
                        <EmailItem>
                            <a href="mailto:info@chipstrade.ru">
                                <img src="/static/email-icon.svg" alt="phone icon"></img>
                                info@chipstrade.ru
                            </a>
                        </EmailItem>
                        <AddressItem>
                            <div>
                                <img src="/static/point-icon.svg" alt="phone icon"></img>
                                Санкт-Петербург, Невский пр-кт, дом № 151, литера А
                            </div>
                        </AddressItem>
                    </HeaderInfoTop>

                    <Delimeter />

                    <HeaderInfoBottom>
                        <Nav>
                            {
                                NAV_LINKS.map(({ text, url }) => renderNavLink({ text, url }))
                            }
                        </Nav>
                    </HeaderInfoBottom>

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

    ${breakpoint.tablet`
        padding-top: 10px;
        padding-bottom: 10px;
    `}
`

const Header = styled.header``

const HeaderInfoBottom = styled.div`
    padding: 32px 0;

    ${breakpoint.laptop`
        padding: 14px 0;
    `}
`

const HeaderInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    ${breakpoint.tablet`
        justify-content: center;

        ${Delimeter} {
            display: none;
        }

        ${HeaderInfoBottom} {
            display: none;
        }
    `}
`

const HeaderInfoTop = styled.div`
    margin-bottom: 32px;
    display: flex;
    align-items: center;

    ${breakpoint.laptop`
        margin-bottom: 14px;
    `}

    ${breakpoint.tablet`
        margin-bottom: 0;
    `}
`



const HeaderInfoItem = styled.div`
    margin-left: 32px;
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

    ${breakpoint.laptop`
        margin-left: 24px;
        font-size: 12px;
    `}

`

const PhoneItem = styled(HeaderInfoItem)``
const EmailItem = styled(HeaderInfoItem)`
    ${breakpoint.mobile`
        display: none;
    `}
`
const AddressItem = styled(HeaderInfoItem)`
    ${breakpoint.tablet`
        display: none;
    `}
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

const Logo = styled.img`
    width: 100%;
`

const LogoWrapper = styled.div`

    ${breakpoint.laptop`
        width: 70px;
    `}

    ${breakpoint.tablet`
        width: 50px;
    `}
`

export default AppHeader