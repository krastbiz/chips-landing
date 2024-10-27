import styled from 'styled-components'
import { H1, Text } from '../../ui/Typography'
import { PrimaryButton } from '../../ui/buttons/PrimaryButton'
import { Service, ServiceWithIcon } from './components/Service'
import { SearchComponent } from '../Search'

export const ServiceSection = ({ title, description, services, servicesWithIcon, onClick }) => {
    return (
        <ServicesWrapper id="services">
            <DescriptionWrapper>
                <AboutContainer>
                    <SearchComponent isHomePage />
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
                <ServicesContainer>
                    <SectionTitle>{title}</SectionTitle>
                    <SupplyText>{description}</SupplyText>
                    <ServicesContainerRow>
                        <ContactButton as="a" onClick={onClick}>
                            <div>Оставить заявку <ArrowIcon src="/static/icons/arrow.svg" alt="arrow" /></div>
                        </ContactButton>
                        {services.map((service, index) => (
                            <Service key={index} title={service.title} content={service.content} />
                        ))}
                    </ServicesContainerRow>
                </ServicesContainer>
            </DescriptionWrapper>
        </ServicesWrapper>
    )
}

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
`

const ServicesWrapper = styled.section`
    background: url('/static/images/main-bg.jpeg') center no-repeat;
    background-size: cover;
    padding: 110px 32px;
    border-radius: 35px;
    display: flex;
    flex-direction: row;
    max-width: 98%;
    margin: 0 auto;
`

const SectionTitle = styled(H1)`
    text-align: center;
`

const AboutContainer = styled.div`
    max-width: 52%;
    padding-right: 30px;
`

const SupplyText = styled(Text)`
    margin-bottom: 40px;
`

const PurchasesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
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
    width: 325px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ArrowIcon = styled.img`
    height: 20px;
    margin-left: 20px;
    margin-top: 5px;
`
