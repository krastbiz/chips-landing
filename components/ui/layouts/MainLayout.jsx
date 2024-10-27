import styled from 'styled-components'
import AppHeader from '../../Common/AppHeader'
import AppFooter from '../../Common/AppFooter'

export const MainLayout = ({ children }) => {
    return (
        <MainLayoutWrapper>
            <AppHeader />
            <main>{children}</main>
            {/* <AppFooter /> */}
        </MainLayoutWrapper>
    )
}

const MainLayoutWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
`
