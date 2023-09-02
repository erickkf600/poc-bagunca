import styled from 'styled-components/native'

export const BannerLayout = styled.View`
    width: 100%;
    height: 152px;
    background: #DEF7E5;   
    border-radius: 10px; 
    position: relative;
    display: flex;
    flex-direction: row;

`;

export const Illustration = styled.Image`
    width: 144px;
    height: 159px;
    object-fit: contain; 
    position: relative;
    top: -15px;
`;

export const Title = styled.Text`
    font-family: 'jost-semibold';
    font-size: 20px;
    line-height: 20px;
    color: #263238;    
`;
export const Text = styled.Text`
    margin-top: 14px;
    font-family: 'jost-regular';
    font-size: 14px;
    line-height: 15px;
    color: #263238;    
`;
export const Div = styled.View`
    margin: 30px 0 0 45px;
    max-width: 135px;
    
`;