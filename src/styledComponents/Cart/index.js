import styled from 'styled-components'

const CartCountStyled = styled.div`
    background-color: red;
    color: white;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    `

const CartCountWrapper = styled.div`
    position: relative;
    `

export { CartCountStyled, CartCountWrapper};