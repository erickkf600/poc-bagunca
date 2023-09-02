import { StyleSheet, View } from "react-native";
import { Author, Title, Text, Div, I, Illustration } from './full-article.style';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
const FullArticle = ({route}: any) => {
 const data: any = route?.params 
 const source = {
    html: data.text
  };
  const { width } = useWindowDimensions();
  return (
    <View style={styles.page}>
        <View style={styles.container}>
            <Author>{data.author}</Author>
            <Div>
                <Title>{data.title}</Title>
                <I
                    favorite={data.favorite}
                    name='favorite'
                />
            </Div>
            <Text>{data.full_subtitle}</Text>
            
        </View>

        <Illustration
            source={{uri: data.full_img}}
            resizeMode="cover"
        />

        <View style={styles.container}>
        <RenderHtml
            contentWidth={width}
            source={source}
        />
        </View>


    </View>
  );
}

const styles = StyleSheet.create({
    page: {
      backgroundColor: '#fff',
      minHeight: '100%'
    },
    container: {
        paddingHorizontal: 25,
      },
  });
  


export default FullArticle

