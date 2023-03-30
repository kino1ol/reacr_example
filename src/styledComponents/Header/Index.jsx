import styled from 'styled-components';

const HeaderStyled = styled.header`
    position: sticky;
    top: 0;
    transition: 1s;
    background-color: ${({color}) => color};
`

export default HeaderStyled;