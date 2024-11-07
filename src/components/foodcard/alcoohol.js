import * as React from 'react';
import { Card, Button, Text } from 'react-native-paper';
import { View } from 'react-native';
import styles from './style';

const AlcoholDrinks = () => (
    <View style={styles.container}>
        <Card style={styles.cardView}>
            <Card.Title title="Mojito" subtitle='350ml'/>
            <Card.Cover source={{ uri: 'https://cdn.diffords.com/contrib/stock-images/2020/07/5f0ec76d62ff3.jpg' }}
                style={styles.imgFood} />
        </Card>
        <Card style={styles.cardView}>
            <Card.Title title="Tropical GIN" subtitle='300ml'/>
            <Card.Cover source={{ uri: 'https://www.vatrockbar.com.br/wp-content/uploads/2023/12/tropical-gin.png' }}
                style={styles.imgFood} />
        </Card>
    </View>
);

export default AlcoholDrinks;