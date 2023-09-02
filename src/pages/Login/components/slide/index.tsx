import {Animated, Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import SliderItem, {slideItems} from './sliderItem';
import SlidePagination from './sliderPagination';

const Slide = () => {
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const {height} = Dimensions.get('window');

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}: any) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={{height: 550, marginTop: -10}}>
      <FlatList
        style={{flexGrow: 0}}
        data={slideItems}
        renderItem={({item}) => <SliderItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <SlidePagination data={slideItems} scrollX={scrollX} index={index} />
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({});
