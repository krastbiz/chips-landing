import styled from 'styled-components'
import AppHeader from '../../Common/AppHeader'

export const MainLayout = ({ children }) => {
    return (
        <MainLayoutWrapper>
            <AppHeader />
            <main>{children}</main>
        </MainLayoutWrapper>
    )
}

const MainLayoutWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
`
