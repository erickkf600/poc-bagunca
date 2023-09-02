import React from 'react';
import {
  Dimensions, Text
} from 'react-native';
import { Container, Illustration, Texts } from './slider-item.style';

const {width} = Dimensions.get('window');

export const slideItems = [
  {
    id: 1,
    img: require('../../../../../assets/images/slide1.png'),
    title: 'Bem vindo ao Recly!',
    description: 'Ajude a proteger o meio amebiente e contruir um futuro sustentável.',
  },
  {
    id: 2,
    img: require('../../../../../assets/images/slide2.png'),
    title: 'Agende retiradas',
    description: 'Aqui você pode agendar as coletas e reciclar sem precisar sair de casa.',
  },
  {
    id: 3,
    img: require('../../../../../assets/images/slide3.png'),
    title: 'Cotações',
    description: 'Consulte os preços dos itens reciclaveis de maneira rápida e prática.',
  },
  {
    id: 4,
    img: require('../../../../../assets/images/slide4.png'),
    title: 'Centros de reciclagem',
    description: "Encontre centros de reciclagem próximos da sua localização.",
  }
]
const SlideItem = ({item}: any) => {

  return (
    <Container style={{width: width}}>
      <Illustration
        source={item.img }
        resizeMode="contain"
      />
      <Texts>
        <Text style={{fontFamily: 'jost-medium', fontSize: 30, textAlign: 'center', color: '#263238'}}>{item.title}</Text>
        <Text style={{fontFamily: 'jost-regular', fontSize: 17, textAlign: 'center', color: '#263238'}}>{item.description}</Text>
      </Texts>
    </Container>
  );
};

export default SlideItem;
