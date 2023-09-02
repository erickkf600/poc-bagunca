import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomIcon from '../../../../shared/components/Icons/CustomIcon';
import { Card, Illustration, UserName, Div, 
    CardTitle, CardText, 
    IllustrationText, 
    Weigth, 
    Span, 
    CardUser, 
    CardUserHead,
    List,
    ListItemStrong,
    ListItem } from './account-detail';

const AccountDetail = ({navigation}: any) => {  
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
      const value: any = await AsyncStorage.getItem('@user')
      const object = JSON.parse(value)
      navigation.setOptions({
        headerTitle: () => (
          <UserName>{object?.name}</UserName>
        ),
      })
    }
  return (
    <>
      <View style={styles.page}>
      <View style={styles.container}>
        <Card style={styles.boxShadow}>
            <Illustration>
                <Weigth>
                    <IllustrationText>20</IllustrationText> 
                    <Span>kg</Span>
                </Weigth>
            </Illustration>

            <Div>
                <CardTitle>Materiais reciclados</CardTitle>
                <CardText>Última reciclagem</CardText>
                <CardText>10/02/23</CardText>
            </Div>

        </Card>


        <CardUser style={styles.boxShadow}>
            <CardUserHead>
            <CustomIcon
                style={{fontSize: 22, color: '#0F1729', marginRight: 18}}
                name='paper'
                />
                <UserName>Dados Cadastrais</UserName>
            </CardUserHead>

            <List>
                <ListItemStrong>Email:           <ListItem>erick@gmail.com</ListItem></ListItemStrong>
                <ListItemStrong>Endereço:     <ListItem>Rua Teste teste</ListItem></ListItemStrong>
                <ListItemStrong>Número:       <ListItem>88</ListItem></ListItemStrong>
                <ListItemStrong>Cidade:        <ListItem>Rio de Janeiro</ListItem></ListItemStrong>
                <ListItemStrong>Estado:        <ListItem>RJ</ListItem></ListItemStrong>
            </List>
        </CardUser>
      </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    page: {
     backgroundColor: '#fafafa',
     minHeight: '100%'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 28,
        paddingHorizontal: 25,
    },
    boxShadow: {
        shadowColor: "#0000005d",
        elevation: 3,
      },
});

export default AccountDetail
