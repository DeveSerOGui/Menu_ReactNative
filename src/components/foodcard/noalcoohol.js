import * as React from 'react';
import { Card, Button, Text } from 'react-native-paper';
import { View } from 'react-native';
import styles from './style';

const NoalcoholDrinks = () => (
    <View style={styles.container}>
        <Card style={styles.cardView}>
            <Card.Title title="Coca-cola" subtitle='350ml'/>
            <Card.Cover source={{ uri: 'https://drdrinksusa.com/cdn/shop/products/Coke_grande.jpg?v=1546134439' }}
                style={styles.imgFood} />
        </Card>
        <Card style={styles.cardView}>
            <Card.Title title="Mate Leão" subtitle='300ml'/>
            <Card.Cover source={{ uri: 'https://superprix.vteximg.com.br/arquivos/ids/206618-600-600/733776-LEAO_MATTE_PET_300ML.jpg?v=637793410681300000' }}
                style={styles.imgFood} />
        </Card>
    </View>
);

const AlcoholDrinks = () => (
    <View style={styles.container}>
        <Card style={styles.cardView}>
            <Card.Title title="Coca-cola" subtitle='350ml'/>
            <Card.Cover source={{ uri: 'https://drdrinksusa.com/cdn/shop/products/Coke_grande.jpg?v=1546134439' }}
                style={styles.imgFood} />
        </Card>
        <Card style={styles.cardView}>
            <Card.Title title="Mate Leão" subtitle='300ml'/>
            <Card.Cover source={{ uri: 'https://superprix.vteximg.com.br/arquivos/ids/206618-600-600/733776-LEAO_MATTE_PET_300ML.jpg?v=637793410681300000' }}
                style={styles.imgFood} />
        </Card>
    </View>
);

export default NoalcoholDrinks;