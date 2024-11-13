import * as React from 'react';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';
import MojitoDetails from '../../screens/detailsPage/detailsBebidas/mojito';
import TropicalGinDetails from '../../screens/detailsPage/detailsBebidas/tropicalgin';
import styles from './style';

const AlcoholDrinks = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(MojitoDetails)} style={styles.touchableContainer}>
                <Card style={styles.cardView}>
                    <Card.Title title="Mojito" subtitle='350ml' />
                    <Card.Cover source={{ uri: 'https://cdn.diffords.com/contrib/stock-images/2020/07/5f0ec76d62ff3.jpg' }}
                        style={styles.imgFood} />
                </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate(TropicalGinDetails)} style={styles.touchableContainer}>
                <Card style={styles.cardView}>
                    <Card.Title title="Tropical GIN" subtitle='300ml' />
                    <Card.Cover source={{ uri: 'https://www.vatrockbar.com.br/wp-content/uploads/2023/12/tropical-gin.png' }}
                        style={styles.imgFood} />
                </Card>
            </TouchableOpacity>
        </View>
    )
};

export default AlcoholDrinks;