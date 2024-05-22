import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  white: '#FFFFFF',
  black: '#000000',
  primary: '#1E90FF',
  grey: '#A9A9A9',
};

const Profile = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleChangePassword = () => {
    if (newPassword !== confirmNewPassword) {
      Alert.alert('Error', 'Las nuevas contraseñas no coinciden');
      return;
    }
    // Aquí iría la lógica para cambiar la contraseña en el backend
    Alert.alert('Éxito', 'La contraseña ha sido cambiada');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginVertical: 22 }}>
        <Text style={styles.title}>Cambiar Contraseña</Text>
      </View>

      <Text style={styles.label}>Contraseña Actual</Text>
      <TextInput
        style={styles.input}
        placeholder="Contraseña Actual"
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />

      <Text style={styles.label}>Nueva Contraseña</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Nueva Contraseña"
          secureTextEntry={!isPasswordShown}
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)}>
          <Ionicons
            name={isPasswordShown ? 'eye-off' : 'eye'}
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Confirmar Nueva Contraseña</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Confirmar Nueva Contraseña"
          secureTextEntry={!isPasswordShown}
          value={confirmNewPassword}
          onChangeText={setConfirmNewPassword}
        />
        <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)}>
          <Ionicons
            name={isPasswordShown ? 'eye-off' : 'eye'}
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <Button title="Cambiar Contraseña" onPress={handleChangePassword} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 22,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    color: COLORS.black,
  },
  label: {
    fontSize: 16,
    color: COLORS.black,
    marginVertical: 8,
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 22,
    marginBottom: 12,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 22,
    marginBottom: 12,
  },
  button: {
    marginTop: 18,
    marginBottom: 4,
  },
});

export default Profile;
