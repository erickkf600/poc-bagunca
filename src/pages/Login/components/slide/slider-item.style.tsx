
import styled from 'styled-components/native'



export const Container = styled.View`
    padding: 0 40px;
    align-items: center;
    margin-top: 70px;
`;

export const Texts = styled.View`
    margin-top: 38px;
`;
export const Illustration = styled.Image`
    width: 100%;
    height: 300px;
    object-fit: contain;  
`
export const Navigation = styled.View`
    position: absolute;
    bottom: 0;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
`
export const Dot = styled.View`
    width: 10px;
    height: 10px;
    background: #DEF7E5;
    border-radius: 6px;
    margin: 0 4px;
`