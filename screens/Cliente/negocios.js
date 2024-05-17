import React from "react";
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


const Negocios = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const negocio = params;
  
  

  return (
    <View>
      <CartIcon />
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.negocioImage} source={negocio.image} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon.ArrowLeft height={24} width={24} stroke="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.negocioInfoContainer}>
        <Text style={styles.negocioTitle}>{negocio.name}</Text>
        <View style={styles.negocioInfo}>
          <Text>
            Categoria: <Text style={styles.category}>{negocio.category}</Text>
          </Text>
          <Text>Dirección: {negocio.address}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>{negocio.starts}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.productsTitle}>Productos</Text>
   
    

      {
         item.productos.map((productos, index) => <DishRow item={{...productos}} key ={{index}}/>)
         }
         

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
    marginBottom: 30,
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

export default Negocios;
