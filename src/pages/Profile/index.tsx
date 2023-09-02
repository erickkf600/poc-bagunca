import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import User from './components/User';

const Profile = ({navigation}: any) => {
  const [userData, setUserData] = useState()

  useEffect(() => {
    getData ()
}, [])
  const getData = async () => {
    try {
      const value: any = await AsyncStorage.getItem('@user')
      setUserData(JSON.parse(value))
    } catch(e) {}
  }
  return (
    <>
      <User navigation={navigation} user={userData}/>

    </>
  );
}

const styles = StyleSheet.create({
  user: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile
