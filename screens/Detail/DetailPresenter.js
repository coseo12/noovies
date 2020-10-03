import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import ScrollContainer from '../../components/ScrollContainer';
import Poster from '../../components/Poster';
import Votes from '../../components/Votes';
import { apiImage } from '../../api';
import { formatDate } from '../../utils';

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  align-items: center;
  justify-content: flex-end;
  height: ${Dimensions.get('window').height / 4}px;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const Title = styled.Text`
  color: #ffffff;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 15px;
`;

const Data = styled.View`
  padding: 0 30px;
  margin-top: 30px;
`;

const DataName = styled.Text`
  color: #ffffff;
  opacity: 0.8;
  font-weight: 800;
  margin-bottom: 15px;
  margin-top: 30px;
`;

const DataValue = styled.Text`
  color: #ffffff;
  opacity: 0.8;
  font-weight: 500;
`;

const DetailPresenter = ({ results, loading, refreshFn }) => {
  return (
    <ScrollContainer
      refreshFn={refreshFn}
      loading={loading}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <Header>
        <BG source={{ uri: apiImage(results.backgroundImage, '-') }} />
        <Container>
          <Poster url={results.poster} />
          <Info>
            <Title>{results.title}</Title>
            {results.votes && <Votes votes={results.votes} />}
          </Info>
        </Container>
      </Header>
      <Data>
        {results.overview && (
          <>
            <DataName>Overview</DataName>
            <DataValue>{results.overview}</DataValue>
          </>
        )}
        {results.spoken_languages && (
          <>
            <DataName>Language</DataName>
            <DataValue>
              {results.spoken_languages.map(l => `${l.name} `)}
            </DataValue>
          </>
        )}
        {(results.release_date || results.first_air_date) && (
          <>
            <DataName>
              {results.release_date ? 'Release Date' : 'First Air Date'}
            </DataName>
            <DataValue>
              {formatDate(
                results.release_date
                  ? results.release_date
                  : results.first_air_date
              )}
            </DataValue>
          </>
        )}
        {results.status && (
          <>
            <DataName>Status</DataName>
            <DataValue>{results.status}</DataValue>
          </>
        )}
        {results.runtime && (
          <>
            <DataName>Runtime</DataName>
            <DataValue>{results.runtime} minutes</DataValue>
          </>
        )}
        {results.genres && (
          <>
            <DataName>Genres</DataName>
            <DataValue>
              {results.genres.map((g, idx) =>
                results.genres.length - 1 === idx ? g.name : `${g.name}, `
              )}
            </DataValue>
          </>
        )}

        {results.number_of_episodes && (
          <>
            <DataName>Seasons / Episodes</DataName>
            <DataValue>
              {results.number_of_seasons} / {results.number_of_episodes}
            </DataValue>
          </>
        )}
        {loading && (
          <ActivityIndicator
            style={{
              marginTop: 30,
            }}
            color="#ffffff"
            size="small"
          />
        )}
      </Data>
    </ScrollContainer>
  );
};

DetailPresenter.propTypes = {
  results: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  refreshFn: PropTypes.func.isRequired,
};

export default DetailPresenter;
