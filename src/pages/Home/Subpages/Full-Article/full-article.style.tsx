import styled from 'styled-components/native'
import CustomIcon from '../../../../shared/components/Icons/CustomIcon';


export const Div = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
export const Author = styled.Text`
    font-family: 'jost-regular';
    font-size: 14px;
    color: #526B78;
`;
export const Title = styled.Text`
    font-family: 'jost-semibold';
    font-size: 30px;
    color: #263238;
    margin-top: 19px;
`;
export const Text = styled.Text`
    font-family: 'jost-regular';
    font-size: 16px;
    color: #263238;
`;

export const I = styled(CustomIcon)`
    color: ${(props: any) => props.favorite ? '#4ED675' : '#BDBDBD'};
    font-size: 25px; 
    position: absolute;
    right: 8.5px;
    bottom: 8.5px;
`;

export const Illustration = styled.Image`
    width: 100%;
    height: 226px;
    margin: 9px 0 39px 0;
`;

