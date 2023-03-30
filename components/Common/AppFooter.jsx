import Link from "next/link"
import styled from "styled-components"
import { breakpoint } from "../../lib/theme"
import { Container } from "../ui/layouts/Container"

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
        text: 'Преимущества',
        url: '/#bulk'
    }
]

const AppFooter = () => {
    return (
        <footer>
            <ContainerStyled>
                <LogoWrapper>
                    <a href="/">
                        <img src="/static/icons/logo1.png" alt="Логотип подвала" />
                    </a>
                </LogoWrapper>

                <FooterInfoWrapper>
                    <FooterInfoItem>
                        <div>
                            <img src="/static/icons/point-icon.svg" alt="phone icon"></img>
                            <span>Санкт-Петербург,<br /> ул. Учительская, д.23, литера «А», помещ. №448</span>
                        </div>
                    </FooterInfoItem>
                    <FooterInfoItem>
                        <a href="tel:+7(921)7472429">
                            <img src="/static/icons/phone-icon.svg" alt="phone icon"></img>
                            <span>+7 (921) 747 24 29</span>
                        </a>
                    </FooterInfoItem>
                    <FooterInfoItem>
                        <a href="mailto:info@el-etk.ru">
                            <img src="/static/icons/email-icon.svg" alt="phone icon"></img>
                            <span>info@el-etk.ru</span>
                        </a>
                    </FooterInfoItem>
                </FooterInfoWrapper>

                {/* <FooterLinksWrapper>
                    <FooterLinksHeader>О Компании</FooterLinksHeader>
                    {ABOUT_COMPANY_LINKS.map(({ text, url }) => <Link key={url} href={url}>{text}</Link>)}
                </FooterLinksWrapper> */}

                <FooterLinksWrapper>
                    <FooterLinksHeader>Поставки</FooterLinksHeader>
                    {DELIVERY_LINKS.map(({ text, url }) => <Link key={url} href={url}>{text}</Link>)}
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
    background-color: #545D49;
    color: ${({ theme }) => theme.colors.light};
    // margin-bottom: 30px;

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
    font-family: ${({ theme }) => theme.fonts.roboto};
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    ${breakpoint.tablet`
        margin-bottom: 20px;
    `}
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

    ${breakpoint.tablet`
        margin-bottom: 20px;

        a + a {
            margin-top: 10px;
        }
    `}
`
const FooterLinksHeader = styled.h3`
    margin-bottom: 23px;
    font-family: ${({ theme }) => theme.fonts.montserrat};
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;

    ${breakpoint.tablet`
        margin-bottom: 10px;
    `}
`

const LogoWrapper = styled.div`
    background-color: white;
    img {
        width: 100%;
    }

    ${breakpoint.laptop`
        margin-right: 20px;
        width: 70px;
    `}

    ${breakpoint.tablet`
        margin-bottom: 20px;
    `}

`

export default AppFooter