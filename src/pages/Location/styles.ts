import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#222',
        fontSize: 20,
        paddingHorizontal: 32,
        marginTop: 20,
    },
    
    description: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: '#222',
        paddingHorizontal: 32,
        marginTop: 5, 

    },

    mapContainer: {
        flex: 1,
        alignSelf: 'center',
        width: '95%',
        marginBottom: 10,
        marginTop: 20,
        overflow: 'hidden',
        borderRadius: 20,
    },

    map: {
        width: '100%',
        height: '100%',
    },

    mapMarker: {
        width: 90,
        height: 80,
    },

    mapMarkerContainer: {
        width: 90,
        height: 70,
        backgroundColor: '#F24C0C',
        flexDirection: 'column',
        borderRadius: 8,
        overflow: 'hidden',
        alignItems: 'center',
    },

    mapMarkerImage: {
        width: 90,
        height: 45,
        resizeMode: 'cover',

    },

    mapMarkerTitle: {
        flex: 1,
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 13,
        lineHeight: 23,
    },

    
});

export default styles;