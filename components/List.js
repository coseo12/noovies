import React from 'react';
import styled from 'styled-components/native';
import Title from './Title';
import { ScrollView } from 'react-native';
import Proptypes from 'prop-types';

const Container = styled.View`
  margin-top: 20px;
`;

const List = ({ title, children }) => {
  return (
    <>
      <Title title={title}></Title>
      <Container>{children}</Container>
    </>
  );
};

List.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.node.isRequired,
};

export default List;
