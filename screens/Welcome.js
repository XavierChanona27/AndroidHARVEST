import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
// import Button from '../components/Button';
import { Button } from "react-native-ui-lib";

const Welcome = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <View style={{ width: "100%" }}>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Image
            source={require("../assets/orina.gif")}
            style={{
              height: 300,
              width: 300,
              borderRadius: 20,
            }}
          />
        </View>

        {/* content  */}

        <View
          style={{
            width: "100%",
            paddingHorizontal: 20
          }}
        >
          <Text
            style={{
              fontSize: 32,
              fontWeight: 800,
              color: COLORS.black,
            }}
          >
            Bienvenido
          </Text>

          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: "#343632",
                marginVertical: 4,
              }}
            >
              El lugar donde tú y tu negocio ayudan a reducir el desperdicio de
              frutas y verduras en la Ciudad de México
            </Text>
          </View>

          <Button
            label={"Registrarse"}
            size={Button.sizes.large}
            backgroundColor={"#18b310"}
            style={{
              marginTop: 22,
            }}
            onPress={() => navigation.navigate("Signup")}
          />

          <Button
            label={"Iniciar sesión"}
            size={Button.sizes.large}
            style={{
              marginTop: 22,
            }}
            color={"#18b310"}
            link
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
