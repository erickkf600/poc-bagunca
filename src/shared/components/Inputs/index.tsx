import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Input, InputControl, Label, Error, EyeButton } from './input.style';
import CustomIcon from '../Icons/CustomIcon';
import { useController } from "react-hook-form"
import { useState } from 'react';
const RInput = ({name, control, ...props}: any) => {
    const [toggleEye, setToggleEye] = useState<boolean>(true)
    const { field } = useController({
      name, 
      control
    })
  return (
    <>
      {props.type === 'text' ? 
        <InputControl style={props.styles}>
            <Label>{props.label}</Label>
            <Input 
             onBlur={field.onBlur}
             onChangeText={value => field.onChange(value)}
             value={field.value}
             returnKeyType={props.returnKeyType}
             onSubmitEditing={() => props.onSubmitEditing()} ref={props.refEl} />
            <Error>{props.error}</Error>
        </InputControl>
      
    :   <InputControl style={props.styles}>
            <Label>{props.label}</Label>
            <Input  
              onBlur={field.onBlur}
              onChangeText={value => field.onChange(value)}
              value={field.value}
             secureTextEntry={toggleEye} 
             returnKeyType={props.returnKeyType}  
             ref={props.refEl}  
             onSubmitEditing={() => props.onSubmitEditing()}
             />
            <EyeButton onPress={() => setToggleEye(!toggleEye)}>
                <CustomIcon
                    style={{fontSize: 20, color: '#92E3A9'}}
                    name={toggleEye ? 'eye' : 'eye-closed'}
                />
            </EyeButton>
            <Error>{props.error}</Error>
        </InputControl>} 
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
});


export default RInput
