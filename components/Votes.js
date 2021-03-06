import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.Text`
  color: rgb(220, 220, 220);
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 500;
`;

const Votes = ({ votes }) => {
  return <Container>⭐️ {votes} / 10</Container>;
};

Votes.propTypes = {
  votes: PropTypes.number.isRequired,
};

export default Votes;
