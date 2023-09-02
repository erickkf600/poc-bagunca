import { createRef, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import Button from '../../shared/components/buttons';
import LoginForm from './components/loginForm';
import RegisterForm from './components/RegisterForm';
import Slide from './components/slide';

const Login = ({navigation}: any) => {
  const actionSheetLogin = useRef<any>(null);
  const actionSheetRegister = useRef<any>(null);
  return (
    <>
      <View style={styles.container}>
        <Slide />
        <View style={styles.actions}>
          <Text style={{fontFamily: 'jost-medium', fontSize: 16, textAlign: 'center', color: '#263238', marginBottom: 25}}>Entre com a sua conta</Text>
          <Button type="light" text="Login"  onPress={() => actionSheetLogin.current?.show()}/>
          <Button type="full" text="Registre-se" style={{marginTop: 14}} onPress={() => actionSheetRegister.current?.show()}/>
        </View>
      </View>

      <ActionSheet ref={actionSheetLogin} gestureEnabled={true} headerAlwaysVisible={true}>
        <View style={{height: 350}}>
          <LoginForm navigation={navigation}/>
        </View>
      </ActionSheet>

      <ActionSheet ref={actionSheetRegister} gestureEnabled={true} headerAlwaysVisible={true}>
        <View style={{height: 440}}>
          <RegisterForm navigation={navigation}/>
        </View>
      </ActionSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  actions: {
    marginTop: 50,
  }
});

export default Login
