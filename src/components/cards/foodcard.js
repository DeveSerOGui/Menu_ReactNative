import * as React from 'react';
import { Card, Button, Text } from 'react-native-paper';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import CalabresaDetails from '../../screens/detailsPage/detailsComidas/calabresa/index';
import QuatroQuejosDetails from '../../screens/detailsPage/detailsComidas/quatroqueijos/index';
import styles from './style';

const FoodCard = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(CalabresaDetails)} style={styles.touchableContainer}>
                <Card style={styles.cardView}>
                    <Card.Title title="Calabresa" />
                    <Card.Cover source={{ uri: 'https://tagmeimages.azureedge.net/?q=90&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/9adccff0-a335-11ed-b389-c13e510ab14b.jpg&output=jpg' }}
                        style={styles.imgFood} />
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(QuatroQuejosDetails)} style={styles.touchableContainer}>
                <Card style={styles.cardView}>
                    <Card.Title title="Quatro queijos" />
                    <Card.Cover source={{ uri: 'https://tagmeimages.azureedge.net/?q=90&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/391e6c50-a336-11ed-87ff-49781f74d6ea.jpg&output=jpg' }}
                        style={styles.imgFood} />
                </Card>
            </TouchableOpacity>
        </View>
    );
}
export default FoodCard;