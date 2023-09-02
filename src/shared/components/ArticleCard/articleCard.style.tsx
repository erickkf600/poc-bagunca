import styled from 'styled-components/native'
import CustomIcon from '../Icons/CustomIcon';

export const Card = styled.Pressable`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #FFF;  
    border-radius: 10px;
    margin-bottom: 12px;
`;

export const Illustration = styled.Image`
    width: 100px;
    height: 100px;
    object-fit: contain; 
    border-radius: 10px;
    `;
export const Div = styled.View`
    margin-left: 18px;
    position: relative;
`;
export const CardTitle = styled.Text`
    font-size: 14px;
    font-family: 'jost-medium';
    line-height: 20.23px;
    color: #263238;
    
`;
export const CardText = styled.Text`
    font-size: 12px;
    font-family: 'jost-regular';
    line-height: 13px;
    color: #263238;
    max-width: 147px;
    
`;
export const CardAuthor = styled.Text`
    color: #526B78;
    font-family: 'jost-regular';
    font-size: 10px;
    position: relative;
    top: 15px;
`;

export const I = styled(CustomIcon)`
    color: ${(props: any) => props.favorite ? '#4ED675' : '#BDBDBD'};
    font-size: 20px; 
    position: absolute;
    right: 8.5px;
    bottom: 8.5px;
`;





