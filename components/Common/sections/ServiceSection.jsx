import styled from 'styled-components'
import { H1, Text } from '../../ui/Typography'
import { PrimaryButton } from '../../ui/buttons/PrimaryButton'
import { Service, ServiceWithIcon } from './components/Service'
import { SearchComponent } from '../Search'
import { breakpoint } from '../../../lib/theme'

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
                            <div>
                                Оставить заявку <ArrowIcon src="/static/icons/arrow.svg" alt="arrow" />
                            </div>
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
    padding: 100px 32px 80px;
    border-radius: 35px;
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    max-width: 98%;
    margin: 0 auto;
    height: 100vh;
`

const SectionTitle = styled(H1)`
    text-align: center;
`

const AboutContainer = styled.div`
    max-width: 52%;
    min-width: 48%;
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
    ${breakpoint.desktop`
        width: 230px;
        height: 190px;
    `}

    ${breakpoint.tablet`
        width: 230px;
        height: 190px;
    `}

    ${breakpoint.mobile`
    width: 148px;
    height: 135px;
    `}
`

const ArrowIcon = styled.img`
    height: 20px;
    margin-left: 20px;
    margin-top: 5px;
`
