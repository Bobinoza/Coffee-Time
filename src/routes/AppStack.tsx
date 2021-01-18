import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import Location from '../pages/Location';
import CoffeeTabs from './CoffeeTabs';
import About from '../pages/About';

const { Navigator, Screen } = createStackNavigator(); 

function AppStack() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="Landing" component={Landing}/>
                <Screen name ="Location" component={Location}/>
                <Screen name="About" component={About} />
                <Screen name="CoffeeTabs" component={CoffeeTabs}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;