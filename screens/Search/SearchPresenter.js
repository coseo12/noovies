import React from 'react';
import styled from 'styled-components/native';
import Input from '../../components/Input';
import PropTypes from 'prop-types';
import HorizontalSlider from '../../components/HorizontalSlider';
import Vertical from '../../components/Vertical';

const Container = styled.ScrollView`
  background-color: #000000;
  padding-top: 10px;
`;

const SearchPresenter = ({ movies, shows, keyword, onChange, onSubmit }) => {
  return (
    <Container>
      <Input
        placeholder={'Write a keyword'}
        value={keyword}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {movies && movies.length > 0 && (
        <HorizontalSlider title={'Movies results'}>
          {movies.map(movie => (
            <Vertical
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              votes={movie.vote_average}
              overview={movie.overview}
              releaseDate={movie.release_date}
            />
          ))}
        </HorizontalSlider>
      )}
      {shows && shows.length > 0 && (
        <HorizontalSlider title={'TV results'}>
          {shows.map(show => (
            <Vertical
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.original_title}
              votes={show.vote_average}
              overview={show.overview}
              releaseDate={show.first_air_date}
            />
          ))}
        </HorizontalSlider>
      )}
    </Container>
  );
};

SearchPresenter.propTypes = {
  keyword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired,
  shows: PropTypes.array.isRequired,
};

export default SearchPresenter;
