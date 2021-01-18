import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F24C0C',
        paddingHorizontal: 40,
        paddingVertical: 15
    },

    topBar: {
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    arrow: {
        tintColor: '#fff',
    },


    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 360,
    }

});

export default styles;