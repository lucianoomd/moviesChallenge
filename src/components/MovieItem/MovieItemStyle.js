import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constants';

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    container: {
        marginBottom: 4,
        margin: 4
    },
    header: {
        padding: 10,
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    imageContainer: {
        paddingBottom: 15,
        borderBottomColor: COLORS.WHITE,
        borderBottomWidth: 1,
    },
    image: {
        height: screenWidth,
        resizeMode: 'contain',
    }
});

export default styles;