import Link from "next/link"
import { useState } from "react"
import styled from "styled-components"
import { breakpoint } from "../../lib/theme"
import { useDeviceCheck } from "../../lib/utils/hooks/useDeviceCheck"
import { BurgerMenu, BurgerWrapper } from "../ui/buttons/BurgerMenu"
import { ContactInfoWrapper, ContactItem } from "../ui/ContactItem"
import { Delimeter } from "../ui/Delimeter"
import { Container } from "../ui/layouts/Container"
import { MobileMenu } from "./MobileMenu"

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

const CONTACTS = {
    phone: {
        title: '+7 (921) 747 24 29',
        image: { url: '/static/icons/phone-icon.svg', alt: 'Иконка телефона' },
        href: 'tel:+7(921)7472429'  
    },
    email: {
        title: 'info@el-etk.ru',
        image: { url: '/static/icons/email-icon.svg', alt: 'Иконка почты' },
        href: 'mailto:info@el-etk.ru',
    },
    address: {
        title: 'Санкт-Петербург, ул. Учительская, д.23, литера «А», помещ. №448',
        image: { url: '/static/icons/point-icon.svg', alt: 'Иконка адреса' },
        href: null,
    }
}

export const renderNavLink = ({ text, url, onClick }) => {
    if (url.startsWith('#')) return <a key={url} href={url} onClick={onClick}>{text}</a>

    return <Link key={url} href={url} onClick={onClick}>{text}</Link>
}

const AppHeader = () => {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

    const { isMobile, isTablet } = useDeviceCheck()
    const isMobileOrTablet = isMobile || isTablet

    const contactsLinks = [CONTACTS.phone, CONTACTS.email, CONTACTS.address]

    return (
        <Header isMobileMenuActive={isMobileMenuActive}>
            <ContainerStyled>

                <LogoWrapper>
                    <a href="/">
                        <Logo src="/static/icons/logo1.png" alt="Логотип"/>
                    </a>
                </LogoWrapper>

                <HeaderInfoWrapper>
                    <HeaderInfoTop>
                        {contactsLinks.map(({ title, href, image}) => (
                            <ContactItem key={href + title} title={title} href={href} image={image}/>
                        ))}
                        <BurgerMenu isActive={isMobileMenuActive} onClick={() => setIsMobileMenuActive((prev) => !prev)}/>
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

            {isMobileOrTablet && <MobileMenu isActive={isMobileMenuActive} onClose={() => setIsMobileMenuActive(false)} links={NAV_LINKS} contacts={CONTACTS}/>}
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

const Header = styled.header`
    position: relative;

    ${({ isMobileMenuActive }) => isMobileMenuActive && `
        height: 100vh;
        display: flex;
        flex-direction: column;
    `}
`

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

    ${BurgerWrapper} {
        display: none
    } 

    ${breakpoint.laptop`
        margin-bottom: 14px;
    `}

    ${breakpoint.tablet`
        margin-bottom: 0;

        ${BurgerWrapper} {
            margin-left: 10px;
            display: flex;
        } 

        ${ContactInfoWrapper}:nth-child(3) {
            display: none;
        }
    `}

    ${breakpoint.mobile`
        ${ContactInfoWrapper}:nth-child(1) {
        margin-left: 0px;
        }
        ${ContactInfoWrapper}:nth-child(2) {
            display: none;
        }
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