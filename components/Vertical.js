import React from 'react';
import TouchableBtn from './TouchableBtn';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Poster from './Poster';
import Votes from './Votes';
import { trimText } from '../utils';

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: #ffffff;
  font-weight: 500;
  margin: 10px 0 5px 0;
`;

const Vertical = ({
  id,
  poster,
  title,
  votes,
  overview,
  backgroundImage,
  releaseDate,
  isTv,
}) => {
  return (
    <TouchableBtn
      id={id}
      title={title}
      poster={poster}
      votes={votes}
      overview={overview}
      backgroundImage={backgroundImage}
      releaseDate={releaseDate}
      isTv={isTv}
    >
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 12)}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableBtn>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number,
  backgroundImage: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  isTv: PropTypes.bool,
};

export default Vertical;
