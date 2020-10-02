import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import ScrollContailer from '../../components/ScrollContainer';
import HorizontalSlider from '../../components/HorizontalSlider';
import Vertical from '../../components/Vertical';
import Horizontal from '../../components/Horizontal';
import List from '../../components/List';
import SliderContainer from '../../components/SliderContainer';
import Slide from '../../components/Movies/Slide';

const Container = styled.View`
  margin-top: 30px;
`;

const TvPresenter = ({ loading, popular, topRated, today, thisWeek }) => {
  return (
    <ScrollContailer loading={loading}>
      <SliderContainer>
        {thisWeek.map(show => (
          <Slide
            key={show.id}
            id={show.id}
            title={show.name}
            overview={show.overview}
            votes={show.vote_average}
            backgroundImage={show.backdrop_path}
            poster={show.poster_path}
          />
        ))}
      </SliderContainer>
      <Container>
        <HorizontalSlider title={'Popular Shows'}>
          {popular.map(show => (
            <Vertical
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <HorizontalSlider title={'Top Rated'}>
          {topRated.map(show => (
            <Vertical
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <List title={'Airing Today'}>
          {today.map(show => (
            <Horizontal
              key={show.id}
              id={show.id}
              poster={show.poster_path}
              title={show.name}
              votes={show.vote_average}
              overview={show.overview}
              releaseDate={show.release_date}
            ></Horizontal>
          ))}
        </List>
      </Container>
    </ScrollContailer>
  );
};

TvPresenter.proptypes = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array.isRequired,
  topRated: PropTypes.array.isRequired,
  today: PropTypes.array.isRequired,
  thisWeek: PropTypes.array.isRequired,
};

export default TvPresenter;