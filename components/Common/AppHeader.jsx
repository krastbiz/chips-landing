import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { breakpoint } from '../../lib/theme'
import { useDeviceCheck } from '../../lib/utils/hooks/useDeviceCheck'
import { BurgerMenu, BurgerWrapper } from '../ui/buttons/BurgerMenu'
import { ContactItem } from '../pages/ContactsPage/ContactItem'
import { BaseContentContainer, Container } from '../ui/layouts'
import { MobileMenu } from './MobileMenu'

const NAV_LINKS = [
    { text: 'Поставки ЭКБ', url: '/postavki' },
    { text: 'Комплексные ВЭД-решения', url: '/ved' },
    { text: 'Контрактное производство', url: '/contract' },
    { text: 'Контакты', url: '/contacts' },
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

export const RenderNavLink = ({ text, url, onClick, isActive }) => {
    return (
        <StyledNavLink href={url} isActive={isActive} onClick={onClick}>
            {text}
        </StyledNavLink>
    )
}

const AppHeader = () => {
    const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

    const { isMobile, isTablet } = useDeviceCheck()
    const isMobileOrTablet = isMobile || isTablet
    console.log(isMobileOrTablet)
    const { pathname } = useRouter()

    return (
        <Header>
            <ContainerStyled>
                <HeaderContainer>
                    <LogoWrapper>
                        <a href="/">
                            <Logo src="/static/icons/logo.svg" alt="Логотип" />
                        </a>
                    </LogoWrapper>
                    {!isMobileOrTablet && (
                        <>
                            <ContactItem title={CONTACTS.email.title} href={CONTACTS.email.href} />
                            <ContactItem title={CONTACTS.phone.title} href={CONTACTS.phone.href} />
                        </>
                    )}
                </HeaderContainer>
                {!isMobileOrTablet && (
                    <>
                        <HeaderContainer>
                            <IconLink href="https://t.me/GlebSh_SPB" target="_blank">
                                <img src="/static/icons/telegram.svg" alt="telegram" />
                            </IconLink>
                            <IconLink href="https://wa.me/79500362529" target="_blank">
                                <img src="/static/icons/whatsapp.svg" alt="whatsapp" />
                            </IconLink>
                        </HeaderContainer>
                        <BaseContentContainer>
                            <Nav>
                                {NAV_LINKS.map(({ text, url }) => (
                                    <RenderNavLink key={url} text={text} url={url} isActive={pathname === url} />
                                ))}
                            </Nav>
                        </BaseContentContainer>
                    </>
                )}
                {isMobileOrTablet && <BurgerMenu isActive={isMobileMenuActive}  onClick={() => setIsMobileMenuActive((prev) => !prev)} />}
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
        ${breakpoint.mobile`
        margin: 0;
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

const Nav = styled.nav``

const StyledNavLink = styled(Link)`
    transition: all 0.2s;
    color: ${({ theme, isActive }) => (isActive ? theme.colors.active : theme.colors.base)};
    margin-left: 30px;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.active};
    }
`

const Logo = styled.img`
    width: 100%;
`

const IconLink = styled.a`
    margin-left: 10px;
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
