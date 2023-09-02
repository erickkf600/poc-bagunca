import styled from 'styled-components/native'
import CustomIcon from '../Icons/CustomIcon';

export const Tab = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    padding: 0 15px;
    background: #FFF;  
    justify-items: center;
`;

export const Item = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
export const I = styled(CustomIcon)`
    color: ${(props: any) => props.active ? '#4ED675' : '#d4d4d4'};
    font-size: 20px;   
`;

export const Name = styled.Text<any>`
    font-size: 10px;
    font-weight: 400;
    line-height: 14.63px;
    margin-top: 5px;
    color: ${(props: any) => props.active ? '#4ED675' : '#d4d4d4'};
`;
