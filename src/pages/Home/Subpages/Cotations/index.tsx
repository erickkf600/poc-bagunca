import { StyleSheet, View, FlatList } from "react-native";
import CustomIcon from "../../../../shared/components/Icons/CustomIcon";
import { Container, Card, CardText, CardValue } from './cotations.style';


const itemData = [
  {
    icon: "metal",
    value: "R$ 0.10 - 1.00",
    title: "Metal"
  },
  {
    icon: "plastico",
    value: "R$ 0.05 - 0.50",
    title: "Plástico"
  },
  {
    icon: "vidro",
    value: "R$ 0.10 - 0.50",
    title: "Vidro"
  },
  {
    icon: "roll-paper",
    value: "R$ 0.02 - 0.10",
    title: "Papel"
  },
  {
    icon: "card-paper",
    value: "R$ 0.04 - 0.50",
    title: "Papelão"
  },
  {
    icon: "eletronics",
    value: "R$ 0.10 - 5.00",
    title: "Eletrônicos"
  },
]
const Cotations = ({route}: any) => {
 const data: any = route?.params 

  return (
    <View style={styles.page}>
        <View style={styles.container}>
        <Container>
        <FlatList
          data={ itemData }
          columnWrapperStyle={{justifyContent: 'space-between'}}
          renderItem={ ({item}) =>
            <Card style={styles.boxShadow}>
              <CustomIcon
                  style={{fontSize: 60, color: '#0F1729'}}
                  name={item.icon}
              />
              <CardText>{item.title}</CardText>
              <CardValue>{item.value}</CardValue>
            </Card>
            }
          numColumns={2}
          />
          {/* {
            itemData.map((item: any, i: number) =>(
              <View key={i}>
              <Card style={styles.boxShadow}>
                <CustomIcon
                    style={{fontSize: 60, color: '#0F1729'}}
                    name={item.icon}
                />
                <CardText>{item.title}</CardText>
                <CardValue>{item.value}</CardValue>
              </Card>
              </View>
            ))
          } */}

        </Container>
            
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
    page: {
      backgroundColor: '#fafafa',
      minHeight: '100%'
    },
    container: {
        paddingHorizontal: 25,
    },
    boxShadow: {
      shadowColor: "#0000005d",
      elevation: 3,
    },
  });
  


export default Cotations

