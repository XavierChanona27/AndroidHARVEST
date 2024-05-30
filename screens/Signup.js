import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import COLORS from "../constants/colors";
import Button from "../components/Button";
import RNPickerSelect from "react-native-picker-select";
import { Picker } from "react-native-ui-lib";

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [clientType, setClientType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [birthDate, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [userType, setUserType] = useState("");

  const clientTypes = [
    { label: "Cliente", value: "cliente" },
    { label: "Negocio", value: "Negocio" },
  ];
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const months = [
    { label: "January", value: "01" },
    { label: "February", value: "02" },
    { label: "March", value: "03" },
    { label: "April", value: "04" },
    { label: "May", value: "05" },
    { label: "June", value: "06" },
    { label: "July", value: "07" },
    { label: "August", value: "08" },
    { label: "September", value: "09" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
  ];

  const handleSubmit = () => {
    // Aquí puedes enviar los datos al servidor o realizar otras operaciones
    console.log("Datos enviados:", {
      email,
      password,
      name,
      lastName,
      birthDate,
      userType,
      businessName,
      phoneNumber,
      postalCode,
      neighborhood,
      address,
    });
    // Por ejemplo, puedes navegar a la página de inicio después de enviar el formulario
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
     <View style={{ paddingHorizontal: 20,  marginTop: 40}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 12,
            color: COLORS.black,
          }}
        >
          Crear cuenta
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>
            ¿Ya tengo cuenta?
          </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Iniciar sesión
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 22 }}>
        {step === 1 && (
          <View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8,
                }}
              >
                correo Electronico{" "}
              </Text>

              <TextInput
                placeholder="Ingresa tu correo electronico"
                placeholderTextColor={COLORS.black}
                keyboardType="email-address"
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingLeft: 22,
                }}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8,
                }}
              >
                {" "}
                contraseña
              </Text>

              <View
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: 22,
                }}
              >
                <TextInput
                  placeholder="Ingres tu contraseña"
                  placeholderTextColor={COLORS.black}
                  secureTextEntry={!isPasswordShown}
                  style={{
                    width: "100%",
                  }}
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity
                  onPress={() => setIsPasswordShown(!isPasswordShown)}
                  style={{
                    position: "absolute",
                    right: 12,
                  }}
                >
                  <Ionicons
                    name={isPasswordShown ? "eye-off" : "eye"}
                    size={24}
                    color={COLORS.black}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8,
                }}
              >
                Confirma tu contraseña
              </Text>

              <TextInput
                placeholder="Confirma tu password"
                placeholderTextColor={COLORS.black}
                secureTextEntry={!isPasswordShown}
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingLeft: 22,
                }}
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </View>

            <View style={{ flexDirection: "column", marginTop: 20 }}>
              <Button
                title="Siguiente"
                filled
                style={{
                  marginBottom: 10,
                }}
                onPress={nextStep}
              />
            </View>
          </View>
        )}

