import React from 'react';
import styled from 'styled-components/native';
import Slide from '../../components/Slide';
import Vertical from '../../components/Vertical';
import Horizontal from '../../components/Horizontal';
import ScrollContainer from '../../components/ScrollContainer';
import HorizontalSlider from '../../components/HorizontalSlider';
import SliderContainer from '../../components/SliderContainer';
import List from '../../components/List';
import PropTypes from 'prop-types';

const Container = styled.View``;

const MoviesPresenter = ({
  loading,
  nowPlaying,
  popular,
  upcoming,
  refreshFn,
}) => {
  return (
    <ScrollContainer
      contentContainerStyle={{
        flex: loading ? 1 : 'auto',
        justifyContent: loading ? 'center' : 'flex-start',
      }}
      refreshFn={refreshFn}
      loading={loading}
    >
      <SliderContainer>
        {nowPlaying.map(movie => (
          <Slide
            key={`now_${movie.id}`}
            id={movie.id}
            title={movie.original_title}
            overview={movie.overview}
            votes={movie.vote_average}
            backgroundImage={movie.backdrop_path}
            poster={movie.poster_path}
          />
        ))}
      </SliderContainer>
      <Container>
        <HorizontalSlider title={'Popular Movies'}>
          {popular.map(movie => (
            <Vertical
              key={`popular_${movie.id}`}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
        <List title={'Coming soon'}>
          {upcoming.map(movie => (
            <Horizontal
              key={`upcoming_${movie.id}`}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              votes={movie.vote_average}
              overview={movie.overview}
              releaseDate={movie.release_date}
            />
          ))}
        </List>
      </Container>
    </ScrollContainer>
  );
};

MoviesPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  nowPlaying: PropTypes.array.isRequired,
  popular: PropTypes.array.isRequired,
  upcoming: PropTypes.array.isRequired,
  refreshFn: PropTypes.func.isRequired,
};

export default MoviesPresenter;
