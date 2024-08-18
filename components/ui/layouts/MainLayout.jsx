import styled from 'styled-components'
import AppFooter from '../../Common/AppFooter'
import AppHeader from '../../Common/AppHeader'
import { FloatContactDialog } from '../../Common/Fragments/FloatContactDialog'

export const MainLayout = ({ children }) => {
    return (
        <MainLayoutWrapper>
            <AppHeader />
            <main>{children}</main>
            <AppFooter />
            <FloatContactDialog />
        </MainLayoutWrapper>
    )
}

const MainLayoutWrapper = styled.div``
