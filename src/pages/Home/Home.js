import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import styles from './HomeStyle';
import Header from '../../components/Header/Header';
import MoviesList from '../../components/MoviesList/MoviesList';
import { API } from '../../Constants';

export default class Home extends Component {
  state = {
    loading: true,
    movies: [],
    currentPage: 1,
  };

  componentDidMount() {
    this.updateList();
  }

  updateList = () => {
    const { currentPage } = this.state;
    const API_SUFIX = `${API.ENDPOINT_POPULAR}${API.KEY}${API.LANGUAGE_PT_BR}${API.PAGE_PARAM}${currentPage}`;
    this.setState({ loading: true }, () => {
      axios.get(`${API.BASE_PATH}${API_SUFIX}`).then((result) => {
        this.setState({ movies: result.data.results, loading: false });
      });
    });
  }

  render() {
    const { loading, movies } = this.state;

    return (
      <View style={styles.container}>
          <Header text='MoviesChallenge' />
          { loading ? 
            <ActivityIndicator size="large" />
            : <MoviesList movies={movies} loading={loading} updateList={this.updateList} />
          }
      </View>
    );
  }
}
