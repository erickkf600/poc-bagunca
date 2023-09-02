import { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import ActionSheet from "react-native-actions-sheet";
import { getMyItems } from "../../../../service/http";
import CustomIcon from "../../../../shared/components/Icons/CustomIcon";
import AddItemForm from "../../components/AddItemForm";
import { Card, Illustration, Div, CardTitle, CardText, Weigth } from "./my-items.style";
const MyItems = ({navigation}: any) => {
  const [itemsList, setItemsList] = useState([]);
  const actionSheetAdd = useRef<any>(null);
  useEffect(() => {
    listItems()

    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => actionSheetAdd.current?.show()}>
          <CustomIcon
            style={{fontSize: 20, color: '#0F1729'}}
            name="add"
          />
        </Pressable>
      ),
    })
}, [])
  const listItems = async () => {
    await getMyItems()
    .then((res: any) => {
      setItemsList(res)
    })
    .catch(err => {
        console.error(err)
    })
  }

  return (
    <View style={styles.page}>
        <View style={styles.container}>
            
          {itemsList.map((el: any, i: number) => (
            <View key={i}>
              <Card style={styles.boxShadow}>
                <Illustration>
                  <CustomIcon
                      style={{fontSize: 60, color: '#4ED675'}}
                      name={el.icon}
                  />
                </Illustration>

                <Div>
                  <CardTitle>{el.type}</CardTitle>
                  <CardText>Última atualização</CardText>
                  <CardText>{el.last_update}</CardText>
                </Div>

                <Weigth>{el.weight}kg</Weigth>
              </Card>
            </View>
          ))}
        
        </View>

        <ActionSheet ref={actionSheetAdd} gestureEnabled={true} headerAlwaysVisible={true}>
        <View style={{height: 350}}>
          <AddItemForm />
        </View>
      </ActionSheet>
    </View>
  );
}

const styles = StyleSheet.create({
    page: {
      backgroundColor: '#fafafa',
      minHeight: '100%',
      position: 'relative'
    },
    container: {
        paddingHorizontal: 25,
        marginTop: 28
    },
    boxShadow: {
      shadowColor: "#0000005d",
      elevation: 3,
    },
  });
  

  

export default MyItems

