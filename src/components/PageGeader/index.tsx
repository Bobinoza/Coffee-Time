import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/icons/back.png';

import styles from './styles';

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
    const { navigate } = useNavigation();

    function handleGoBack() {
        navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton  onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" style={styles.arrow}/>
                </BorderlessButton>

                <Text style={styles.title}>{title}</Text>
            </View>

        </View>
    );

}

export default PageHeader;