import styled from "styled-components"
import { breakpoint } from "../../lib/theme"
import { MainSection } from "../Common/MainSection"
import { MapComponent } from "../Common/MapComponent"
import { AsideLayout } from "../ui/layouts/AsideLayout"
import { Container } from "../ui/layouts/Container"
import { MainLayout } from "../ui/layouts/MainLayout"
import { H1, H2 } from "../ui/Typography"

const Contacts = () => {
    return (
        <MainLayout>
            <Container>
                <MainSection>
                    <H1>Контакты</H1>
                </MainSection>
            </Container>
            <AsideLayout>
                <H2>КОНТАКТЫ</H2>

                <ContactsWrapper>
                    <ContactBox>
                        <ContactTitle>Ардес</ContactTitle>
                        <ContactContent>Санкт-Петербург, ул. Учительская, д.23, литера «А», помещ. №448</ContactContent>
                    </ContactBox>
                    <ContactBox>
                        <ContactTitle>Телефон:</ContactTitle>
                        <ContactContent as="a" href="tel:+7(921)7472429">+7 (921) 747 24 29</ContactContent>
                    </ContactBox>
                </ContactsWrapper>

                <MapWrapper>
                    <MapComponent />
                </MapWrapper>
            </AsideLayout>
        </MainLayout>
    )
}

const ContactsWrapper = styled.div`
    margin-bottom: 77px;
    display: flex;

    ${breakpoint.laptop`
        flex-direction: column;
    `}
`
const ContactBox = styled.div`
    width: 50%;
    margin-left: 30px;

    ${breakpoint.laptop`
        width: unset;
    `}
`

const ContactTitle = styled.p`
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
`
const ContactContent = styled.p`
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
`

const MapWrapper = styled.div`
    margin-bottom: 250px;
`

export default Contacts