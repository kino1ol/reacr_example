import styled from 'styled-components'

const ContainerStyled = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    @media (max-width: 1200px) {
        max-width: 885px;
    }
    @media (max-width: 900px) {
        max-width: 685px;
    }
    @media (max-width: 700px) {
        max-width: 555px;
    }
    @media (max-width: 567px) {
        padding: 0 15px;
    }
    `

export default ContainerStyled;