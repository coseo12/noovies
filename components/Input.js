import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  background-color: #ffffff;
  margin: 0 30px 50px 30px;
  padding: 10px 20px;
  border-radius: 15px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    value={value}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    placeholder={placeholder}
    returnKeyType={'search'}
    autoCapitalize={'none'}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
