import { StyleSheet } from 'react-native';
import CustomIcon from '../../../../shared/components/Icons/CustomIcon';
import { Container, Card, CardText } from './actions.style';
const Actions = ({navigation}: any) => {
  const handleNavigate = (page: string) =>{
    navigation.navigate(page)
  }
  return (
    <Container>
          <Card style={styles.boxShadow} onPress={() => handleNavigate('Cotações')}>
            <CustomIcon
                style={{fontSize: 60, color: '#0F1729'}}
                name='recycle'
            />
            <CardText>Cotações</CardText>
          </Card>
          <Card style={{marginLeft: 20, ...styles.boxShadow}} onPress={() => handleNavigate('MeusItens')}>
            <CustomIcon
              style={{fontSize: 60, color: '#0F1729'}}
              name='bag'
            />
            <CardText>Meus Itens</CardText>
          </Card>

    </Container>
  );
}
const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#0000005d",
    elevation: 3,
  },
});



export default Actions

