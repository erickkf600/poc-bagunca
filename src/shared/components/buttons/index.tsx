import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = ({type, text, onPress, style}: any) => {
  return (
    <>
    <TouchableOpacity style={[styles[type], style]} onPress={onPress}>
        <Text>{text}</Text>
    </TouchableOpacity>
      
    </>
  );
}

const styles: any = StyleSheet.create({
    light: {
      alignItems: 'center',
      backgroundColor: '#DEF7E5',
      width: 308,
      paddingVertical: 15,  
      borderRadius: 15,
      fontFamily: 'jost-medium',
      color: '#263238',
      fontSize: 16,
    },
    full: {
      alignItems: 'center',
      backgroundColor: '#92E3A9',
      width: 308,
      paddingVertical: 15,  
      borderRadius: 15,
      fontFamily: 'jost-medium',
      color: '#263238',
      fontSize: 16,
    },
  });

export default Button
