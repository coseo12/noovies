import React, { useLayoutEffect, useState, useEffect } from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi, tvApi } from '../../api';

const DetailContainer = ({
  navigation,
  route: {
    params: {
      id,
      title,
      poster,
      votes,
      backgroundImage,
      overview,
      releaseDate,
      isTv,
    },
  },
}) => {
  const [detail, setDetail] = useState({
    loading: true,
    results: {
      title,
      poster,
      votes,
      backgroundImage,
      overview,
      releaseDate,
    },
  });

  const getData = async () => {
    const [getDetail, getDetailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);
    setDetail({
      loading: false,
      results: {
        ...getDetail,
        title: getDetail.name || getDetail.title,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
        overview: getDetail.overview,
        votes: getDetail.vote_average,
      },
    });
    console.log(getDetailError);
  };

  useEffect(() => {
    getData();
  }, [id]);

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  });

  return <DetailPresenter {...detail} refreshFn={getData} />;
};

export default DetailContainer;
