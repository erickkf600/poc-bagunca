import { createRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../../../../shared/components/buttons';
import RInput from '../../../../shared/components/Inputs';
import { formSchema } from './form-validation';

const AddItemForm = () => {
  const refInput: any = createRef();
  const { control, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(formSchema)
});

const handleLoginSubmit = (data: any) => {
  console.log(data)
}
  return (
    <>
      <View>
        <Text style={styles.title}>Adicionar</Text>

        <View style={styles.formContainer}>
          <RInput label="Tipo" 
          returnKeyType="next" 
          type="text" 
          name="type"
          control={control}
          onSubmitEditing={() => refInput.current.focus()} 
          error={errors.email?.message}/>

          <RInput 
          label="Peso" 
          type="text" 
          refEl={refInput} 
          name="weight" 
          control={control}
          error={errors.password?.message}
          onSubmitEditing={handleSubmit(handleLoginSubmit)}/>

          <Button type="full" text="Adicionar" style={{width: '100%', marginTop: 25}} onPress={handleSubmit(handleLoginSubmit)} />
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


export default AddItemForm
