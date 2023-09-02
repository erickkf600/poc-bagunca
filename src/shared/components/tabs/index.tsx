import React, { createRef } from 'react'
import { Pressable, TouchableWithoutFeedback } from 'react-native'
import { I, Name, Tab, Item } from './tabs.style';
const actionSheetRef = createRef();

const Tabs = (props: any) =>{
    const handleNavigation = (page: string) =>{
        props.navigation.navigate(page)
    }

    return(
        <Tab>
            <TouchableWithoutFeedback onPress={() => handleNavigation('HomeTab')}>
                <Item>
                    <I name="home" active={props.state.index === 0}/>
                    <Name active={props.state.index === 0}>Home</Name>
                </Item>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => handleNavigation('LocaisTab')}>
                <Item>
                    <I name="location" active={props.state.index === 1}/>
                    <Name active={props.state.index === 1}>Locais</Name>
                </Item>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => handleNavigation('AgendaTab')}>
                <Item>
                    <I name="tools" active={props.state.index === 2}/>
                    <Name active={props.state.index === 2}>Agenda</Name>
                </Item>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => handleNavigation('PerfilTab')}>
                <Item>
                    <I name="user" active={props.state.index === 3}/>
                    <Name active={props.state.index === 3}>Perfil</Name>
                </Item>
            </TouchableWithoutFeedback>
        </Tab>
    )
}

export default Tabs;