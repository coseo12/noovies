import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, ActivityIndicator, RefreshControl } from 'react-native';

const ScrollContainer = ({
  loading,
  children,
  refreshFn,
  contentContainerStyle,
}) => {
  const [refreshing, setRefresing] = useState(false);
  const onRefresh = async () => {
    setRefresing(true);
    await refreshFn();
    setRefresing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}
          enabled={false}
          tintColor={'#ffffff'}
        />
      }
      style={{
        backgroundColor: '#000000',
      }}
      contentContainerStyle={contentContainerStyle}
    >
      {loading ? <ActivityIndicator color="#ffffff" size="small" /> : children}
    </ScrollView>
  );
};

ScrollContainer.propTypes = {
  loading: PropTypes.bool,
  contentContainerStyle: PropTypes.object,
  refreshFn: PropTypes.func.isRequired,
};

export default ScrollContainer;
