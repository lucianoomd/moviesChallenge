import { StyleSheet } from 'react-native';
import { COLORS } from '../../Constants';

const styles = StyleSheet.create({
    container: {
        flex: 2,
        paddingBottom: 15,
        marginTop: 4,
        height: 250,
    },
    header: {
        height: 50,
        backgroundColor: COLORS.TRANSPARENT_BLACK,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 1
    },
    image: {
        flex: 1,
        maxWidth: 50,
        resizeMode: 'contain'
    }
});

export default styles;