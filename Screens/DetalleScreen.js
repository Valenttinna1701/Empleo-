import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetallesScreen({ route }) {
  const { empleo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{empleo.titulo}</Text>
      <Text style={styles.empresa}>{empleo.empresa}</Text>
      <Text style={styles.descripcion}>
      Resumen del Puesto:

Buscamos un diseñador UI/UX creativo y experimentado para diseñar interfaces de usuario intuitivas y atractivas. El candidato ideal debe tener un sólido conocimiento en diseño de experiencias de usuario y habilidades en la creación de interfaces visuales efectivas.

Responsabilidades:

Diseñar interfaces de usuario atractivas y funcionales basadas en las necesidades del usuario.
Crear wireframes, prototipos y maquetas de alta fidelidad.
Realizar investigaciones de usuarios y pruebas de usabilidad para mejorar la experiencia del producto.
Colaborar con desarrolladores y otros diseñadores para asegurar la implementación precisa del diseño.
Mantenerse actualizado con las tendencias de diseño y mejores prácticas.
      </Text>
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
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#388E3C',
  },
  empresa: {
    fontSize: 18,
    marginBottom: 20,
    color: '#4CAF50',
  },
  descripcion: {
    fontSize: 16,
    color: '#333',
  },
});