import { Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constants';

const imageHeight = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    headerBackground: {
        flex: 1,
        backgroundColor: COLORS.DARKNESS,
    },
    textWhite: {
        color: COLORS.WHITE
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.DARK_GRAY,
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 20,
        paddingBottom: 8
    },
    image: {
        height: imageHeight / 2,
        width: imageHeight / 3,
        resizeMode: 'contain',
        marginRight: 12
    },
    descriptionContainer: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    secondaryText: {
        marginBottom: 8
    }
});

export default styles;