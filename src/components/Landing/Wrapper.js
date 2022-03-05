import styled from 'styled-components';

const WrapperInterface = styled.div`
    margin-right: auto; /* 1 */
    margin-left:  auto; /* 1 */

    max-width: 960px; /* 2 */
    padding-right: 10px; /* 3 */
    padding-left:  10px; /* 3 */
    text-align : center;
    display : flex;
    flex-direction : column;
    align-items : center;
    
`

export const Wrapper = ({children}) => {
    return(
        <WrapperInterface>
            {children}
        </WrapperInterface>
    );

}