import Link from 'next/link'
import styled from 'styled-components'
import { breakpoint } from '../../lib/theme'
import { Container } from '../ui/layouts'

const LINKS = [
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

const AppFooter = () => {
    return (
        <footer>
            <ContainerStyled>
                <LogoWrapper>
                    <a href="/">
                        <img src="/static/icons/logo-footer.svg" alt="Логотип подвала" />
                    </a>
                </LogoWrapper>

                <FooterInfoWrapper>
                    <div>
                        {' '}
                        <FooterInfoItem>
                            <span>
                                <b>Режим работы:</b> пн-пт, с 9:00 до 17:00, обед с 12:00 до 13:00
                            </span>
                        </FooterInfoItem>
                    </div>
                    <div>
                        {' '}
                        <FooterInfoItem>
                            <span>
                                <b>ООО</b> "E-ТИМ"
                            </span>
                        </FooterInfoItem>
                        <FooterInfoItem>
                            <span>
                                <b>ИНН:</b> 7806562061
                            </span>
                        </FooterInfoItem>
                        <FooterInfoItem>
                            <span>
                                <b>ОГРН:</b> 1197847145825
                            </span>
                        </FooterInfoItem>
                    </div>
                    <div>
                        {' '}
                        <FooterInfoItem>
                            <div>
                                <img src="/static/icons/point-icon.svg" alt="phone icon"></img>
                                <span>
                                    Санкт-Петербург,
                                    <br />
                                    муниципальный округ Малая Охта вн.тер.г., Рижская ул., д. 5, корпус 1, помещ. 5-H,
                                    комн. №16,17(оф.407)
                                </span>
                            </div>
                        </FooterInfoItem>
                        <FooterInfoItem>
                            <a href="tel:+7(812)3181983">
                                <img src="/static/icons/phone-icon.svg" alt="phone icon"></img>
                                <span>+7 (812) 318-19-83</span>
                            </a>
                        </FooterInfoItem>
                        <FooterInfoItem>
                            <a href="mailto:info@e-tim.ru">
                                <img src="/static/icons/email-icon.svg" alt="phone icon"></img>
                                <span>info@e-tim.ru</span>
                            </a>
                        </FooterInfoItem>
                    </div>
                </FooterInfoWrapper>

                <FooterLinksWrapper>
                    {LINKS.map(({ text, url }) => (
                        <Link key={url} href={url}>
                            {text}
                        </Link>
                    ))}
                </FooterLinksWrapper>
            </ContainerStyled>
        </footer>
    )
}

const ContainerStyled = styled(Container)`
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 114px 100px;
    background-color: ${({ theme }) => theme.colors.background};
    opacity: 0.9;
    color: ${({ theme }) => theme.colors.light};

    ${breakpoint.laptop`
        padding: 100px 60px;
    `}

    ${breakpoint.tablet`
        padding: 60px 60px;    
        flex-direction: column;

        ::before {
            display: none;
        }
    `}
`

const FooterInfoWrapper = styled.div`
    font-family: ${({ theme }) => theme.fonts.velasansmed};
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    flex-direction: row;

    ${breakpoint.tablet`
        margin-bottom: 20px;
    `}
`

const FooterInfoItem = styled.div`
    margin-bottom: 20px;
    line-height: 22 px;
    a,
    div {
        display: flex;
    }

    span {
        display: block;
        margin-left: 12px;
    }
`

const FooterLinksWrapper = styled.div`
    width: 220px;
    display: flex;
    flex-direction: column;

    a {
        font-family: ${({ theme }) => theme.fonts.velasansmed};
        font-size: 14px;
        line-height: 16px;
    }

    a + a {
        margin-top: 24px;
    }

    ${breakpoint.tablet`
        margin-bottom: 20px;

        a + a {
            margin-top: 10px;
        }
    `}
`

const LogoWrapper = styled.div`
    margin-right: 30px;
    position: relative;
    right: 20px;
    max-width: 150px;
    & a {
        display: flex;
        justify-content: center;
        height: 100%;
        & img {
            width: 100%;
        }
    }

    ${breakpoint.laptop`
        margin-right: 20px;
        width: 70px;
        max-height: 100px; 
    `}

    ${breakpoint.tablet`
        margin-bottom: 20px;
        top: -15px;
    `}
`

export default AppFooter
