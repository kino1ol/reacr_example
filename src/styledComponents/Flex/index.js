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
    justify-content: ${({jc}) => jc ? jc : 'center'};
    gap: ${({g}) => {
        return g ? g : 40
    }}px;
    flex-wrap: wrap;
    padding: ${({p}) => {
        return p ? p : 0
    }}px;
    min-height: ${({minH}) => minH ? minH : 'auto'};
`

export default Flex