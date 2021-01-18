import { StatusBar } from 'expo-status-bar';
import React from 'react';

import AppLoading from 'expo-app-loading';
 // AppLoading é um componente de carregamento //Estou colocando por conta da fonte, para aparecer X tela até as fontes estarem carregadas.
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';


// <> </>    fragment. é como se fosse uma View, mas ela n é passada pra tela...
// style="light"  muda a or nos itens da status bar. se eu por "dark" fica preto. ctrl+espaço aparecem mais opções


export default function App() {
  //Carregamento das fontes de texto.
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  //Enquanto as fontes n estiverem carregadas, mostrar AppLoading
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}


