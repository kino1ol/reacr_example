import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    flex-direction: ${({fd}) => {
        switch (fd) {
            case 'cl':
                return 'column'
            default: 
                return fd
        }
    }};
    align-items: center;
    justify-content: center;
    gap: 40px;
`

export default Flex