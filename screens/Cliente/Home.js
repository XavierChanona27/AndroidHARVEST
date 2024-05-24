import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, icons } from "../../constants";
import Categories from "../../components/categories";
import { featured, publicactions } from "../../constants";
import FeaturedRow from "../../components/featuredRow";
import PublicacionesRow from "../../components/PublicacionesRow";
import * as Icon from "react-native-feather";
import { getActivePublications, getActiveStores } from "../../services/customer";

const Home = ({ navigation }) => {
  const [publications, setPublications] = React.useState([]);
  const [stores, setStores] = React.useState([]);

  React.useEffect(() => {
    getActivePublications(0, 10, "").then((data) => setPublications(data));
    getActiveStores().then((data) => setStores(data));
  }, []);
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          padding: 16,
        }}
      >
        {/* Barra de navegación */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 999,
              borderWidth: 1,
              flex: 1,
              marginHorizontal: 20,
              paddingHorizontal: 12,
            }}
          >
            <Icon.Search width={25} height={25} stroke="black" />
            <TextInput
              placeholder="Negocios"
              style={{ marginLeft: 8, flex: 1 }}
            />
          </View>

          {/* Botón de carrito */}
          <TouchableOpacity
            onPress={() => navigation.navigate("carrito")}
            style={{
              width: 45,
              height: 45,
              borderRadius: 999,
              backgroundColor: COLORS.gray,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon.ShoppingCart width={25} height={25} stroke="black" />
          </TouchableOpacity>
        </View>

        <ScrollView
          showVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {/* Categorías */}
          <Categories />

          {/* Publicaciones */}
          <View style={{ marginTop: 20 }}>
            <PublicacionesRow
              title={publicactions.title}
              description={publicactions.description}
              publicaciones={publications}
            />
          </View>

          {/* Destacados */}
          <View style={{ marginTop: 20 }}>
            <FeaturedRow
              title={featured.title}
              description={featured.description}
              stores={stores}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
