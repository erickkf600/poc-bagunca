import styled from 'styled-components/native'

export const Div = styled.View`
    background: #fff;
    padding: 20px 35px 5px;
`;
export const UserName = styled.Text`
    font-family: 'jost-semibold';
    font-size: 20px;
    color: #263238;
`;
export const Email = styled.Text`
    font-family: 'jost-regular';
    font-size: 14px;
    color: #263238;
    margin-top: 9px;
`;


export const Button = styled.Pressable`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 15px;
`;
export const ButtonText = styled.Text`
    font-family: 'jost-semibold';
    font-size: 14px;
`;
