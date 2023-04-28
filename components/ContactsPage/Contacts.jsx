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
                        <ContactTitle>Адрес:</ContactTitle>
                        <ContactContent>Санкт-Петербург, муниципальный округ Пискаревка вн.тер.г., Руставели ул., д. 13, Литера А, помещ. 22Н, комн. №14(оф.509)</ContactContent>
                        <ContactTitle>Телефон:</ContactTitle>
                        <ContactContent as="a" href="tel:+7(812)4482640">+7 (812) 448-26-40</ContactContent>
                    </ContactBox>
                    <ContactBox>
                        <ContactTitle>Реквизиты:</ContactTitle>
                        <ContactContent>
                            <div><b>Получатель:</b> ООО "Нейтрон-ЭК"</div>
                            <div><b>Номер счета:</b> 40702810000000296020</div>
                            <div>ПАО Банк “АЛЕКСАНДРОВСКИЙ”</div>
                            <div><b>Корреспондентский счет:</b> 30101810000000000755 в Северо-Западном ГУ Банка России</div>
                            <div><b>БИК:</b> 044030755</div>
                        </ContactContent>
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
    margin-bottom: 10px;
    margin-right: 20px;

    ${breakpoint.laptop`
        width: unset;
        margin-right: 0px;
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