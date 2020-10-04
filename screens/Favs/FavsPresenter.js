import React, { useState } from 'react';
import { Dimensions, PanResponder, Animated } from 'react-native';
import styled from 'styled-components/native';
import { apiImage } from '../../api';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const Container = styled.View`
  padding-top: 50px;
  flex: 1;
  background-color: #000000;
  align-items: center;
`;

const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`;

const styles = {
  width: `90%`,
  height: HEIGHT / 1.5,
  position: `absolute`,
  top: `10%`,
};

const FavsPresenter = ({ results }) => {
  const [topIndex, setTopIndex] = useState(0);
  const position = new Animated.ValueXY();
  const nextCard = () => setTopIndex(prop => prop + 1);
  const panResponder = PanResponder.create({
    onPanResponderMove: (_, { dx, dy }) => {
      position.setValue({ x: dx, y: dy });
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      if (dx > 250) {
        Animated.spring(position, {
          useNativeDriver: true,
          toValue: {
            x: WIDTH + 100,
            y: dy,
          },
        }).start(nextCard);
      } else if (dx < -250) {
        Animated.spring(position, {
          useNativeDriver: true,
          toValue: {
            x: -WIDTH - 100,
            y: -dy,
          },
        }).start(nextCard);
      } else {
        Animated.spring(position, {
          useNativeDriver: true,
          toValue: {
            x: 0,
            y: 0,
          },
        }).start();
      }
    },
    onStartShouldSetPanResponder: () => true,
  });
  const roationValues = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: ['-8deg', '0deg', '8deg'],
    extrapolate: 'clamp',
  });

  const secondCardOpacity = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.2, 1],
    extrapolate: 'clamp',
  });

  const secondCardScale = position.x.interpolate({
    inputRange: [-255, 0, 255],
    outputRange: [1, 0.8, 1],
    extrapolate: 'clamp',
  });

  return (
    <Container>
      {results.map((result, idx) => {
        if (idx < topIndex) {
          return null;
        }
        if (idx === topIndex) {
          return (
            <Animated.View
              key={result.id}
              style={{
                transform: [
                  { rotate: roationValues },
                  ...position.getTranslateTransform(),
                ],
                ...styles,
                zIndex: 1,
              }}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else if (idx === topIndex + 1) {
          return (
            <Animated.View
              key={result.id}
              style={{
                ...styles,
                zIndex: -idx,
                opacity: secondCardOpacity,
                transform: [{ scale: secondCardScale }],
              }}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        } else {
          return (
            <Animated.View
              key={result.id}
              style={{
                ...styles,
                zIndex: -idx,
                opacity: 0,
              }}
              {...panResponder.panHandlers}
            >
              <Poster source={{ uri: apiImage(result.poster_path) }} />
            </Animated.View>
          );
        }
      })}
    </Container>
  );
};

export default FavsPresenter;
