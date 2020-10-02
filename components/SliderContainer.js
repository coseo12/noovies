import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const Container = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const SliderContainer = ({ children }) => {
  return (
    <Container>
      <Swiper controlsEnabled={false} loop timeout={3}>
        {children}
      </Swiper>
    </Container>
  );
};

export default SliderContainer;