{step === 2 && (
        <View>
          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                marginVertical: 8,
              }}
            >
              Nombre(s)
            </Text>
            <TextInput
              placeholder="Ingresa tu nombre(s)"
              placeholderTextColor={COLORS.black}
              style={{
                width: '100%',
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                paddingLeft: 22,
              }}
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                marginVertical: 8,
              }}
            >
              Apellido(s)
            </Text>
            <TextInput
              placeholder="Ingresa tu apellido(s)"
              placeholderTextColor={COLORS.black}
              style={{
                width: '100%',
                height: 48,
                borderColor: COLORS.black,
                borderWidth: 1,
                borderRadius: 8,
                paddingLeft: 22,
              }}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                marginVertical: 8,
              }}
            >
              Fecha de nacimiento
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <TextInput
                placeholder="DD"
                placeholderTextColor={COLORS.black}
                style={{
                  flex: 1,
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingLeft: 10,
                  marginRight: 8,
                }}
                value={birthDate}
                onChangeText={setBirthDay}
              />
              <Picker
                selectedValue={birthMonth}
                onValueChange={(itemValue) => setBirthMonth(itemValue)}
                style={{
                  flex: 1,
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  marginRight: 8,
                }}
              >
                <Picker.Item label="Mes" value={null} />
                {months.map((month) => (
                  <Picker.Item key={month.value} label={month.label} value={month.value} />
                ))}
              </Picker>
              <TextInput
                placeholder="YYYY"
                placeholderTextColor={COLORS.black}
                style={{
                  flex: 1,
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingLeft: 22,
                }}
                value={birthYear}
                onChangeText={setBirthYear}
              />
            </View>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '400',
                marginVertical: 8,
              }}
            >
              Tipo de cliente
            </Text>
            <RNPickerSelect
              placeholder={{ label: 'Tipo de cuenta', value: null }}
              items={clientTypes}
              onValueChange={(value) => setClientType(value)}
              style={{
                inputAndroid: {
                  width: '100%',
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingLeft: 22,
                  color: COLORS.black, // Color del texto
                },
                iconContainer: {
                  top: 15, // Ajuste menor para el icono
                  right: 15,
                },
                placeholder: {
                  color: COLORS.black,
                  fontSize: 16, // Ajuste menor para el tamaño del placeholder
                  fontWeight: 'normal', // Ajuste menor para el peso del placeholder
                },
              }}
              value={clientType}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColorAndroid: 'transparent' }}
              Icon={() => {
                return (
                  <View
                    style={{
                      backgroundColor: 'transparent',
                      borderTopWidth: 7,
                      borderTopColor: 'black',
                      borderRightWidth: 7,
                      borderRightColor: 'black',
                      borderLeftWidth: 7,
                      borderLeftColor: 'transparent',
                      fontWeight: 'bold', // Negrita para el icono
                    }}
                  />
                );
              }}
            />
          </View>

          <View style={{ flexDirection: 'column', marginTop: 20 }}>
            <Button
              title="Siguiente"
              filled
              style={{
                marginBottom: 10,
              }}
              onPress={nextStep}
            />
            <TouchableOpacity onPress={prevStep}>
              <Text style={{ color: COLORS.primary, textAlign: 'center' }}>
                Regresar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
        {step === 3 && (
          <View>


            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 20,
                }}
              >
                Nombre del negocio
              </Text>

              <TextInput
                placeholder="Ingresa el nombre del negocio"
                placeholderTextColor={COLORS.black}
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingLeft: 22,
                }}
                value={businessName}
                onChangeText={(text) => setBusinessName(text)}
              />
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  marginVertical: 8,
                }}
              >
                Numero Telefonico
              </Text>

              <TextInput
                placeholder="Ingresa un numero celular"
                placeholderTextColor={COLORS.black}
                keyboardType="phone-pad"
                style={{
                  width: "100%",
                  height: 48,
                  borderColor: COLORS.black,
                  borderWidth: 1,
                  borderRadius: 8,
                  paddingLeft: 22,
                }}
                value={phoneNumber}
                onChangeText={(text) => setPhoneNumber(text)}
              />
            </View>

            <View>
              <View style={{ flexDirection: "row", marginBottom: 12 }}>
                {/* Codigo Postal */}
                <View style={{ flex: 1, marginRight: 8 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      marginVertical: 8,
                    }}
                  >
                    Codigo Postal
                  </Text>

                  <TextInput
                    placeholder="Codigo Postal"
                    placeholderTextColor={COLORS.black}
                    keyboardType="numeric"
                    style={{
                      height: 48,
                      borderColor: COLORS.black,
                      borderWidth: 1,
                      borderRadius: 8,
                      paddingLeft: 22,
                    }}
                    value={postalCode}
                    onChangeText={(text) => setPostalCode(text)}
                  />
                </View>

                {/* Acaldia */}
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      marginVertical: 8,
                    }}
                  >
                    Acaldia
                  </Text>

                  <TextInput
                    placeholder="Acaldia"
                    placeholderTextColor={COLORS.black}
                    style={{
                      height: 48,
                      borderColor: COLORS.black,
                      borderWidth: 1,
                      borderRadius: 8,
                      paddingLeft: 22,
                    }}
                    value={city}
                    onChangeText={(text) => setCity(text)}
                  />
                </View>
              </View>

              {/* Calle y numero */}
              <View style={{ marginBottom: 12 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Calle y numero
                </Text>

                <TextInput
                  placeholder="Ingresa Calle y numero"
                  placeholderTextColor={COLORS.black}
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingLeft: 22,
                  }}
                  value={address}
                  onChangeText={(text) => setAddress(text)}
                />
              </View>
            </View>
            <View style={{ flexDirection: "column", marginTop: 20 }}>
              <Button
                title="Registrarme"
                filled
                onPress={() => navigation.navigate("Main")}
                style={{
                  marginBottom: 10,
                }}
              />
              <TouchableOpacity onPress={prevStep}>
                <Text style={{ color: COLORS.primary, textAlign: "center" }}>
                  Regresar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
          <Text style={{ fontSize: 14 }}>Or Login with</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: COLORS.grey,
              marginHorizontal: 10,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 52,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/google.png")}
              style={{
                height: 36,
                width: 36,
                marginRight: 8,
              }}
              resizeMode="contain"
            />

            <Text>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    
  );
  
};


export default Signup;
