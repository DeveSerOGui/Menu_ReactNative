import { View, Text, ScrollView } from "react-native"
import SearchBar from "../components/searchbar/searchbar"
import styles from "./style"
import NoalcoholDrinks from "../components/foodcard/noalcoohol"
import AlcoholDrinks from "../components/foodcard/alcoohol"

export default function Bebidas(){
    return(
        <ScrollView style={styles.container}> 
            <SearchBar style={styles.seachBar}/>
            <Text style={styles.titulos}>Bebidas não acoólicas</Text>
            <NoalcoholDrinks/>
            <Text style={styles.titulos}>Bebidas acoólicas</Text>
            <AlcoholDrinks/>
        </ScrollView>
    )
}