import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import styles from './HomeStyle';
import Header from '../../components/Header/Header';
import MoviesList from '../../components/MoviesList/MoviesList';
import { API } from '../../Constants';

export default class Home extends Component {
  static navigationOptions = () => ({
    header: <Header text='MoviesChallenge' />
  });

  state = {
    loading: true,
    movies: [],
    currentPage: 1,
  };

  componentDidMount() {
    this.updateList();
  }

  updateList = () => {
    const { currentPage, movies } = this.state;
    const API_SUFIX = `${API.ENDPOINT_POPULAR}${API.KEY}${API.LANGUAGE_PT_BR}${API.PAGE_PARAM}${currentPage}`;
    this.setState({ loading: true }, () => {
      axios.get(`${API.BASE_PATH}${API_SUFIX}`).then((result) => {
        this.setState({ movies: movies.concat(result.data.results), loading: false, currentPage: currentPage + 1 });
      });
    });
  }

  reloadList = () => {
    this.setState({ movies: [], currentPage: 1 },
      () => this.updateList());
  }

  goToMovieDetail = () => {
    this.props.navigation.navigate('MovieDetail');
  }

  render() {
    const { loading, movies } = this.state;

    return (
      <View style={styles.container}>
          {/* <Header text='MoviesChallenge' /> */}
          <MoviesList
            movies={movies}
            loading={loading}
            reloadList={this.reloadList}
            updateList={this.updateList}
          />
      </View>
    );
  }
}
