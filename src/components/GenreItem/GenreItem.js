import React from 'react';
import { View } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { COLORS } from '../../Constants';
import styles from './GenreItemStyle';

const genreItem = ({ name }) => (
    <View style={styles.container}>
        <CustomText text={name} fontSize={10} color={COLORS.DARKNESS} />
    </View>
);

export default genreItem;
