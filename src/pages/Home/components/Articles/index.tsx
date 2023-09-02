import { useEffect, useState } from 'react';
import { StyleSheet, View, Pressable } from 'react-native';
import { getArticles } from '../../../../service/http';
import ArticleCard from '../../../../shared/components/ArticleCard';

import { Container, Title, Div, Link } from './articles.style';
const Articles = ({navigation}: any) => {
  const [articlesList, setArticlesList] = useState([]);
  useEffect(() => {
    articles()
}, [])
  const articles = async () => {
    await getArticles()
        .then((res: any) => {
            setArticlesList(res)
        })
        .catch(err => {
            console.error(err)
        })
  }

  const openArticle = (data: any) =>{
    navigation.navigate('Artigo', {...data})
  }
  const openAllArticles = () =>{
    navigation.navigate('Artigos', articlesList)
  }

  return (
    <Container>
         <Div>
          <Title>Artigos</Title>
          <Pressable onPress={() => openAllArticles()}><Link>Ver todos</Link></Pressable>
        </Div>
        {articlesList.map((el: any, i: number) => (
          <View key={i}>
            <ArticleCard content={el} onPress={() => openArticle(el)}></ArticleCard>
          </View>
        ))}

    </Container>
  );
}
const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: "#0000005d",
    elevation: 3,
  },
});



export default Articles

