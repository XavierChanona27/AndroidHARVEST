import { View, Text, TouchableNativeFeedback, Image, Platform, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


export default function PublicCard({ item }) {
    const navigation = useNavigation();

    return (
        <TouchableNativeFeedback
            onPress={() => navigation.navigate('Publicaciones', { ...item })}
        >
            <View style={styles.cardContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/negocios/negocio1.jpg')} // Cambiamos item.image por una imagen predeterminada
                />
                <View style={styles.cardContent}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    {/* Si necesitas mostrar el precio, puedes agregarlo aquí */}
                    {/* <Text style={styles.price}>{item.price}</Text> */}
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 30,
        marginRight: 6,
        backgroundColor: '#fff',
        ...Platform.select({
            android: {
                elevation: 5, // Agregamos elevación solo para Android
            },
        }),
    },
    image: {
        height: 150,
        width: 200,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignSelf: 'center'
    },
    cardContent: {
        padding: 16
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        color: '#888',
        fontSize: 14
    },
    price: {
        fontSize: 14,
        marginTop: 8
    }
});
