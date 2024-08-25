import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';

// Datos de ejemplo para los empleos
const empleos = [
  { id: '1', titulo: 'Desarrollador Frontend', empresa: 'TechCo', descripcion: 'Desarrollo de interfaces de usuario modernas y responsivas.' },
  { id: '2', titulo: 'Diseñador UX/UI', empresa: 'DesignStudio', descripcion: 'Creación de experiencias de usuario intuitivas y atractivas.' },
  { id: '3', titulo: 'Ingeniero de Software', empresa: 'SoftwareSolutions', descripcion: 'Desarrollo de aplicaciones robustas y escalables.' },
  // Añade más empleos según sea necesario
];

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.empleoItem}
      onPress={() => navigation.navigate('Detalles', { empleo: item })}
    >
      <Text style={styles.empleoTitulo}>{item.titulo}</Text>
      <Text style={styles.empleoEmpresa}>{item.empresa}</Text>
      <Text style={styles.empleoDescripcion}>{item.descripcion}</Text>
    </TouchableOpacity>
  );

  const handleLogout = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Auth' }],
      })
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empleos Disponibles</Text>
      <FlatList
        data={empleos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="Cerrar Sesión" onPress={handleLogout} color="#F44336" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8F5E9',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#388E3C',
  },
  empleoItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  empleoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#388E3C',
  },
  empleoEmpresa: {
    fontSize: 14,
    color: '#4CAF50',
    marginBottom: 5,
  },
  empleoDescripcion: {
    fontSize: 14,
    color: '#333',
  },
});