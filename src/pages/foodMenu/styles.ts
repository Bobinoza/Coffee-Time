import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
        //borderWidth: 1,
        borderColor: '#222',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden', // Para o que estiver dentro do box ocupar só o espaço de dentro do box.
        
    },

    viewCoffee: {
        borderBottomWidth: 0.4,
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar: {
        width: 84,
        height: 84,
        borderRadius: 5,
        backgroundColor: '#eee'
    },

    profileInfo: {
      marginLeft:  16,
      maxWidth: 220,
    },

    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#222',
        fontSize: 20,

    },

    subject: {
        fontFamily: 'Poppins_400Regular',
        color: '#222',
        fontSize: 12,
        marginTop: 4,
    },

    footer: {
        paddingLeft: 24,
        paddingBottom: 20
    },

    price: {
        fontSize: 16,
        color: '#119100',
        fontFamily: 'Archivo_700Bold',
    }
});

export default styles;