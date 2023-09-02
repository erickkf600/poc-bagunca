import { createRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../../shared/components/buttons';
import RInput from '../../../../shared/components/Inputs';
import { formSchema } from './form-validation';
import { doRegister } from '../../../../service/http';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterForm = ({navigation}: any) => {
  const refInput2: any = createRef();
  const refInput3: any = createRef();
  const { control, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(formSchema)
});

const handleRegisterSubmit = async (data: any) => {
  await doRegister(data)
  .then((res: any) => {
    const jsonValue = JSON.stringify(res)
    AsyncStorage.setItem('@user', jsonValue)
    navigation.navigate('Hero')
  })
  .catch(err => {
      console.error(err)
  })
}
  return (
    <>
      <View>
        <Text style={styles.title}>Registre-se</Text>

        <View style={styles.formContainer}>

          <RInput label="Nome Completo" 
          returnKeyType="next" 
          type="text" 
          name="name"
          control={control}
          onSubmitEditing={() => refInput2.current.focus()} 
          error={errors.email?.message}/>

          <RInput label="Endereço de Email" 
          returnKeyType="next" 
          type="text" 
          name="email"
          control={control}
          refEl={refInput2}
          onSubmitEditing={() => refInput3.current.focus()} 
          error={errors.email?.message}/>

          <RInput 
          label="Senha" 
          type="password" 
          refEl={refInput3} 
          name="password" 
          control={control}
          error={errors.password?.message}
          onSubmitEditing={handleSubmit(handleRegisterSubmit)}/>

          <Button type="full" text="Registrar" style={{width: '100%', marginTop: 25}} onPress={handleSubmit(handleRegisterSubmit)} />
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


export default RegisterForm
