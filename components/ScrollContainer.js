import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, ActivityIndicator } from 'react-native';

const ScrollContainer = ({ loading, children }) => {
  return (
    <ScrollView
      style={{
        backgroundColor: '#000000',
      }}
      contentContainerStyle={{
        flex: loading ? 1 : 'auto',
        justifyContent: loading ? 'center' : 'flex-start',
      }}
    >
      {loading ? <ActivityIndicator color="#ffffff" size="small" /> : children}
    </ScrollView>
  );
};

ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default ScrollContainer;
