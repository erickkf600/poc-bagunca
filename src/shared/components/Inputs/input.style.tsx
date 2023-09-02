import styled from 'styled-components/native';


export const InputControl = styled.View`
    margin-top: 5px;
    position: relative;
`;
export const Label = styled.Text`
    font-size: 14px;
    letter-spacing: 1.2px;
    color: #000;
    font-family: 'jost-regular';
    margin-bottom: 5px;
`;
export const Input = styled.TextInput`
    background: #fff;
    border: 2px;
    border-radius: 10px;
    height: 48px;
    border-color: #92E3A9;
    padding: 0 15px;
`;

export const Error = styled.Text`
   font-size: 10px;
   font-weight: bold;
   color: #f00;
`;


export const EyeButton = styled.TouchableOpacity`
    position: absolute;
    flex: 1;
    height: 40px;
    top: 29px;
    bottom: 0;
    right: 7px;
    padding: 0 7px 0 9px;
    justify-content: center;
    align-items: center;
    background: #fff;
`;