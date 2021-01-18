import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import PageHeader from '../../components/PageGeader';

import styles from './style';

import coffeeAbout from '../../assets/images/coffeeAbout.png';

function About()  {
    return (
        <View style={styles.container}>

            <PageHeader title="About us"/>

            <ScrollView
                style={styles.scrollStyles}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                <View style={styles.profile}>
                    

                    <View style={styles.profileBox}>
                        
                        <Text style={styles.description}>
                            What is Lorem Ipsum?
                            {'\n'}{'\n'}
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
                            leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                            with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            {'\n'}{'\n'}
                            Where does it come from?
                            {'\n'}{'\n'}
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
                            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
                            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from 
                            a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the 
                            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum 
                            et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on 
                            the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum 
                            dolor sit amet..", comes from a line in section 1.10.32.
                            
                            
                        </Text>
                    </View>

                    <Image 
                        style={styles.logo}
                        source={coffeeAbout}
                    />
                </View>
                
            </ScrollView>
            
        </View>
    )
}

export default About;

