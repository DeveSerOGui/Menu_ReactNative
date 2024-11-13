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
import CalabresaDetails from '../screens/detailsPage/detailsComidas/calabresa';
import QuatroQuejosDetails from '../screens/detailsPage/detailsComidas/quatroqueijos';
import ChocolateDetails from '../screens/detailsPage/detailsComidasDoces/chocolate';
import BananaCanelaDetails from '../screens/detailsPage/detailsComidasDoces/bananaCanela';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BebidasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bebidas" component={Bebidas} options={{ headerShown: false }} />
      <Stack.Screen name="CocaColaDetails" component={CocaColaDetails} options={{ title: 'Coca-Cola' }} />
      <Stack.Screen name="MateLeaoDetails" component={MateLeaoDetails} options={{ title: 'Mate-Leão' }} />
      <Stack.Screen name="MojitoDetails" component={MojitoDetails} options={{ title: 'Mojito' }} />
      <Stack.Screen name="TropicalGinDetails" component={TropicalGinDetails} options={{ title: 'Tropical Gin' }} />
    </Stack.Navigator>
  );
}
function PizzasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pizzas" component={Pizzas} options={{ headerShown: false }} />
      <Stack.Screen name="CalabresaDetails" component={CalabresaDetails} options={{ title: 'Pizza de calabresa' }} />
      <Stack.Screen name="QuatroQuejosDetails" component={QuatroQuejosDetails} options={{ title: 'Pizza de quatro queijos' }} />
      <Stack.Screen name="ChocolateDetails" component={ChocolateDetails} options={{ title: 'Pizza de chocolate' }} />
      <Stack.Screen name="BananaCanelaDetails" component={BananaCanelaDetails} options={{ title: 'Pizza Banana com canela' }} />
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
          component={PizzasStack}
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
