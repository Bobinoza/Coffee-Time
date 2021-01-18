import React from 'react';
import { Text, View, Image, ScrollView, } from 'react-native';

import PageHeader from '../../components/PageGeader';

import styles from './styles';

class foodMenu extends React.Component {
    render() {
        return (
            <>
                <PageHeader title="Coffee List" />

                <ScrollView>
                    <View style={styles.container}>

                        <View style={styles.viewCoffee}>
                            <View style={styles.profile}>
                                <Image
                                    style={styles.avatar}
                                    source={{ uri: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }}
                                />

                                <View style={styles.profileInfo}>
                                    <Text style={styles.name}>ESPRESSO</Text>
                                    <Text style={styles.subject}>Espresso with a little milk foam (drink size about 50 ml). Served in an espresso cup.</Text>
                                </View>
                            </View>

                            <View style={styles.footer}>

                                <Text style={styles.price}>$ 6,00</Text>

                            </View>
                        </View>

                        <View style={styles.viewCoffee}>
                            <View style={styles.profile}>
                                <Image
                                    style={styles.avatar}
                                    source={{ uri: 'https://images.unsplash.com/photo-1516195700843-20a1d5e93d2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
                                />

                                <View style={styles.profileInfo}>
                                    <Text style={styles.name}>MACCHIATO</Text>
                                    <Text style={styles.subject}>Rich iced coffee made of espresso, milk and ice. Flavoured syrup can be added (about 300 ml).</Text>
                                </View>
                            </View>

                            <View style={styles.footer}>

                                <Text style={styles.price}>$ 7,50</Text>

                            </View>
                        </View>

                        <View style={styles.viewCoffee}>
                            <View style={styles.profile}>
                                <Image
                                    style={styles.avatar}
                                    source={{ uri: 'https://images.unsplash.com/photo-1555894956-7ea912c3c887?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' }}
                                />

                                <View style={styles.profileInfo}>
                                    <Text style={styles.name}>FLAT WHITE</Text>
                                    <Text style={styles.subject}>Cold Caffè mocha. Prepared like iced latte, but garnished and flavoured like caffè mocha. </Text>
                                </View>
                            </View>

                            <View style={styles.footer}>

                                <Text style={styles.price}>$ 8,00</Text>

                            </View>
                        </View>

                        <View style={styles.viewCoffee}>
                            <View style={styles.profile}>
                                <Image
                                    style={styles.avatar}
                                    source={{ uri: 'https://images.unsplash.com/photo-1501006094252-8dc90bfd2c3f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' }}
                                />

                                <View style={styles.profileInfo}>
                                    <Text style={styles.name}>COLD BREW</Text>
                                    <Text style={styles.subject}>Cold Caffè mocha. Prepared like iced latte, but garnished and flavoured like caffè mocha.</Text>
                                </View>
                            </View>

                            <View style={styles.footer}>

                                <Text style={styles.price}>$ 15,90</Text>

                            </View>
                        </View>

                        <View> 
                            <View style={styles.profile}>
                                <Image
                                    style={styles.avatar}
                                    source={{ uri: 'https://images.unsplash.com/photo-1571328003758-4a3921661729?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }}
                                />

                                <View style={styles.profileInfo}>
                                    <Text style={styles.name}>ICED LATTE</Text>
                                    <Text style={styles.subject}>Cold Caffè mocha. Prepared like iced latte, but garnished and flavoured like caffè mocha.</Text>
                                </View>
                            </View>

                            <View style={styles.footer}>

                                <Text style={styles.price}>$ 17,00</Text>

                            </View>
                        </View>

                    
                    </View>
                </ScrollView>
            </>
        );
    }

}

export default foodMenu;