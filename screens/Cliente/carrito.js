import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Carrito = ({ route }) => {
  const { productos } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>
      {productos.map((producto, index) => (
        <View key={index} style={styles.product}>
          <Text>{producto.name}</Text>
          {/* Puedes mostrar más detalles del producto aquí */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  product: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default Carrito;
