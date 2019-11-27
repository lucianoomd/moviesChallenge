import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import TitleText from '../TitleText/TitleText';
import styles from './MovieItemStyle';
import { COLORS, API } from '../../Constants';

const movieItem = ({ item }) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <View style={styles.header}>
                <TitleText text={item.title} color={COLORS.WHITE} />
            </View>
            <Image style={styles.image}
                source={{uri: `${API.IMAGES_BASE_PATH}${item.poster_path}`}}
            />
        </View>
    </View>
);

movieItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired
    }).isRequired,
};

export default movieItem;