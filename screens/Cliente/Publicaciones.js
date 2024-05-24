import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons } from "../../constants";
import * as Icon from "react-native-feather";
import { getActivePublications } from "../../services/customer";
import { useRoute, useNavigation } from "@react-navigation/native";

const NUMBER_OF_ITEMS_TO_FETCH = 10;

// Datos de ejemplo para las publicaciones
const publicaciones = [
  {
    id: 1,
    nombre: "Producto 1",
    descripcion: "Descripción del producto 1",
    precio: "$50",
    imagen: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    nombre: "Producto 2",
    descripcion: "Descripción del producto 2",
    precio: "$70",
    imagen: "https://via.placeholder.com/150",
  },
];

const Publicaciones = ({ navigation }) => {
  const { params } = useRoute();
  const [search, setSearch] = useState(params?.search || "");
  const [message, setMessage] = useState("");
  const [offset, setOffset] = useState(NUMBER_OF_ITEMS_TO_FETCH);
  const [publicaciones, setPublicaciones] = React.useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = () => {
    if (search === "") return;
    window.history.pushState({}, "", `?search=${search}`);
    window.location.reload();
  };

  const loadMorePublications = useCallback(async () => {
    const newPublications = await getActivePublications(
      offset,
      NUMBER_OF_ITEMS_TO_FETCH,
      search
    );

    if (!newPublications) return setMessage("No se encontraron publicaciones");
    setPublicaciones((prev) => [...prev, ...newPublications]);
    setOffset((prev) => prev + NUMBER_OF_ITEMS_TO_FETCH);
  }, [offset, search]);

  useEffect(() => {
    loadMorePublications();
  }, [loadMorePublications]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Barra de navegación */}
        <View style={styles.navigationBar}>
          {/* Icono del menú */}
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{
              height: 45,
              width: 45,
              borderRadius: 999,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.gray,
            }}
          >
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{
                height: 24,
                width: 24,
                tintColor: COLORS.black,
              }}
            />
          </TouchableOpacity>

          {/* Barra de búsqueda */}
          <View style={styles.searchBar}>
            <Icon.Search width={25} height={25} stroke="black" />
            <TextInput
              placeholder="Buscar publicaciones"
              style={styles.searchInput}
            />
          </View>

          {/* Botón de carrito */}
          <TouchableOpacity
            onPress={() => navigation.navigate("carrito")}
            style={styles.cartButton}
          >
            <Icon.ShoppingCart width={25} height={25} stroke="black" />
          </TouchableOpacity>
        </View>

        {/* <ScrollView
          showVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {/* Publicaciones 
          <View style={styles.publicacionesContainer}>
            {publicaciones.map((publicacion) => (
              <View key={publicacion.id} style={styles.card}>
                <Image
                  source={{ uri: publicacion.imagen }}
                  style={styles.cardImage}
                />
                <Text style={styles.cardTitle}>{publicacion.nombre}</Text>
                <Text style={styles.cardDescription}>
                  {publicacion.descripcion}
                </Text>
                <Text style={styles.cardPrice}>{publicacion.precio}</Text>
              </View>
            ))}
          </View>
        </ScrollView> */}

        <View style={styles.publicacionesContainer}>
          <FlatList
            data={publicaciones}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.card}>
                <Image source={{ uri: item.imagen }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.nombre}</Text>
                <Text style={styles.cardDescription}>{item.descripcion}</Text>
                <Text style={styles.cardPrice}>{item.precio}</Text>
              </View>
            )}
            onEndReached={loadMorePublications}
            onEndReachedThreshold={0.1}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 16,
  },
  navigationBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  menuButton: {
    height: 45,
    width: 45,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.gray,
  },
  menuIcon: {
    height: 24,
    width: 24,
    tintColor: COLORS.black,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 999,
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 20,
    paddingHorizontal: 12,
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  cartButton: {
    width: 45,
    height: 45,
    borderRadius: 999,
    backgroundColor: COLORS.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  publicacionesContainer: {
    marginTop: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: COLORS.gray,
    marginBottom: 8,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});

export default Publicaciones;
