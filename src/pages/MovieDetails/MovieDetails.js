import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import styles from './MovieDetailsStyle';
import Header from '../../components/Header/Header';
import { API } from '../../Constants';

export default class MovieDetail extends Component {
    state = {
      loading: true,
      data: {}
    };
  
    componentDidMount() {
      this.updateData();
    }
  
    updateData = () => {
      const { currentPage, data } = this.state;
      const { movieID } = this.props.navigation.state.params;
      const API_SUFIX = `${API.ENDPOINT_DETAIL}${movieID}${API.KEY}${API.LANGUAGE_PT_BR}`;
      this.setState({ loading: true }, () => {
        axios.get(`${API.BASE_PATH}${API_SUFIX}`).then((result) => {
          this.setState({ data: result.data, loading: false });
        });
      });
    }
  
    reloadData = () => {
      this.setState({ data: {} },
        () => this.updateData());
    }
  
    render() {
        const { loading, data } = this.state;

        return (
            <View style={styles.container}>
                <Header text='aloooooowww' />
            </View>
        );
    }
}