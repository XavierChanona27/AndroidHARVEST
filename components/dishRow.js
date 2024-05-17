import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather';
import { Image } from 'react-native';

export default function DishRow({ item }) {
  return (
    <View classname="flex-row item-center bg-white p-3 rounded-3x1">
      <Image source={item.image} style={{ width: 100, height: 100 }} />
      <View classname="flex-1 ms-3">
        <View classname="flex-row justify-between">
          <Text classname="text-lg font-medium">{item.name}</Text>
          <Text classname="text-gray-500">{item.description}</Text>


        </View>
        <View classname="flex-row justify-between">
          <Text classname="text-lg font-medium">${item.price}</Text>
          <View classname="flex-row">
            <TouchableOpacity classname="p-1 rounded-full"
              Style={{ backgroundColor: '#f1f1f1' }}>
              <Icon.Minus height={24} width={24} fill="#000" />
            </TouchableOpacity>
            <Text classname="p-1">2</Text>
            <TouchableOpacity classname="p-1 rounded-full"
              Style={{ backgroundColor: '#f1f1f1' }}>
              <Icon.Plus height={24} width={24} fill="#000" />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
  )
}