import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Suponiendo que usas Feather icons
import { useNavigation } from '@react-navigation/native';

const Carrito = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Carrito</Text>
          <Text style={styles.subtitle}>Nombre del negocio</Text>
        </View>
      </View>
      {/* Orden */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.productContainer}>
          <View style={styles.productInfo}>
            <Image 
              source={{uri: 'https://via.placeholder.com/100'}}
              style={styles.productImage}
            />
            <View>
              <Text style={styles.productText}>Producto 1</Text>
              <Text style={styles.productText}>x1</Text>
            </View>
          </View>
          <Text style={styles.productText}>$50.00</Text>
          <TouchableOpacity style={styles.removeButton}>
            <Icon name="minus" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.totalText}>Total: $50.00</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: 'green', // Changed to green
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
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
