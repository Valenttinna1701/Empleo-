// Screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 const handleLogin = () => {
  // Lógica de autenticación
  navigation.replace('Main');
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#A5D6A7"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#A5D6A7"
      />
      <View style={styles.buttonContainer}>
        <Button title="Ingresar" onPress={handleLogin} color="#4CAF50" />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Registrarse" onPress={() => navigation.navigate('Registro')} color="#8BC34A" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E8F5E9',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#388E3C',
  },
  input: {
    height: 40,
    borderColor: '#4CAF50',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color: '#388E3C',
  },
  buttonContainer: {
    marginBottom: 20,
    width: '80%',
    alignSelf: 'center',
  },
});