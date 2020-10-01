import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { tvApi } from '../api';

const Tv = () => {
  const [shows, setShows] = useState({
    today: [],
    thisWeek: [],
    topRated: [],
    popular: [],
    todayError: null,
    thisWeekError: null,
    upcomingError: null,
    popularError: null,
  });
  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();
    setShows({
      today,
      thisWeek,
      topRated,
      popular,
      thisWeekError,
      topRatedError,
      todayError,
      popularError,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <Text style={{ color: '#ffffff' }}>{shows.today?.length}</Text>
    </View>
  );
};

export default Tv;
