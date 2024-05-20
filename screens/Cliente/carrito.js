import { View, Text , ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'


const   Carrito = () => {
  return (
   <View classname="bg-white flex-1" >
    <View classname="relative py-4 shadow-sm" >
      
      <TouchableOpacity
      styles={{backgoundColor : 'black', padding: 10, borderRadius: 10, position: 'absolute', top: 10, left: 10, zIndex: 10}}
    
      >
        <Icon.ArrowLeft height={24} width={24} stroke="#fff" /> 


      </TouchableOpacity>
      <View>
<Text classname="text-2xl font-bold text-center">Carrito</Text>
<Text classname="text-center">Nombre del negocio </Text>
      </View>
      </View>
{/*orden*/}
     <ScrollView classname="p-4" >
      {

        necocios.productos.map((producto, index) => {
          return (
            <View key={index} classname="flex flex-row justify-between items-center mb-4">
            <View classname="flex flex-row items-center">
              <Text classname="text-lg font-bold">{producto.name}</Text>
              <Text classname="text-lg font-bold">x{producto.quantity}</Text>
            </View>
            <Text classname="text-lg font-bold">${producto.price}</Text>
              <TouchableOpacity classname="bg-red-500 px-4 py-2 rounded-lg">
                <Icon.Minus height={24} width={24} stroke="#fff" /> 
                </TouchableOpacity>
          </View>
          )
         
        
        })
      }   </ScrollView>
      <View classname="bg-white p-4">
        <Text classname="text-lg font-bold">Total: $50.00</Text>
        <TouchableOpacity classname="bg-yellow-500 p-3 rounded-lg flex-row justify-center">
          <Text classname="text-white font-bold">Pagar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Carrito
