import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native"; // Importar el hook de navegación
import { themeColors } from "../theme";
import NegociosCards from "./negocioscards";

export default function FeaturedRow({ title, description, stores }) {
  const navigation = useNavigation(); // Inicializar el hook de navegación

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
          <Text style={{ color: "#A0AEC0", fontSize: 12 }}>{description}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Negocios2")}>
          <Text style={{ color: themeColors.Text, fontWeight: "bold" }}>
            Todas
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        Vertical // Cambiado a horizontal para hacer scrolling horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 5 }}
      >
        {Array.isArray(stores) && stores.length > 0 ? (
          stores.map((store, index) => {
            if (store.estado_negocio === "ACTIVO") {
              return <NegociosCards item={store} key={index} />;
            }
          })
        ) : (
          <Text style={{ paddingHorizontal: 16, color: "#A0AEC0" }}>
            No hay negocios disponibles.
          </Text>
        )}
      </ScrollView>
    </View>
  );
}
