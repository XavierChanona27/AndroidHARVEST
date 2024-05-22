import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Notifications = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Notificaciones</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nueva Actualización</Text>
        <Text style={styles.cardBody}>Hemos lanzado una nueva actualización de la aplicación. ¡Actualízala para disfrutar de las nuevas funciones!</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Recordatorio de Evento</Text>
        <Text style={styles.cardBody}>Recuerda que tienes un evento programado para mañana a las 10:00 AM.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Mensaje de Soporte</Text>
        <Text style={styles.cardBody}>Nuestro equipo de soporte ha respondido a tu consulta. Revisa tu correo para más detalles.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Nueva Conexión</Text>
        <Text style={styles.cardBody}>Tienes una nueva solicitud de conexión de Juan Pérez. ¡Revísala ahora!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardBody: {
    fontSize: 16,
    color: '#6c757d',
  },
});

export default Notifications;
