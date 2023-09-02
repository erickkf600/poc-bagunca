import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Login, HomeT, Locations,Shedule, Profile } from './modules';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from '../shared/components/tabs';
import Header from '../shared/components/header';
import FullArticle from '../pages/Home/Subpages/Full-Article';
import AllArticles from '../pages/Home/Subpages/AllArticles';
import Cotations from '../pages/Home/Subpages/Cotations';
import MyItems from '../pages/Home/Subpages/MyItems';
import { Pressable } from "react-native";
import { CustomIcon } from '../shared/components/Icons/Icons';
import AccountDetail from '../pages/Profile/Subpages/AccountDetail';
import PrivaCYPolitic from '../pages/Profile/Subpages/PrivacyPolitc';
import Security from '../pages/Profile/Subpages/Security';
const Tab = createBottomTabNavigator();
const LoginStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const LocationsStack = createNativeStackNavigator();
const SheduleStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
      <HomeStack.Navigator screenOptions={{headerShadowVisible: false }}>
          <HomeStack.Screen name="Home" component={HomeT} options={{ headerTitle: (props: any) => <Header {...props} /> }}/>
          <HomeStack.Screen name="Artigo" component={FullArticle} options={{headerShown: true, title: '' }}/>
          <HomeStack.Screen name="Artigos" component={AllArticles} options={{headerShown: true, title: 'Artigos' }}/>
          <HomeStack.Screen name="Cotações" component={Cotations} options={{headerShown: true, title: 'Cotações' }}/>
          <HomeStack.Screen name="MeusItens" component={MyItems} options={{ headerShown: true, title: 'Meus Itens' }}/>
      </HomeStack.Navigator>        
  )
}
const LocationsStackScreen = () => {
  return (
      <LocationsStack.Navigator screenOptions={{headerShadowVisible: false }}>
          <LocationsStack.Screen name="Locais" component={Locations} options={{ headerTitle: (props: any) => <Header {...props} /> }} />
      </LocationsStack.Navigator>        
  )
}
const SheduleStackScreen = () => {
  return (
      <SheduleStack.Navigator screenOptions={{headerShadowVisible: false }}>
          <SheduleStack.Screen name="Agenda" component={Shedule} options={{ headerTitle: (props: any) => <Header {...props} /> }} />
      </SheduleStack.Navigator>        
  )
}
const ProfileStackScreen = () => {
  return (
      <ProfileStack.Navigator screenOptions={{headerShadowVisible: false }}>
          <ProfileStack.Screen name="Perfil" component={Profile} options={{ headerTitle: (props: any) => <Header {...props} /> }} />
          <ProfileStack.Screen name="DetalhesConta" component={AccountDetail} options={{headerShown: true, title: '' }}/>
          <ProfileStack.Screen name="PoliticaPrivacidade" component={PrivaCYPolitic} options={{headerShown: true, title: 'Política de Privacidade' }}/>
          <ProfileStack.Screen name="Seguranca" component={Security} options={{headerShown: true, title: 'Segurança' }}/>
      </ProfileStack.Navigator>        
  )
}


const Tabsnvigation = () => {
  return (
    <Tab.Navigator 
          screenOptions={{ headerShown: false }}
          tabBar={props => <Tabs {...props} />}>
          <Tab.Screen name="HomeTab" component={HomeStackScreen}/>
          <Tab.Screen name="LocaisTab" component={LocationsStackScreen}/>
          <Tab.Screen name="AgendaTab" component={SheduleStackScreen}/>
          <Tab.Screen name="PerfilTab" component={ProfileStackScreen}/>
      </Tab.Navigator> 
  )
}
export default function Router() {
  return (
    <NavigationContainer>
        <LoginStack.Navigator screenOptions={{ headerShown: false }}>
            <LoginStack.Screen name="Login" component={Login} options={{ title: '' }} />
            <LoginStack.Screen name="Hero" component={Tabsnvigation} />
        </LoginStack.Navigator>
    </NavigationContainer>
  );
}
