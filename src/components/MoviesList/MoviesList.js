import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem/MovieItem';
import styles from './MoviesListStyle';

const moviesList = ({ movies, loading, updateList }) => {

    const keyExtractor = (item, index) => String(index);

    return (
        <FlatList
            refreshControl={ 
                <RefreshControl refreshing={loading} onRefresh={updateList} />
            }
            style={styles.container}
            data={movies}
            renderItem={({item}) => <MovieItem item={item} />}
            keyExtractor={keyExtractor}
        />
    )
}

moviesList.propTypes = {
    movies: PropTypes.array,
};

moviesList.defaultProps = {
    movies: [],
}

export default moviesList;