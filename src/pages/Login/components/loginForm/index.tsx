import { createRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../../shared/components/buttons';
import RInput from '../../../../shared/components/Inputs';
import { formSchema } from './form-validation';
import { doLogin } from '../../../../service/http';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginForm = ({navigation}: any) => {
  const refInput: any = createRef();
  const { control, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(formSchema)
});

const handleLoginSubmit = async (data: any) => {
  const useData = {
    name: 'Erick',
    email: 'erick@erick.com'
  }
  const jsonValue = JSON.stringify(useData)
  AsyncStorage.setItem('@user', jsonValue)
  navigation.navigate('Hero')
  // await doLogin(data)
  // .then((res: any) => {
  // })
  // .catch(err => {
  //     console.error(err)
  // })
}
  return (
    <>
      <View>
        <Text style={styles.title}>Login</Text>

        <View style={styles.formContainer}>
          <RInput label="Endereço de Email" 
          returnKeyType="next" 
          type="text" 
          name="email"
          control={control}
          onSubmitEditing={() => refInput.current.focus()} 
          error={errors.email?.message}/>

          <RInput 
          label="Senha" 
          type="password" 
          refEl={refInput} 
          name="password" 
          control={control}
          error={errors.password?.message}
          onSubmitEditing={handleSubmit(handleLoginSubmit)}/>

          <Button type="full" text="Login" style={{width: '100%', marginTop: 25}} onPress={handleSubmit(handleLoginSubmit)} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#263238',
    fontFamily: 'jost-regular',
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center'
  },

  formContainer: {
    paddingHorizontal: 35,
    marginTop: 35
  }
});


export default LoginForm
