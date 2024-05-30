import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; // Asegúrate de importar Feather correctamente
import { useNavigation } from '@react-navigation/native';

const Carrito = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(1);

  const add = (factor) => {
    const updatedCount = count + factor;
    if (updatedCount >= 0) {
      setCount(updatedCount);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Carrito</Text>
          <Text style={styles.subtitle}>Nombre del negocio</Text>
        </View>
      </View>
      {/* Orden */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.productContainer}>
          <Image 
            source={{uri: 'https://via.placeholder.com/100'}}
            style={styles.productImage}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.productText}>Producto 1</Text>
            <Text style={styles.price}>$50.00</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton} onPress={() => add(-1)}>
                <Feather name="minus" size={24} color="green" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{count}</Text>
              <TouchableOpacity style={styles.quantityButton} onPress={() => add(1)}>
                <Feather name="plus" size={24} color="green" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: ${50 * count}.00</Text>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>Ir a chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    position: 'relative',
    paddingVertical: 16,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
    backgroundColor: 'white',
    marginBottom: 16, // Adding margin to move the cart content down
  },
  backButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  subtitle: {
    textAlign: 'center',
    color: 'gray',
  },
  scrollView: {
    padding: 16,
    paddingBottom: 100, // To ensure the content is above the footer
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 16,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
  },
  productText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: "#888888",
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    padding: 8,
    borderRadius: 16,
    backgroundColor: "#f1f1f1",
  },
  quantity: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  footer: {
    backgroundColor: 'white',
    padding: 16,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: 'green', // Changed to green
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 16, // Added margin to separate total and button
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Carrito;
