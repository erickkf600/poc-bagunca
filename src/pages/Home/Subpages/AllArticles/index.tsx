import { StyleSheet, View } from "react-native";
import ArticleCard from "../../../../shared/components/ArticleCard";
const AllArticles = ({route, navigation}: any) => {
 const data: any = route?.params 

 const openArticle = (data: any) =>{
    navigation.navigate('Artigo', {...data})
  }
  return (
    <View style={styles.page}>
        <View style={styles.container}>
            
        {data.map((el: any, i: number) => (
          <View key={i}>
            <ArticleCard content={el} onPress={() => openArticle(el)}></ArticleCard>
          </View>
        ))}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    page: {
      backgroundColor: '#fafafa',
      minHeight: '100%'
    },
    container: {
        paddingHorizontal: 25,
      },
  });
  


export default AllArticles

