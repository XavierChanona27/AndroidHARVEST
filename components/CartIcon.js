import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function CartIcon({  }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.cartInfo}>
          <Text style={styles.cartItemCount}>3</Text>
        </View>
        <Text style={styles.buttonText}>Ver Carrito</Text>
        <Text style={styles.cartTotal}>$50.00</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 5,
    width: "100%",
  },
  button: {
    backgroundColor: "#FFD700",
    padding: 12,
    borderRadius: 999,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  cartInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartItemCount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginHorizontal: 8,
  },
  cartTotal: {
    fontSize: 16,
    color: "#FFFFFF",
  },
});
