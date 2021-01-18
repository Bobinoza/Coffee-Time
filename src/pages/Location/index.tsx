import React from 'react';
import { Text, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import PageHeader from '../../components/PageGeader';

import styles from './styles';

const Location = () => {
    return (
        <>
            <View style={styles.container}>

                <PageHeader title="Location"/>

                <Text style={styles.title}>Welcome.</Text>
                <Text style={styles.description}>Find the store nearest you on the map.</Text>

                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: -30.0470286,
                            longitude: -51.2325474,
                            latitudeDelta: 0.013,
                            longitudeDelta: 0.013,
                        }}
                    >

                        <Marker
                            style={styles.mapMarker}
                            coordinate={{
                                latitude: -30.0470286,
                                longitude: -51.2325474,

                            }}
                        >
                            <View style={styles.mapMarkerContainer}>
                                <Image 
                                    style={styles.mapMarkerImage} 
                                    source={{ uri: 'https://images.unsplash.com/photo-1527596428171-7885b82c91c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=677&q=80' }}
                                />
                                <Text style={styles.mapMarkerTitle}>Coffee Shop</Text>
                            </View>
                            
                        </Marker>

                        <Marker
                            style={styles.mapMarker}
                            coordinate={{
                                latitude: -30.0562309,
                                longitude: -51.2267072,
                            }}
                        >
                            <View style={styles.mapMarkerContainer}>
                                <Image 
                                    style={styles.mapMarkerImage} 
                                    source={{ uri: 'https://images.unsplash.com/photo-1446226760091-cc85becf39b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80' }}
                                />
                                <Text style={styles.mapMarkerTitle}>Coffee Shop</Text>
                            </View>
                            
                        </Marker>

                        <Marker
                            style={styles.mapMarker}
                            coordinate={{
                                latitude: -30.044773,
                                longitude: -51.2170265,
                            }}
                        >
                            <View style={styles.mapMarkerContainer}>
                                <Image 
                                    style={styles.mapMarkerImage} 
                                    source={{ uri: 'https://images.unsplash.com/photo-1516953951091-5051d8bebb74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' }}
                                />
                                <Text style={styles.mapMarkerTitle}>Coffee Shop</Text>
                            </View>
                            
                        </Marker>

                    </MapView>
                </View>
            </View>
        </>
    )

}

export default Location;