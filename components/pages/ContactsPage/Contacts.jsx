import styled from 'styled-components'
import { breakpoint } from '../../../lib/theme'
import { MapComponent } from '../../Common/MapComponent'
import { AsideLayout, Container, MainLayout, MainSection } from '../../ui/layouts'
import { H1 } from '../../ui/Typography'
import { AppFooter } from '../../Common/AppFooter'

const Contacts = () => {
    return (
        <MainLayout>
            <Container>
                <MainSection>
                    <H1>Контакты</H1>
                </MainSection>
            </Container>
            <AsideLayout>
                <ContactsWrapper>
                    <ContactBox>
                    <ContactTitle>Телефон:</ContactTitle>
                        <ContactContent as="a" href="tel:+7(812)3181983">
                            +7 (812) 318-19-83
                        </ContactContent>
                        <ContactTitle>Почта:</ContactTitle>
                        <ContactContent as="a" href="mailto:info@e-tim.ru">
                            info@e-tim.ru
                        </ContactContent>
                        <ContactTitleAddress>Адрес:</ContactTitleAddress>
                        <ContactContent>
                            Санкт-Петербург, муниципальный округ Малая Охта вн.тер.г., Рижская ул., д. 5, корпус 1,
                            помещ. 5-H, комн. №16,17(оф.407)
                        </ContactContent>
                    </ContactBox>
                    <ContactBox>
                        <ContactContent>
                            <div>
                                <b>ООО "Е-ТИМ"</b> 
                            </div>
                            <div>
                                <b>ИНН:</b> 7806562061
                            </div>
                            <div>
                                <b>ОГРН:</b> 1197847145825
                            </div>
                            <ContactTitleWork>Режим работы: пн-пт, с 9:00 до 17:00, обед с 12:00 до 13:00</ContactTitleWork>
                        </ContactContent>
                    </ContactBox>
                </ContactsWrapper>

                <MapWrapper>
                    <MapComponent />
                </MapWrapper>
            </AsideLayout>
            <AppFooter />
        </MainLayout>
    )
}

const ContactsWrapper = styled.div`
    margin-bottom: 77px;
    display: flex;
    color: ${({ theme }) => theme.colors.base};

    ${breakpoint.laptop`
        flex-direction: column;
    `}
`
const ContactBox = styled.div`
    width: 50%;
    margin: 20px 20px 10px 0px;

    ${breakpoint.laptop`
        width: unset;
        margin-right: 0px;
    `}
`

const ContactTitle = styled.p`
    font-family: ${({ theme }) => theme.fonts.velasansmed};
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
`
const ContactTitleAddress = styled(ContactTitle)`
    margin-top: 30px;
`
const ContactTitleWork = styled(ContactTitle)`
    margin-top: 60px;
    ${breakpoint.mobile`
    margin-top: 30px;
    `}
`
const ContactContent = styled.p`
    font-family: ${({ theme }) => theme.fonts.velasansmed};
    font-weight: 300;
    font-size: 18px;
    line-height: 30px;
`

const MapWrapper = styled.div`
    margin-bottom: 150px;
`

const Icon = styled.img`
    margin-left: 10px;
`

export default Contacts
