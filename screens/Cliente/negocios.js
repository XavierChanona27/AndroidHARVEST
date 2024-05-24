import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import CartIcon from "../../components/CartIcon";
import DishRow from "../../components/dishRow";
import { getPorductsByStore } from "../../services/customer";

const Negocio = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const negocio = params;

  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPorductsByStore(negocio.id_negocio)
      .then((data) => setProductos(data))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <View>
      <CartIcon />
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.negocioImage}
            source={{ uri: negocio.images_negocio[0] }}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Icon.ArrowLeft height={24} width={24} stroke="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.negocioInfoContainer}>
          <Text style={styles.negocioTitle}>{negocio.nombre_negocio}</Text>
          <View style={styles.negocioInfo}>
            <Text>
              Descripción:{" "}
              <Text style={styles.category}>{negocio.descripcion_negocio}</Text>
            </Text>
            <Text>Dirección: {negocio.direccion_negocio}</Text>
            {/* <View style={styles.ratingContainer}>
              <Text style={styles.rating}>{negocio.starts}</Text>
            </View> */}
          </View>
        </View>
        <View>
          <Text style={styles.productsTitle}>Productos</Text>

          {isLoading ? (
            <Text>Cargando...</Text>
          ) : (
            productos.map((producto) => (
              <DishRow key={producto.id_lote} item={producto} />
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  negocioImage: {
    width: "100%",
    height: 300,
    alignSelf: "flex-start",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  negocioInfoContainer: {
    backgroundColor: "#fff",
    padding: 20,
  },
  negocioTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  category: {
    fontWeight: "bold",
  },
  negocioInfo: {
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    color: "#34D399",
    marginRight: 5,
  },
  productsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  productsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 20,
    marginLeft: 20,
  },
  product: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    position: "relative",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: "hidden",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productImageContainer: {
    position: "relative",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  plusButton: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 20,
    padding: 5,
  },
});

export default Negocio;
