import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import foodMenu from '../pages/foodMenu';
import Location from '../pages/Location';
import About from '../pages/About';

const { Navigator, Screen } = createBottomTabNavigator();

function CoffeeTabs() {
    return(
        <Navigator
            tabBarOptions={{
                style: { // style é o estilo das abas
                    elevation: 0, // n temos boxshadow no android, entao o elevation é a propriedade de sombra no android.
                    shadowOpacity: 0, // Para tirar a sombra no IOS
                    height: 64, // Para a aba ficar maior.
                },
                tabStyle: { // tabStyle é a estilização de cada uma das abas
                    flexDirection: 'row', // Para ter o icone e o texto um ao lado do outro.
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0, // para tirar a capacidade dele ocupar o maximo do tamanho possível.
                    width: 20,
                    height: 20,
                },
                labelStyle: { // É o texto...
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fff', // cor da barra quando NAO está selecionada
                activeBackgroundColor: '#FFD2C8', // cor da barra quando ESTÁ selecionada
                inactiveTintColor: '#c1bccc', // cor do texto quando a aba NAO está selecionada
                activeTintColor: '#FF6426', // cor do texto quando a aba está selecionada
            }}
        >
            <Screen 
                name="foodMenu" 
                component={foodMenu} 
                options={{ 
                    tabBarLabel: 'Coffees', // é o nome que aparece no botaozinho da abinha... v4 1:27:00
                    tabBarIcon: ({ color, size, focused }) => { // essa arrow function é para por o icone. // {color, size} dentro do parametro() eu desestruturei o tabBarIcon....
                        return (
                          <Ionicons name="cafe-outline" size={size} color={focused ? '#F24C0C' : color} /> // nome no icone que eu quero por // o color e size eu estou pegando ali do paramtro desestruturado. // focused ? '#8257e5' : color se ele estiver selecionado usar cor q eu passe se nao estiver selecionado usar color (cor padrao.) V4 1:41:00 Explicação ótima
                        );
                    }
                }} 
            />
            <Screen 
                name="Location" 
                component={Location}
                options={{ 
                    tabBarLabel: 'Location', // é o nome que aparece no botaozinho da abinha... v4 1:27:00
                    tabBarIcon: ({ color, size, focused }) => { // essa arrow function é para por o icone. // {color, size} dentro do parametro() eu desestruturei o tabBarIcon....
                        return (
                          <Ionicons name="location-outline" size={size} color={focused ? '#F24C0C' : color} /> // nome no icone que eu quero por // o color e size eu estou pegando ali do paramtro desestruturado. // focused ? '#8257e5' : color se ele estiver selecionado usar cor q eu passe se nao estiver selecionado usar color (cor padrao.) V4 1:41:00 Explicação ótima
                        );
                    }
                }} 
            />
            <Screen 
                name="About"
                component={About}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name ="reader-outline" size={size} color={focused ? '#F24C0C' : color}/>
                        );
                    }
                }}
            />
            
        </Navigator>
    );
}

export default CoffeeTabs;