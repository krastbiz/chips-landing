import styled from "styled-components"

export const CompanyCard = (props) => {
    return (
        <CompanyCardWrapper>
            <CompanyImageWrapper>
                <img src={props.url} alt={props.alt}/>
            </CompanyImageWrapper>
        </CompanyCardWrapper>
    )
}

export const CompanyCardWrapper = styled.div`
    height: 150px;
    border: 1px solid #C4C4C4;
    display: flex;
    align-items: center;
    justify-content: center;
`
const CompanyImageWrapper = styled.div`
    img {
        max-width: 90px;
    }
`