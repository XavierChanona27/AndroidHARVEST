import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Icon from "react-native-feather";

export default function DishRow({ item }) {
  const [count, setCount] = useState(0);

  const add = (factor) => {
    const updatedCount = count + factor;
    if (updatedCount >= 0) {
      setCount(updatedCount);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.producto.imagen_producto }}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.producto.nombre_producto}</Text>
        <Text style={styles.stock}>Quedan {item.producto.stock} Kg</Text>
        <Text style={styles.price}>${item.precio_kg} por Kg</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={() => add(-1)}>
            <Icon.Minus height={24} width={24} stroke="blue" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{count}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={() => add(1)}>
            <Icon.Plus height={24} width={24} stroke="blue" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Agregar a bolsa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  stock: {
    fontSize: 14,
    color: "#888888",
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    color: "#888888",
    marginTop: 4,
  },
  buttonContainer: {
    justifyContent: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    justifyContent: "center",
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
  addButton: {
    backgroundColor: "#00BFFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
    alignItems: "center",
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
