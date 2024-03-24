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
                        <img src="/static/icons/logo-footer.svg" alt="Логотип подвала" />
                    </a>
                </LogoWrapper>

                <FooterInfoWrapper>
                    <FooterInfoItem>
                        <div>
                            <img src="/static/icons/point-icon.svg" alt="phone icon"></img>
                            <span>Санкт-Петербург,<br />пр-кт Лермонтовский, дом 43/1, литера А, помещение № 21-Н, комната 154-156 (ОФИС 2071)</span>
                        </div>
                    </FooterInfoItem>
                    <FooterInfoItem>
                        <a href="tel:+7(812)4560156">
                            <img src="/static/icons/phone-icon.svg" alt="phone icon"></img>
                            <span>+7 (812)  456-01-56</span>
                        </a>
                    </FooterInfoItem>
                    <FooterInfoItem>
                        <a href="mailto:spb@windec.ru">
                            <img src="/static/icons/email-icon.svg" alt="phone icon"></img>
                            <span>spb@windec.ru</span>
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
    background: rgb(190,95,165);
    background: linear-gradient(155deg, rgba(190,95,165,1) 0%, rgba(132,94,169,1) 60%, rgba(57,195,206,1) 100%);
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
    line-height: 22 px;
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
    border-radius: 10px;
    margin-right: 30px;
    position: relative;
    right: 20px;
    & a {
        display: flex;
        aligh-items: center;
        justify-content: center;
        height: 100%;
        &  img {
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