import styled from "styled-components"
import AppFooter from "../../Common/AppFooter"
import AppHeader from "../../Common/AppHeader"

export const MainLayout = ({ children }) => {
    return (
        <MainLayoutWrapper>
            <AppHeader />
            <main>{children}</main>
            <AppFooter />
        </MainLayoutWrapper>
    )
}

const MainLayoutWrapper = styled.div``