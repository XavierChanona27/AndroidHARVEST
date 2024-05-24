import { Text, View, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";

export default function DishRow({ item }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.producto.imagen_producto }}
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <View style={styles.nameDescriptionContainer}>
          <Text style={styles.name}>{item.producto.nombre_producto}</Text>
        </View>
        <View style={styles.priceQuantityContainer}>
          <Text style={styles.price}>${item.precio_kg}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton}>
              <Icon.Minus height={24} width={24} stroke="green" />
            </TouchableOpacity>
            <Text style={styles.quantity}>2</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Icon.Plus height={24} width={24} stroke="green" />
            </TouchableOpacity>
          </View>
        </View>
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
  },
  image: {
    width: 100,
    height: 100,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
  },
  nameDescriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#888888",
  },
  priceQuantityContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
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
});
