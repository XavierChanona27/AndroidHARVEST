import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import { themeColors } from "../theme";
import PublicCard from "./PubliCard";

export default function PublicacionesRow({
  title,
  description,
  publicaciones,
}) {
  const navigation = useNavigation(); 

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
        <TouchableOpacity onPress={() => navigation.navigate("Publicaciones")}>
          <Text style={{ color: themeColors.Text, fontWeight: "bold" }}>
            Todas
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 5 }}
      >
        {Array.isArray(publicaciones) && publicaciones.length > 0 ? (
          publicaciones.map((publicacion, index) => (
            <PublicCard item={publicacion} key={index} />
          ))
        ) : (
          <Text style={{ paddingHorizontal: 16, color: "#A0AEC0" }}>
            No hay publicaciones disponibles.
          </Text>
        )}
      </ScrollView>
    </View>
  );
}
