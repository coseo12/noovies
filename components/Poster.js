import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

const Poster = ({ url }) => <Image source={{ uri: url }} />;

Poster.prototype = {
  url: PropTypes.string.isRequired,
};

export default Poster;
