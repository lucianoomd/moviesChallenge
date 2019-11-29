import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import CustomText from '../CustomText/CustomText';
import styles from './MovieItemStyle';
import { COLORS, API } from '../../Constants';

const movieItem = ({ item, index, goToMovieDetails }) => {
    handleTouch = () => goToMovieDetails(index);
    return (
        <TouchableOpacity style={styles.container} onPress={handleTouch}>
            <View style={styles.header}>
                <CustomText text={item.title} color={COLORS.WHITE} fontWeight='bold' />
            </View>
            <Image style={styles.image}
                source={{uri: `${API.IMAGES_BASE_PATH}${item.poster_path}`}}
            />
        </TouchableOpacity>
)};

movieItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired
    }).isRequired,
};

export default movieItem;