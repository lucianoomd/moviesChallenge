import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CustomText from '../CustomText/CustomText';
import styles from './HeaderStyle';
import { COLORS } from '../../Constants';

const header = ({ text }) => (
    <View style={styles.container}>
        <CustomText
            text={text}
            fontSize={22}
            fontWeight='bold'
            color={COLORS.WHITE}
        />
    </View>
);  

header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default header;
