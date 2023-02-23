import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkStyled = styled(NavLink)`
    font-size: 1.25rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #fff;
    font-weight: 600;
    transition: 200ms;
    &:hover {
        color: #000;
        font-weight: 900;
    }
`

export default NavLinkStyled;