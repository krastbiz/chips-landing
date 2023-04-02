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
    transition: all 0.5s ease-out;
    &:hover { 
    -webkit-box-shadow: 0px 0px 12px 10px rgba(119, 221, 231, 0.3);
    -moz-box-shadow: 0px 0px 12px 10px rgba(119, 221, 231, 0.3);
    box-shadow: 0px 0px 12px 10px rgba(119, 221, 231, 0.3);
    }
`
const CompanyImageWrapper = styled.div`
    img {
        max-width: 90px;
    }
`