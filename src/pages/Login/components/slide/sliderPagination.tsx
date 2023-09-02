import {StyleSheet, Animated, View, Dimensions} from 'react-native';
import React from 'react';
import { Navigation } from './slider-item.style'

const {width} = Dimensions.get('screen');

const SlidePagination = ({data, scrollX, index}: any) => {
  return (
    <Navigation>
      {data.map((_: any, idx: number) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 10, 10],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#DEF7E5', '#92E3A9', '#DEF7E5'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[
              styles.dot,
              {width: dotWidth, backgroundColor},
            ]}
          />
        );
      })}
    </Navigation>
  );
};

export default SlidePagination;

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#DEF7E5',
    borderRadius: 6,
    marginHorizontal: 4
  },
  dotActive: {
    backgroundColor: '#92E3A9',
  },
});