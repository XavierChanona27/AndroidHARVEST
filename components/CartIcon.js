import { Text, View , TouchableOpacity} from "react-native";
import React from "react";

export default function CartIcon({  }) {
  return (
  <View classname="absolute botton-5 w-full">
    <TouchableOpacity classname="bg-yellow-500 p-3 rounded-full flex-row justify-center">
    <View classname="flex-row justify-between">
        <Text classname="text-lg font-medium">3</Text>
        
        </View>
    <Text classname="text-white font-medium">Ver Carrito</Text>
    <Text classname="text-white font-medium">$50.00</Text>

</TouchableOpacity>
    </View>

  );
}