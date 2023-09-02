import styled from 'styled-components/native'

export const BannerLayout = styled.Pressable`
    width: 100%;
    height: 108px;
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
    top: -30px;
    left: -5px;
`;

export const Title = styled.Text`
    font-family: 'jost-semibold';
    font-size: 20px;
    line-height: 20px;
    color: #263238;    
`;
export const Text = styled.Text`
    font-family: 'jost-regular';
    font-size: 14px;
    line-height: 15px;
    color: #263238;    
`;
export const Div = styled.View`
    margin: 15px 0 0 45px;
    max-width: 135px;
    
`;
export const Link = styled.Text`
    color: #4ED675;
    position: absolute;
    right: 15px;
    bottom: 8px;
    
`;


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

export const IllustrationC = styled.View`
    width: 90px;
    height: 88px;
    border-radius: 10px;
    background: #DEF7E5;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Weigth = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
`;

export const IllustrationText = styled.Text`
    color: #4ED675;
    font-family: 'jost-semibold';
    font-size: 25px;
`;
export const Span = styled.Text`
    color: #4ED675;
    font-family: 'jost-semibold';
    font-size: 16px;
    line-height: 16px;
    position: relative;
    top: -2px;
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
