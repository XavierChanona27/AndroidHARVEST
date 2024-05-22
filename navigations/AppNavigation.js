import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./DrawerNavigation";
import { Welcome, Login, Signup, Negocio, Carrito, Publicaciones, Negocios2} from "../screens";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Main" component={DrawerNavigation} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="Negocios"
          component={Negocio}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="carrito"
          component={Carrito}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="Publicaciones"
          component={Publicaciones}
          options={{
            headerShown: false,
          }}
        />
          <Stack.Screen
          name="Negocios2"
          component={Negocios2}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
