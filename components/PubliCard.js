import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function PublicCard({ item }) {
  const navigation = useNavigation();

  return (
    <TouchableNativeFeedback
      onPress={() => navigation.navigate("Publicacion", { ...item })}
    >
      <View style={[styles.cardContainer, styles.cardShadow]}>
        <Image
          style={styles.image}
          source={{ uri: item.images_publicacion[0] }}
        />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.titulo_publicacion}</Text>
          <Text style={styles.price}>${item.precio_publicacion}</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 30,
    marginRight: 6,
    backgroundColor: "#fff",
    marginVertical: 10, // Margen vertical
    overflow: "hidden", // Para evitar que el texto se salga de la tarjeta
    marginBottom: 10, // Margen inferior entre las tarjetas
    borderWidth: 1, // Agregado: borde de la tarjeta
    maxWidth: 250, // Agregado: ancho máximo de la tarjeta
  },
  cardShadow: {
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
  },
  image: {
    height: 150,
    width: 250,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#888",
    fontSize: 14,
    marginTop: 8, // Margen superior entre el título y la descripción
  },
  price: {
    fontSize: 14,
    marginTop: 8,
  },
});
