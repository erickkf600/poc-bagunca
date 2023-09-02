import { StyleSheet, View } from 'react-native';
import { Card, CardText, CardTitle, Date, Div, IllustrationC, IllustrationText, Span, Weigth } from './list.style';

const List = ({list} :any) => {
  return (
    <View style={{width: '100%', marginTop: 40}}>
      {
        list.map((item: any, i: number) => (
          <Card style={styles.boxShadow} key={i}>
                <IllustrationC>
                    <Date>
                        <IllustrationText>{item?.day}</IllustrationText> 
                        <Span>{item?.month}</Span>
                    </Date>
                </IllustrationC>

                <Div>
                    <CardTitle>{item?.type}</CardTitle>
                    <CardText>Hora da retirada</CardText>
                    <CardText>{item?.time}</CardText>
                </Div>

                <Weigth>{item?.weigth}kg</Weigth>
          </Card>
        ))
      }
  </View>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
      shadowColor: "#0000005d",
      elevation: 3,
    },
});


export default List

