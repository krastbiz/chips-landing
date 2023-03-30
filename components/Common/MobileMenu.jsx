import { useEffect } from "react"
import styled from "styled-components"
import { BurgerMenu } from "../ui/buttons/BurgerMenu"
import { ContactInfoWrapper, ContactItem } from "../ui/ContactItem"
import { Delimeter } from "../ui/Delimeter"
import { Container } from "../ui/layouts/Container"
import { renderNavLink } from "./AppHeader"

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
                <BurgerMenu isActive={true} onClick={() => onClose()}/>
            </MobileBurgerContainer>
            <Container>
                {links.map(link => (renderNavLink({ text: link.text, url: link.url, onClick: onClose })))}
            </Container>
            <Delimeter right width={'80%'}/>
            <MobileContactsContainer>
                <ContactItem title={contacts.phone.title} image={contacts.phone.image} href={contacts.phone.href} />
                <ContactItem title={contacts.email.title} image={contacts.email.image} href={contacts.email.href} />
            </MobileContactsContainer>
        </MobileMenuWrapper>
    )
}

const MobileMenuWrapper = styled.div`
    display: ${({ isActive }) => isActive ? 'block' : 'none'};
    padding-top: 40px;
    padding-bottom: 30px;
    background: white;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    z-index: 1000;
    transition: all 0.3s ease-out;

    a {
        display: block;
        font-family: ${({ theme }) => theme.fonts.montserrat};
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 50px;
        &:hover {
            color: #ABA2B6;
        }
    }
`

const MobileBurgerContainer = styled(Container)`
    display: flex;
    justify-content: end;
`

const MobileContactsContainer = styled(Container)`
    margin-top: 50px;
    display: flex;

    ${ContactInfoWrapper} {
        margin-left: 0;
        margin-right: 12px;

        a {
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: 500;
            margin-bottom: 0;
            text-transform: unset;
        }
    }
`