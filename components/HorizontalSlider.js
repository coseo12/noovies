import React from 'react';
import { ScrollView } from 'react-native';
import Title from './Title';
import Proptypes from 'prop-types';

const HorizontalSlider = ({ title, children }) => {
  return (
    <>
      <Title title={title}></Title>
      <ScrollView
        contentContainerStyle={{
          paddingLeft: 30,
          marginTop: 20,
          marginBottom: 40,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </>
  );
};

HorizontalSlider.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
};

export default HorizontalSlider;
