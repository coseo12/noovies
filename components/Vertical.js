import React from 'react';
import { TouchableOpacity } from 'react-native';
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

const Vertical = ({ id, poster, title, votes }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 12)}</Title>
        <Votes votes={votes} />
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
