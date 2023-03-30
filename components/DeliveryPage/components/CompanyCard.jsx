import styled from "styled-components"
import { breakpoint } from "../../../lib/theme"

export const CompanyCard = (props) => {
    return (
        <CompanyCardWrapper>
            <CompanyTextWrapper>{props.text}</CompanyTextWrapper>
            <CompanyImageWrapper>
                <img src={props.url} alt={props.alt}/>
            </CompanyImageWrapper>
        </CompanyCardWrapper>
    )
}

export const CompanyCardWrapper = styled.div`
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    -webkit-box-shadow: 0px 0px 12px 4px rgba(0, 215, 159, 0.2);
    -moz-box-shadow: 0px 0px 12px 4px rgba(0, 215, 159, 0.2);
    box-shadow: 0px 0px 12px 4px rgba(0, 215, 159, 0.2);
    ${breakpoint.mobile`
        flex-direction: column;
    `}
`

export const CompanyTextWrapper = styled.div`
    max-width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    font-family: ${({ theme }) => theme.fonts.roboto};
    ${breakpoint.mobile`
    max-width: 100%;
`}
`

const CompanyImageWrapper = styled.div`
   
    img {
        max-width: 90px;
    }
    ${breakpoint.mobile`
    margin: 20px 0px;
`}
`