import styled from 'styled-components'
import { H1, Text } from '../../../ui/Typography'
import { PrimaryButton } from '../../../ui/buttons/PrimaryButton'
import { Service, ServiceWithIcon } from '../components/Service'
import { SearchComponent } from '../../Search'

export const ServiceSectionTop = ({ title, description, services, onClick }) => {
    return (
        <ServicesWrapper id="services">
            <DescriptionWrapper>
                <SearchComponent isHomePage />
                <SectionTitle>{title}</SectionTitle>
                <SupplyText>{description}</SupplyText>
                <ServicesContainerRow>
                    <ContactButton as="a" onClick={onClick}>
                        <div>Оставить заявку</div>
                    </ContactButton>
                    {services.map((service, index) => (
                        <Service key={index} title={service.title} content={service.content} />
                    ))}
                </ServicesContainerRow>
            </DescriptionWrapper>
        </ServicesWrapper>
    )
}

export const ServiceSectionBottom = ({ servicesWithIcon }) => {
    return (
        <ServicesWrapper id="services">
            <AboutContainer>
                {servicesWithIcon && (
                    <PurchasesContainer>
                        {servicesWithIcon.map((service, index) => (
                            <ServiceWithIcon
                                key={index}
                                title={service.title}
                                content={service.content}
                                icon={service.icon}
                            />
                        ))}
                    </PurchasesContainer>
                )}
            </AboutContainer>
        </ServicesWrapper>
    )
}

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
`

const ServicesWrapper = styled.section`
    background: url('/static/images/main-bg.jpeg') center no-repeat;
    background-size: cover;
    padding: 0 8px;
    border-radius: 35px;
    display: flex;
    flex-direction: row;
    margin: 0;
`

const SectionTitle = styled(H1)`
    text-align: center;
`

const AboutContainer = styled.div`
    max-width: 52%;
    padding-right: 30px;
`

const SupplyText = styled(Text)`
    margin-bottom: 10px;
`

const PurchasesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    justify-content: space-between;
    position: relative;
`

const ServicesContainer = styled.div`
    max-width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const ServicesContainerRow = styled(ServicesContainer)`
    max-width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
`

const ContactButton = styled(PrimaryButton)`
    width: 148px;
    height: 129px;
    display: flex;
    justify-content: center;
    align-items: center;
`
