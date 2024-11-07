import * as React from 'react';
import { Card, Button, Text } from 'react-native-paper';
import { View } from 'react-native';
import styles from './style';

const FoodCard = () => (
    <View style={styles.container}>
        <Card style={styles.cardView}>
            <Card.Title title="Calabresa"/>
            <Card.Cover source={{ uri: 'https://tagmeimages.azureedge.net/?q=90&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/9adccff0-a335-11ed-b389-c13e510ab14b.jpg&output=jpg' }}
                style={styles.imgFood} />
        </Card>
        <Card style={styles.cardView}>
            <Card.Title title="Quatro queijos"/>
            <Card.Cover source={{ uri: 'https://tagmeimages.azureedge.net/?q=90&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/391e6c50-a336-11ed-87ff-49781f74d6ea.jpg&output=jpg' }}
                style={styles.imgFood} />
        </Card>
    </View>
);

export default FoodCard;