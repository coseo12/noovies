import React, { useEffect, useState } from 'react';
import { tvApi } from '../../api';
import TvPresenter from './TvPresenter';

const TvContainer = () => {
  const [shows, setShows] = useState({
    loading: true,
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
      loading: false,
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

  return <TvPresenter {...shows} />;
};

export default TvContainer;