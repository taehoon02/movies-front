import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';
import Movie from './Movie';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => (
  <div>
    <h1>Movies List</h1>
    <Container>
      <Helmet>
        <title>Movies List</title>
      </Helmet>
      <Query query={ HOME_PAGE }>
        {({ loading, data, error }) => {
          if (loading) return "loading";
          if (error) return "something happened";
          return data.movies.map(movie => (
            <Movie
              id={movie.id}
              key={movie.id}
              poster={movie.medium_cover_image}
              title={movie.title}
              rating={movie.rating}
            ></Movie>
          ));
        }}
      </Query>
    </Container>
  </div>
);

export default Home;