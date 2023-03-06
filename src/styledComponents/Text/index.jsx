import styled from 'styled-components'

const Text = styled.p`
    font-size: ${(props) => props.fs}rem;
    color: ${({ cl }) => cl};
`

export default Text