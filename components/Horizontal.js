import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Poster from './Poster';
import { trimText, formatDate } from '../utils';

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Overview = styled.Text`
  color: #ffffff;
  margin-top: 10px;
`;

const ReleaseDate = styled.Text`
  color: #ffffff;
  font-size: 12px;
`;

const Horizontal = ({ id, poster, title, releaseDate, overview }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 30)}</Title>
          {releaseDate ? (
            <ReleaseDate>{formatDate(releaseDate)}</ReleaseDate>
          ) : null}
          <Overview>{trimText(overview, 110)}</Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
};

export default Horizontal;
