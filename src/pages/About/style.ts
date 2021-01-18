import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    scrollStyles: {
        marginTop: 10
    },

    profile: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        
    },

    profileBox: {
        padding: 20
    },

    description: {
        fontFamily: 'Poppins_400Regular',
        color: '#222',
        fontSize: 15
    },

    logo: {
        width: 184,
        height: 184,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf: 'center',
    }
})


export default styles;