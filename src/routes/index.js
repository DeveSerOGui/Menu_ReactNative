import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Bebidas from '../screens/bebidas';
import Pizzas from '../screens/pizzas';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo'

  

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#439660',
                    headerShown: false
                }}
            >
                
                <Screen

                    name="Bebidas"
                    component={Bebidas}
                    options={{
                        tabBarIcon: ({ size, color }) =>
                            <Entypo name='drink'
                                size={size}
                                color={color} />
                    }}
                />
                <Screen
                    name="Pizzas"
                    component={Pizzas}
                    options={{
                        tabBarIcon: ({ size, color }) =>
                            <Ionicons name='pizza-outline'
                                size={size}
                                color={color}
                            />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}
