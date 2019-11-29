import React from 'react';
import { FlatList, RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem/MovieItem';
import styles from './MoviesListStyle';

const moviesList = ({ movies, loading, updateList, reloadList, goToMovieDetails }) => {

    const keyExtractor = (item, index) => String(index);

    return (
        <FlatList
            refreshControl={
                <RefreshControl refreshing={loading} onRefresh={reloadList} />
            }
            style={styles.container}
            data={movies}
            renderItem={({item, index}) => <MovieItem
                item={item}
                index={index}
                goToMovieDetails={goToMovieDetails}
            />}
            numColumns={2}
            keyExtractor={keyExtractor}
            onEndReached={updateList}
            onEndReachedThreshold={0.5}
        />
    )
}

moviesList.propTypes = {
    movies: PropTypes.array.isRequired,
    reloadList: PropTypes.func.isRequired,
};

export default moviesList;