
import { UserName, Div, Email, Button, ButtonText } from './user.style';
import { StyleSheet, View } from 'react-native';
import CustomIcon from '../../../../shared/components/Icons/CustomIcon';

const itemsList = [
    {
        icon: 'user',
        text: "Detalhes da conta",
        page: 'DetalhesConta'
    },
    {
        icon: 'lock',
        text: "Política de Privacidade",
        page: 'PoliticaPrivacidade',
    },
    {
        icon: 'Vector-14',
        text: "Segurança",
        page: 'Seguranca'
    },
    {
        icon: 'Vector-15',
        text: "Sair",
        page: 'Login'
    },
]

const User = ({navigation, user}: any) => {
    const handlerNavigation = (page: string) =>{
        navigation.navigate(page)
    }
  return (
    <>
      <Div>
        <UserName>{user?.name}</UserName>
        <Email>{user?.email}</Email>
      </Div>

      <View style={styles.page}>
            {
                itemsList.map((item: any, i: number) => (
                    <Button style={styles.boxShadow} key={i} onPress={() => handlerNavigation(item.page)}>
                        <View style={{flexDirection: 'row'}}>
                            <CustomIcon
                                style={{fontSize: 16, color: '#0F1729', marginRight: 15}}
                                name={item.icon}
                            />
                            <ButtonText>{item.text}</ButtonText>
                        </View>
                        <CustomIcon
                            style={{fontSize: 11, color: '#0F1729'}}
                            name="arrow-clean-righ"
                        />
                    </Button>
                ))
            }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    page: {
      backgroundColor: '#fafafa',
      minHeight: '100%',
      paddingHorizontal: 25,
      paddingTop: 29
    },
    boxShadow: {
        shadowColor: "#a3a3a3",
        elevation: 1,
      },
  });

export default User
