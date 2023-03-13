import Link from "next/link"
import { Container } from "styled-bootstrap-grid"
import styled from "styled-components"

const ABOUT_COMPANY_LINKS = [
    {
        text: 'Контакты',
        url: '/contacts'
    },
]

const DELIVERY_LINKS = [
    {
        text: 'Линейка поставок',
        url: '/delivery'
    },
    {
        text: 'Поставка компонентов под разработку',
        url: '/#develop'
    },
    {
        text: 'Поставка компонентов для оптовых покупателей',
        url: '/#bulk'
    }
]

const AppFooter = () => {
    return (
        <footer>
            <ContainerStyled>
                <a href="/">
                    <img src="/static/logo-footer.svg" alt="Логотип подвала" />
                </a>

                <FooterInfoWrapper>
                    <FooterInfoItem>
                        <div>
                            <img src="/static/point-icon.svg" alt="phone icon"></img>
                            <span>Санкт-Петербург,<br /> Невский пр-кт, дом № 151, литера А</span>
                        </div>
                    </FooterInfoItem>
                    <FooterInfoItem>
                        <a href="tel:+7(812)3375359">
                            <img src="/static/phone-icon.svg" alt="phone icon"></img>
                            <span>+7 (812) 337 53 59</span>
                        </a>
                    </FooterInfoItem>
                    <FooterInfoItem>
                        <a href="mailto:info@chipstrade.ru">
                            <img src="/static/email-icon.svg" alt="phone icon"></img>
                            <span>info@chipstrade.ru</span>
                        </a>
                    </FooterInfoItem>
                </FooterInfoWrapper>

                <FooterLinksWrapper>
                    <FooterLinksHeader>О Компании</FooterLinksHeader>
                    {ABOUT_COMPANY_LINKS.map(({ text, url }) => <Link href={url}>{text}</Link>)}
                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    <FooterLinksHeader>Поставки</FooterLinksHeader>
                    {DELIVERY_LINKS.map(({ text, url }) => <Link href={url}>{text}</Link>)}
                </FooterLinksWrapper>


            </ContainerStyled>
        </footer>
    )
}

const ContainerStyled = styled(Container)`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 114px 100px;
    background-color: #545D49;
    color: ${({ theme }) => theme.colors.light};

    ::before {
        content: '';
        background-color: white;
        display: block;
        position: absolute;
        width: 487px;
        height: 38px;
        background: #ffffff;
        transform: skewX(-45deg);
        z-index: 100;
        top: 0px;
        left: -19px;
    }
`

const FooterInfoWrapper = styled.div`
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
`

const FooterInfoItem = styled.div`
    margin-bottom: 20px;

    a, div {
        display: flex;
    }

    span {
        display: block;
        margin-left: 12px;
    }
`

const FooterLinksWrapper = styled.div`
    width: 180px;
    display: flex;
    flex-direction: column;

    a {
        font-family: ${({ theme }) => theme.fonts.roboto};
        font-size: 14px;
        line-height: 16px;
    }

    a + a {
        margin-top: 24px;
    }
`
const FooterLinksHeader = styled.h3`
    margin-bottom: 23px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
`

export default AppFooter