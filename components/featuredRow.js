import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import NegociosCards from "./negocioscards";

export default function FeaturedRow({ title, description, stores }) {
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
        <TouchableOpacity>
          <Text
            style={{ color: themeColors.Text, fontWeight: "bold" }}
            onPress={() => navigation.navigate("Negocios2")}
          >
            Todas
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        vertical
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15, paddingVertical: 5 }}
      >
        {stores.map((store, index) => {
          if (store.estado_negocio === "ACTIVO") {
            return <NegociosCards item={store} key={index} />;
          }
        })}
      </ScrollView>
    </View>
  );
}
