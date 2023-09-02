import React from 'react';
import { Text } from 'react-native';
import CustomIcon from '../Icons/CustomIcon';
import { Head, Button, Div, Perfiltext } from './header.style';
const Header = (props: any) =>{
    return(
        <Head>
            {props.children === 'Perfil' ? <Perfiltext>Perfil</Perfiltext> : 
            <Button>
                <CustomIcon
                    style={{fontSize: 25, color: '#0F1729'}}
                    name='user1'
                />
            </Button>
            }
            <Div>
                <Button>
                    <CustomIcon
                        style={{fontSize: 20, color: '#0F1729'}}
                        name='favorite'
                    />
                </Button>
                <Button style={{marginLeft: 19}}>
                    <CustomIcon
                        style={{fontSize: 20, color: '#0F1729'}}
                        name='notification'
                    />
                </Button>
            </Div>

        </Head>
    )
}

export default Header;