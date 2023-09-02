import React from 'react';
import { Text, StyleSheet } from 'react-native';
import CustomIcon from '../Icons/CustomIcon';
import { Card, Illustration, Div, CardTitle, CardAuthor, CardText, I } from './articleCard.style';

const ArticleCard = ({content, onPress}: any) =>{
    return(
        <Card style={styles.boxShadow} onPress={() => onPress()}>
            <Illustration
                source={{uri: content.thumb}}
                resizeMode="contain"
            />
            <Div>
                <CardTitle>{content.title}</CardTitle>
                <CardText>{content.subtitle}</CardText>
                <CardAuthor>{content.author}</CardAuthor>
            </Div>

            <I
              favorite={content.favorite}
              name='favorite'
            />
        </Card>
    )
}

const styles = StyleSheet.create({
    boxShadow: {
      shadowColor: "#0000005d",
      elevation: 3,
    },
  });

export default ArticleCard;