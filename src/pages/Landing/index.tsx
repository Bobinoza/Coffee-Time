import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';



import styles from './styles';

import coffeeWallpaper from '../../assets/images/coffeeWallpaper.png';
import locationPin from '../../assets/icons/locationPin.png';
import menu from '../../assets/icons/menu.png';
import coffee from '../../assets/icons/coffee.png';


function Home() {
    const { navigate } = useNavigation(); // const navigation = useNavigation(); em vez de fazer assim, eu desestruturei, da na mesma.
    
    function handleNavigateToCoffeeTabs() {
        navigate('CoffeeTabs') // Passo o nome da rota que eu quero ir.
    }

    function handleNavigateToLocation() {
        navigate('Location')
    }

    return (
        <View style={styles.container}>
            
            <Image source={coffeeWallpaper} style={styles.banner}/>
            
            

            <Text style={styles.title}>
                Welcome, {'\n'}
                <Text style={styles.titleBold}>What do you want to do?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton
                    style={[styles.button ,styles.buttonPrimary]}
                    onPress={handleNavigateToCoffeeTabs}
                >
                    <Image source={menu} style={styles.btnImg} />

                    <Text style={styles.buttonText}>Menu</Text>
                </RectButton>

                <RectButton 
                    style={[styles.button, styles.buttonSecondary]}
                    onPress={handleNavigateToLocation}
                >
                    <Image source={locationPin} style={styles.btnImg}/>

                    <Text style={styles.buttonText}>Location</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                That first sip feeling {' '}
                <Image source={coffee}/>
            </Text>
        </View>
    );
}

export default Home;