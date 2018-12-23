import gql from 'graphql-tag';

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 8) {
      id
      title
      rating
      medium_cover_image
    }
  }
`