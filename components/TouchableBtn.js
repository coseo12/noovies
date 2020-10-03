import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

const TouchableBtn = ({
  id,
  title,
  poster,
  votes,
  backgroundImage,
  overview,
  children,
  releaseDate,
  isTv,
}) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate('Detail', {
      id,
      title,
      poster,
      votes,
      backgroundImage,
      overview,
      releaseDate,
      isTv,
    });
  };

  return <TouchableOpacity onPress={goToDetail}>{children}</TouchableOpacity>;
};

TouchableBtn.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  votes: PropTypes.number,
  backgroundImage: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
};

export default TouchableBtn;
