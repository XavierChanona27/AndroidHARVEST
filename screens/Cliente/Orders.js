import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importamos los íconos de Ionicons

const Orders = ({ navigation }) => {
  // Datos de ejemplo de historiales de órdenes
  const orders = [
    {
      id: 1,
      date: 'Mayo 20, 2024',
      description: 'Pedido de comida para cena',
    },
    {
      id: 2,
      date: 'Mayo 18, 2024',
      description: 'Compra de libros en línea',
    },
    {
      id: 3,
      date: 'Mayo 15, 2024',
      description: 'Pedido de ropa en tienda en línea',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Botón de regreso */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      
      {/* Título */}
      <Text style={styles.title}>Historial de Órdenes</Text>

      {/* Lista de órdenes */}
      <ScrollView contentContainerStyle={styles.ordersContainer}>
        {orders.map(order => (
          <View key={order.id} style={styles.orderContainer}>
            <Text style={styles.orderDate}>{order.date}</Text>
            <Text style={styles.orderDescription}>{order.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  ordersContainer: {
    flexGrow: 1,
  },
  orderContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  orderDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  orderDescription: {
    fontSize: 14,
  },
});

export default Orders;
