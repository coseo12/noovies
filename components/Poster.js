import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { apiImage } from '../api';

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

const Blank = styled.View`
  width: 100px;
  height: 160px;
  border-radius: 4px;
  background-color: #eeeeee;
`;

const Poster = ({ url }) =>
  url ? <Image source={{ uri: apiImage(url) }} /> : <Blank />;
Poster.propTypes = {
  url: PropTypes.string,
};

export default Poster;
