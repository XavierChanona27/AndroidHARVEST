import { View, Text, TouchableNativeFeedback, Image, StyleSheet } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";

export default function NegociosCards({ item }) {
    const navigation = useNavigation();

    return (
        <TouchableNativeFeedback
        onPress={() => navigation.navigate('Negocios', { ...item })}
    >
        <View style={[styles.cardContainer, styles.cardShadow]}>
            <Image
                style={styles.image}
                source={item.image}
            />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.infoContainer}>
                    <Text style={styles.category}>{item.category}</Text>
                    <View style={styles.locationContainer}>
                        <Icon.MapPin color="gray" width={15} height={15} />
                        <Text style={styles.locationText}>Nearby · {item.address}</Text>
                    </View>
                </View>
            </View>
        </View>
    </TouchableNativeFeedback>
)
}

const styles = StyleSheet.create({
cardContainer: {
    flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: '#fff',
    overflow: 'hidden', // Para evitar que el texto se salga de la tarjeta
    marginBottom: 10, // Margen inferior entre las tarjetas
    borderWidth: 1, // Agregado: borde de la tarjeta
    borderColor: '#000', // Agregado: color del borde de la tarjeta
},
cardShadow: {
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
},
image: {
    height: 150,
    width: 150,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
},
cardContent: {
    flex: 1,
    padding: 16,
},
title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8, // Espacio adicional entre el título y la descripción
},
description: {
    color: '#888',
    fontSize: 14,
},
infoContainer: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Permitir que los elementos se envuelvan en varias líneas
},
category: {
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10, // Espacio entre la categoría y la ubicación
},
locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},
locationText: {
    color: '#888',
},
});
