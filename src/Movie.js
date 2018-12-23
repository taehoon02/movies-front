import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center;
  height: 300px;
  width: 200px;
  margin-bottom: 40px;
  position: relative;
`;

const Title = styled.span`
  background-color: white;
  width: auto;
  padding: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

const Movie = ({ id, title, rating, poster }) => (
  <Link to={`/details/${id}/`}>
    <Card background={poster}>
      <Title>
        {title} / {rating}
      </Title>
    </Card>
  </Link>
);

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;