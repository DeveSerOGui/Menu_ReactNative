import { View, ScrollView, Text } from "react-native"
import SearchBar from "../components/searchbar/searchbar"
import styles from "./style"
import FoodCard from "../components/foodcard/foodcard"
import FoodCardDoce from "../components/foodcard/foodcarddoce"

export default function Pizzas() {
    return (
        <ScrollView style={styles.container}>
            <SearchBar style={styles.seachBar} />
            <Text style={styles.titulos}>
                Pizzas salgadas
            </Text>
            <FoodCard />
            <Text style={styles.titulos}>
                Pizzas doces
            </Text>
            <FoodCardDoce />
        </ScrollView>
    )
}