import styled from 'styled-components'

const ButtonStyled = styled.button`
    width: ${({w}) => w ? w : 180}px;
    height:  ${({h}) => h ? h : 40}px;
    border: 0;
    border-radius: 20px;
    color: white;
    background-color: #ac3caca7;
    cursor: pointer;
    &:hover {
        background-color: #683468a7; 
    }
    font-weight: 500;
    font-size: 18px;
    `

export default ButtonStyled;