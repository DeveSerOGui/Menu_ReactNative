import * as React from 'react';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity } from 'react-native';
import MateLeaoDetails from '../../screens/detailsPage/detailsBebidas/mateleao';
import CocaColaDetails from '../../screens/detailsPage/detailsBebidas/cocacola';
import styles from './style';

const NoalcoholDrinks = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(CocaColaDetails)} style={styles.touchableContainer}>
                <Card style={styles.cardView}>
                    <Card.Title title="Coca-Cola" subtitle="350ml" />
                    <Card.Cover
                        source={{
                            uri: 'https://drdrinksusa.com/cdn/shop/products/Coke_grande.jpg?v=1546134439',
                        }}
                        style={styles.imgFood}
                    />
                </Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate(MateLeaoDetails)} style={styles.touchableContainer}>
                <Card style={styles.cardView}>
                    <Card.Title title="Mate Leão" subtitle="300ml" />
                    <Card.Cover
                        source={{
                            uri: 'https://superprix.vteximg.com.br/arquivos/ids/206618-600-600/733776-LEAO_MATTE_PET_300ML.jpg?v=637793410681300000',
                        }}
                        style={styles.imgFood}
                    />
                </Card>
            </TouchableOpacity>
        </View>
    );
};

export default NoalcoholDrinks;
