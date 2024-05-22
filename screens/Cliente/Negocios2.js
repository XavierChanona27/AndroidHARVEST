import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const Negocios2 = ({ navigation }) => {
  // Datos de ejemplo de negocios
  const negocios = [
    {
      id: 1,
      name: 'Restaurante Italiano',
      description: 'Disfruta de auténtica cocina italiana.',
      location: '123 Calle Principal, Ciudad',
      // image: require('../assets/negocios/negocio1.jpg'), // Comenta o elimina esta línea
    },
    {
      id: 2,
      name: 'Restaurante Italiano',
      description: 'Disfruta de auténtica cocina italiana.',
      location: '123 Calle Principal, Ciudad',
      // image: require('../assets/negocios/negocio1.jpg'), // Comenta o elimina esta línea
    },
    // Agrega más negocios si es necesario
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Negocios</Text>
      {negocios.map(business => (
        <View key={business.id} style={styles.businessCard}>
          {/* <Image source={business.image} style={styles.businessImage} /> */}
          <View style={styles.businessDetails}>
            <Text style={styles.businessName}>{business.name}</Text>
            <Text style={styles.businessDescription}>{business.description}</Text>
            <Text style={styles.businessLocation}>{business.location}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  businessCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  businessImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  businessDetails: {
    flex: 1,
    padding: 10,
  },
  businessName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  businessDescription: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 5,
  },
  businessLocation: {
    fontSize: 14,
    color: '#6c757d',
  },
});

export default Negocios2;
