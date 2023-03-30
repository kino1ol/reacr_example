import styled from 'styled-components'

const PopupStyled = styled.div`
    position: fixed;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    width: 300px;
    border-radius: 20px;
    background-color: #fffdcc;
    padding: 15px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`

const CrossImg = styled.img`
    float: right;
    cursor: pointer;
    transition: all 200ms;
    &:hover {
        transform: scale(0.8);
    }
`

export { PopupStyled, CrossImg }