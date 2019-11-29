import React, { Component } from 'react';
import { View, Image } from 'react-native';
import axios from 'axios';
import styles from './MovieDetailsStyle';
import Header from '../../components/Header/Header';
import CustomText from '../../components/CustomText/CustomText';
import COLORS from '../../Constants/Colors';
import { API } from '../../Constants';
import MovieInfoCard from '../../components/MovieInfoCard/MovieInfoCard';

export default class MovieDetail extends Component {
  
  static navigationOptions = ({ navigation }) => ({
      headerTintColor: '#fff',
      headerBackground: <View style={styles.headerBackground} />,
      headerTitle: navigation.state.params.title
  });

  state = {
    loading: true,
    data: {}
  };

  componentDidMount() {
    this.updateData();
  }

  updateData = () => {
    const { id } = this.props.navigation.state.params;
    const API_SUFIX = `${API.ENDPOINT_DETAIL}${id}${API.KEY}${API.LANGUAGE_PT_BR}`;
    this.setState({ loading: true }, () => {
      axios.get(`${API.BASE_PATH}${API_SUFIX}`).then((result) => {
        this.setState({ data: result.data, loading: false });
      });
    });
  }

  render() {
    const { loading, data } = this.state;
    console.log('111: ', data);
    return (
      <View style={styles.container}>
          <View style={styles.rowContainer}>
            <Image
              style={styles.image}
              source={{uri: `${API.IMAGES_BASE_PATH}${data.poster_path}`}}
            />
            <MovieInfoCard title={data.title} runtime={data.runtime} genres={data.genres} />
          </View>
          <View style={styles.descriptionContainer}>
            <View style={styles.secondaryText}>
              <CustomText text='Sinopse' textAlign='left' />
            </View>
            <CustomText text={data.overview} textAlign='left' />
          </View>
        </View>
    );
  }
}