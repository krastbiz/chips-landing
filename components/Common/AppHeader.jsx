import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import { breakpoint } from '../../lib/theme'
import { useDeviceCheck } from '../../lib/utils/hooks/useDeviceCheck'
import { BurgerMenu, BurgerWrapper } from '../ui/buttons/BurgerMenu'
import { ContactInfoWrapper, ContactItem } from '../ui/ContactItem'
import { BaseContentContainer, Container } from '../ui/layouts'
import { MobileMenu } from './MobileMenu'

const NAV_LINKS = [
    {
        text: 'Поставки ЭКБ',
        url: '/postavki',
    },
    {
        text: 'Комплексные ВЭД-решения',
        url: '/ved',
    },
    {
        text: 'Контрактное производство',
        url: '/contract',
    },
    {
        text: 'Контакты',
        url: '/contacts',
    },
]

const CONTACTS = {
    phone: {
        title: '+7 (812) 318-19-83',
        href: 'tel:+7(812)3181983',
    },
    email: {
        title: 'info@e-tim.ru',
        href: 'mailto:info@e-tim.ru',
    },
}

export const renderNavLink = ({ text, url, onClick }) => {
    return (
        <Link key={url} href={url} onClick={onClick}>
            {text}
        </Link>
    )
}

const AppHeader = () => {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

    const { isMobile, isTablet } = useDeviceCheck()
    const isMobileOrTablet = isMobile || isTablet

    return (
        <Header isMobileMenuActive={isMobileMenuActive}>
            <ContainerStyled>
                <HeaderContainer>
                    <LogoWrapper>
                        <a href="/">
                            <Logo src="/static/icons/logo.svg" alt="Логотип" />
                        </a>
                    </LogoWrapper>
                    <ContactItem title={CONTACTS.email.title} href={CONTACTS.email.href} />
                    <ContactItem title={CONTACTS.phone.title} href={CONTACTS.phone.href}></ContactItem>
                    {/* <BurgerMenu
                            isActive={isMobileMenuActive}
                            onClick={() => setIsMobileMenuActive((prev) => !prev)}
                        /> */}
                </HeaderContainer>

                <BaseContentContainer>
                    <Nav>{NAV_LINKS.map(({ text, url }) => renderNavLink({ text, url }))}</Nav>
                </BaseContentContainer>
            </ContainerStyled>

            {isMobileOrTablet && (
                <MobileMenu
                    isActive={isMobileMenuActive}
                    onClose={() => setIsMobileMenuActive(false)}
                    links={NAV_LINKS}
                    contacts={CONTACTS}
                />
            )}
        </Header>
    )
}

const Header = styled.header`
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: ${({ theme }) => theme.colors.background};
    opacity: 0.92;
    ${breakpoint.desktop`
        margin: 0 20px;
    `}

    ${({ isMobileMenuActive }) =>
        isMobileMenuActive &&
        `
        height: 100vh;
        display: flex;
        flex-direction: column;
    `}
`

const ContainerStyled = styled(Container)`
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;

    ${breakpoint.tablet`
        padding-top: 10px;
        padding-bottom: 10px;
    `}
`

const HeaderContainer = styled(BaseContentContainer)`
    height: 45px;
    background-color: ${({ theme }) => theme.colors.background};
    flex-direction: row;
`

const Nav = styled.nav`
    a {
        transition: all 0.2s;
    }

    a:hover,
    a:active {
        color: ${({ theme }) => theme.colors.active};
    }

    a + a {
        margin-left: 30px;
    }
`

const Logo = styled.img`
    width: 100%;
`

const LogoWrapper = styled.div`
    max-width: 55px;

    ${breakpoint.laptop`
        width: 55px;
    `}

    ${breakpoint.tablet`
        width: 50px;
    `}
`

export default AppHeader
