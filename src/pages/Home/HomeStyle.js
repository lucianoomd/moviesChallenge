import { StyleSheet, Platform } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 40 : 0,
    },
});
