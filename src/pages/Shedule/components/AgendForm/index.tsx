import { createRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Button from '../../../../shared/components/buttons';
import RInput from '../../../../shared/components/Inputs';
import { formSchema } from './form-validation';
import { create } from '../../../../service/http';


const AgendForm = ({update, element}: any) => {
  const refInput1: any = createRef();
  const refInput2: any = createRef();
  const refInput3: any = createRef();
  const refInput4: any = createRef();
  const refInput5: any = createRef();
  const refInput6: any = createRef();
  const { control, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(formSchema)
});

const handleLoginSubmit = async (data: any) => {
  await create(data)
    .then(() => {
      Alert.alert('Sucesso', 'Agendado com sucesso', [
        {text: 'OK', onPress: () => updateList()},
      ])  
    })
    .catch(err => {
        console.error(err)
    })
}

const updateList = () =>{
  update()
  element.current?.hide()
}

  return (
    <>
      <View>
        <Text style={styles.title}>Agendamento</Text>

        <View style={styles.formContainer}>
          <RInput label="Tipo" 
          returnKeyType="next" 
          type="text" 
          name="type"
          control={control}
          onSubmitEditing={() => refInput1.current.focus()} 
          error={errors.email?.message}/>

          <RInput 
          label="Peso" 
          returnKeyType="next"
          type="text" 
          refEl={refInput1} 
          name="weigth" 
          control={control}
          onSubmitEditing={() => refInput2.current.focus()} 
          error={errors.password?.message}/>

          <RInput 
          label="Data da retirada" 
          type="text" 
          name="date" 
          returnKeyType="next"
          control={control}
          refEl={refInput2} 
          onSubmitEditing={() => refInput3.current.focus()} 
          error={errors.password?.message}/>

          <View style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <RInput 
            label="Cidade" 
            returnKeyType="next"
            type="text" 
            refEl={refInput3} 
            name="city" 
            control={control}
            error={errors.password?.message}
            onSubmitEditing={() => refInput4.current.focus()} 
            styles={{width: '79%'}}/>
            
            <RInput 
            label="UF" 
            type="text" 
            refEl={refInput4} 
            name="uf" 
            returnKeyType="next"
            control={control}
            error={errors.password?.message}
            styles={{width: '19%', marginLeft: 10}}
            onSubmitEditing={() => refInput5.current.focus()}/>
          </View>

          <View style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <RInput 
            label="Endereço da retirada" 
            type="text" 
            returnKeyType="next"
            refEl={refInput5} 
            name="address" 
            control={control}
            error={errors.password?.message}
            onSubmitEditing={() => refInput6.current.focus()}
            styles={{width: '79%'}}/>
            
            <RInput 
            label="nº" 
            type="text" 
            refEl={refInput6} 
            name="number" 
            control={control}
            error={errors.password?.message}
            styles={{width: '19%', marginLeft: 10}}
            onSubmitEditing={handleSubmit(handleLoginSubmit)}/>
          </View>

          <Button type="full" text="Agendar" style={{width: '100%', marginTop: 25}} onPress={handleSubmit(handleLoginSubmit)} />
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


export default AgendForm
