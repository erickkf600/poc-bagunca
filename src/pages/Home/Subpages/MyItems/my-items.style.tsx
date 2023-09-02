import styled from 'styled-components/native'

export const Card = styled.View`
    width: 100%;
    height: 88px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #FFF;  
    border-radius: 10px;
    margin-bottom: 12px;
    position: relative;
`;

export const Illustration = styled.View`
    width: 90px;
    height: 88px;
    border-radius: 10px;
    background: #DEF7E5;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const Div = styled.View`
    margin-left: 18px;
    position: relative;
`;
export const CardTitle = styled.Text`
    font-size: 14px;
    font-family: 'jost-medium';
    line-height: 20.23px;
    margin-bottom: 9px;
    color: #263238;
    
`;
export const CardText = styled.Text`
    font-size: 12px;
    font-family: 'jost-regular';
    line-height: 13px;
    color: #263238;
    max-width: 147px;
`;
export const Weigth = styled.Text`
    font-size: 14px; 
    position: absolute;
    font-family: 'jost-semibold';
    right: 11px;
    bottom: 11px;
    color: #4ED675;
`;








