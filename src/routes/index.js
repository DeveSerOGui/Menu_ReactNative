import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Bebidas from '../screens/bebidas';
import Pizzas from '../screens/pizzas';
import CocaColaDetails from '../screens/detailsPage/detailsBebidas/cocacola';
import MateLeaoDetails from '../screens/detailsPage/detailsBebidas/mateleao';
import MojitoDetails from '../screens/detailsPage/detailsBebidas/mojito';
import TropicalGinDetails from '../screens/detailsPage/detailsBebidas/tropicalgin';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BebidasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bebidas" component={Bebidas} />
      <Stack.Screen name="CocaColaDetails" component={CocaColaDetails} options={{ title: 'Detalhes Coca-Cola' }}/>
      <Stack.Screen name="MateLeaoDetails" component={MateLeaoDetails} options={{ title: 'Detalhes Mate-Leão' }}/>
      <Stack.Screen name="MojitoDetails" component={MojitoDetails} options={{ title: 'Detalhes Mojito' }}/>
      <Stack.Screen name="TropicalGinDetails" component={TropicalGinDetails} options={{ title: 'Detalhes da Tropical Gin' }}/>
    </Stack.Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#439660',
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Bebidas"
          component={BebidasStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Entypo name="drink" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Pizzas"
          component={Pizzas}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="pizza-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
