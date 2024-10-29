import { useEffect } from 'react'
import styled from 'styled-components'
import { BurgerMenu } from '../ui/buttons/BurgerMenu'
import { ContactInfoWrapper, ContactItem } from '../pages/ContactsPage/ContactItem'
import { Delimeter } from '../ui/Delimeter'
import { Container, BaseContentContainer } from '../ui/layouts'
import { RenderNavLink } from './AppHeader'

export const MobileMenu = (props) => {
    const { isActive, onClose, links, contacts } = props

    useEffect(() => {
        const prevOverflow = document.body.style.overflow

        if (isActive) document.body.style.overflow = 'hidden'
        else document.body.style.overflow = prevOverflow

        return () => {
            document.body.style.overflow = prevOverflow
        }
    }, [isActive])

    return (
        <MobileMenuWrapper isActive={isActive}>
            <MobileBurgerContainer>
                <BurgerMenu isActive={true} onClick={() => onClose()} />
            </MobileBurgerContainer>
            <Container>
                {links.map(({ text, url }) => (
                    <RenderNavLink key={text} text={text} url={url} onClose={onClose} />
                ))}
            </Container>
            <Delimeter right width={'80%'} />
            <MobileContactsContainer>
                <ContactItem title={contacts.phone.title} image={contacts.phone.image} href={contacts.phone.href} />
                <ContactItem title={contacts.email.title} image={contacts.email.image} href={contacts.email.href} />
                <HeaderContainer>
                            <IconLink href="https://t.me/GlebSh_SPB" target="_blank">
                                <Icon src="/static/icons/telegram-m.svg" alt="telegram" />
                            </IconLink>
                            <IconLink href="https://wa.me/79500362529" target="_blank">
                                <Icon src="/static/icons/whatsapp-m.svg" alt="whatsapp" />
                            </IconLink>
                        </HeaderContainer>
            </MobileContactsContainer>
        </MobileMenuWrapper>
    )
}

const MobileMenuWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 10px;
    padding-bottom: 30px;
    background: ${({ theme }) => theme.colors.base};
    z-index: 1000;
    transform: ${({ isActive }) => (isActive ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;

    a {
        display: block;
        font-family: ${({ theme }) => theme.fonts.montserrat};
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 50px;
    }
`;

const HeaderContainer = styled(BaseContentContainer)`
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.base};
    margin-top: 10px;
`

const MobileBurgerContainer = styled(Container)`
    display: flex;
    justify-content: end;
`

const MobileContactsContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    ${ContactInfoWrapper} {
        margin-left: 0;
        margin-right: 12px;

        a {
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: 500;
            margin-bottom: 15px;
            text-transform: unset;
            margin-left: 30px;
        }
    }
`
const IconLink = styled.a`
`

const Icon = styled.img`
    height: 45px;
    width: 45px;
`
