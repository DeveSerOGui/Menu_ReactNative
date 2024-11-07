import * as React from 'react';
import { Card, Button, Text } from 'react-native-paper';
import { View } from 'react-native';
import styles from './style';

const FoodCardDoce = () => (
    <View style={styles.container}>
        <Card style={styles.cardView}>
            <Card.Title title="Chocolate"/>
            <Card.Cover source={{ uri: 'https://tagmeimages.azureedge.net/?q=90&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/dc761630-a324-11ed-8876-e9704d926ba7.jpg&output=jpg' }}
                style={styles.imgFood} />
        </Card>
        <Card style={styles.cardView}>
            <Card.Title title="Banana e canela"/>
            <Card.Cover source={{ uri: 'https://tagmeimages.azureedge.net/?q=90&url=https://tagmepub.azureedge.net/pubimg/thumbs/MenuItem/19458700-bc95-11ee-bdc2-f32882f20294.jpg&output=jpg' }}
                style={styles.imgFood} />
        </Card>
    </View>
);

export default FoodCardDoce;