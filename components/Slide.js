import React from 'react';
import styled from 'styled-components/native';
import TouchableBtn from './TouchableBtn';
import PropTypes from 'prop-types';
import { apiImage } from '../api';
import { trimText } from '../utils';
import Poster from './Poster';
import Votes from './Votes';

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const BG = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 7px;
`;

const VotesContainer = styled.View`
  margin-bottom: 7px;
`;

const Overview = styled.Text`
  color: rgb(220, 220, 220);
  font-size: 14px;
  font-weight: 500;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 7px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
`;

const Slide = ({
  id,
  title,
  backgroundImage,
  votes,
  overview,
  poster,
  releaseDate,
  isTv,
}) => {
  return (
    <Container>
      <BG source={{ uri: apiImage(backgroundImage) }} />
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 20)}</Title>
          <VotesContainer>
            <Votes votes={votes} />
          </VotesContainer>
          <Overview>{trimText(overview, 100)}</Overview>
          <TouchableBtn
            id={id}
            title={title}
            poster={poster}
            backgroundImage={backgroundImage}
            votes={votes}
            overview={overview}
            releaseDate={releaseDate}
            isTv={isTv}
          >
            <Button>
              <ButtonText>View details</ButtonText>
            </Button>
          </TouchableBtn>
        </Data>
      </Content>
    </Container>
  );
};

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number,
  backgroundImage: PropTypes.string,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
  isTv: PropTypes.bool,
};

export default Slide;
