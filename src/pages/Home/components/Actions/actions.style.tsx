import styled from 'styled-components/native'

export const Container = styled.View` 
    position: relative;
    display: flex;
    flex-direction: row;
    margin-top: 23px;
    margin-bottom: 35px;
`;

export const Card = styled.Pressable`
    width: 160px;
    height: 150px;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const CardText = styled.Text`
    margin-top: 14px;
    font-family: 'jost-regular';
    font-size: 17px;
`;
