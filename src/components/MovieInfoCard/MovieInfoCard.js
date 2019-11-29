import React from 'react';
import { View, FlatList } from 'react-native';
import CustomText from '../CustomText/CustomText';
import { COLORS } from '../../Constants';
import styles from './MovieInfoCardStyle';
import GenreItem from '../GenreItem/GenreItem';

const movieInfoCard = ({ title, runtime, genres }) => {
    const keyExtractor = (item, index) => String(index);
    return (
        <View style={styles.container}>
            
            <View style={styles.secondaryLabel}>
                <CustomText text='Título' color={COLORS.WHITE} fontSize={12} />
            </View>

            <View style={styles.primaryLabel}>
                <CustomText text={title} color={COLORS.WHITE} fontWeight='400' fontSize={18} textAlign='left' />
            </View>
            
            <View style={styles.secondaryLabel}>
                <CustomText text='Duração' color={COLORS.WHITE} fontSize={12} />
            </View>

            <View style={styles.primaryLabel}>
                <CustomText text={`${runtime} minutos`} color={COLORS.WHITE} fontWeight='400' fontSize={18} />
            </View>
            
            <FlatList
                contentContainerStyle={styles.list}
                data={genres}
                renderItem={({item}) => <GenreItem name={item.name} />}
                horizontal
                keyExtractor={keyExtractor}
            />

        </View>
    );
};

export default movieInfoCard;