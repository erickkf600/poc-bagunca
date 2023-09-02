import CustomIcon from '../../../../shared/components/Icons/CustomIcon';
import { BannerLayout, Illustration, Div, Title, Text, 
  Link, Card, IllustrationC, Weigth, IllustrationText, Span,
  CardTitle, CardText } from './banner.style';
import { StyleSheet, View } from 'react-native';
import { useRef } from 'react';
import ActionSheet from 'react-native-actions-sheet';
import AgendForm from '../AgendForm';
const Banner = ({update}: any) => {
  const actionSheetAgend = useRef<any>(null);

  const toggleSheet = () =>{
    actionSheetAgend.current?.show()
  }
    const img = require('../../../../../assets/images/calendar.png')
  return (
    <>
    <BannerLayout onPress={() => toggleSheet()}>
        <Illustration
            source={img }
            resizeMode="contain"
        />

      <Div>
        <Title>Agende aqui!</Title>
        <Text>Escolha as datas para a coleta.</Text>
      </Div>
      <Link>agendar <CustomIcon
                style={{fontSize: 10, color: '#4ED675'}}
                name='arrow-clean-righ'
            /></Link>   
    </BannerLayout>
    
    <ActionSheet ref={actionSheetAgend} gestureEnabled={true} headerAlwaysVisible={true}>
        <View style={{height: 620}}>
          <AgendForm update={() => update()} element={actionSheetAgend}/>
        </View>
      </ActionSheet>
    </>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
      shadowColor: "#0000005d",
      elevation: 3,
    },
});


export default Banner

