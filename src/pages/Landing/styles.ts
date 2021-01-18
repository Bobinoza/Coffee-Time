import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
        justifyContent: 'center',
        padding: 40,
        
    },

    banner: {
        width: '100%',
        maxHeight: 250,
        resizeMode: 'contain',
    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#222',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 60,
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
        color: '#F24C0C',
        fontSize: 20,
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 50,
        padding: 24,
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },

    buttonPrimary: {
        backgroundColor: '#F24C0C',
    },

    buttonSecondary: {
        backgroundColor: '#36241c'
    },

    btnImg: {
        tintColor: '#fff'
    },

    buttonText: {
        fontFamily: 'Archivo_700Bold',
        color: '#f0f0f7',
        fontSize: 20,
    },

    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#F24C0C',
        lineHeight: 20,
        maxWidth: 160,
        marginTop: 40,
    },

    

});

export default styles;