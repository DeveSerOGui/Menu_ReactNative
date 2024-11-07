import { View } from "react-native"
import SearchBar from "../components/searchbar/searchbar"

export default function Pizzas(){
    return(
        <View style={{flex:1, justifyContent: 'center', alignContent:'center', padding:32}}>
            <SearchBar/>
        </View>
    )
}