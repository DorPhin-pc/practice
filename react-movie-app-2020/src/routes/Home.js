import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

export default class Home extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    );
    this.setState({
      movies,
      isLoading: false,
    });
  };
  componentDidMount() {
    this.getMovies();
  }

  renderMovie(movies) {
    return movies.map((movie) => (
      <Movie
        key={movie.id}
        id={movie.id}
        year={movie.year}
        title={movie.title}
        summary={movie.summary}
        poster={movie.medium_cover_image}
        genres={movie.genres}
      />
    ));
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>Loading...</span>
          </div>
        ) : (
          this.renderMovie(movies)
        )}
      </section>
    );
  }
}
