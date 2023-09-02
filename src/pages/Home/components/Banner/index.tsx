import { BannerLayout, Illustration, Div, Title, Text } from './banner.style';
const Banner = () => {
    const img = require('../../../../../assets/images/salve-o-mundo.png')
  return (
    <BannerLayout>
        <Illustration
            source={img }
            resizeMode="contain"
        />

      <Div>
        <Title>Ajude a salvar o planeta!</Title>
        <Text>Sem nem precisar sair da sua casa.</Text>
      </Div>

    </BannerLayout>
  );
}


export default Banner

