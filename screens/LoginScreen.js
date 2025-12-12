import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PASSWORD = "admin123"; // Tum change kar lena

export default function LoginScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (password === PASSWORD) {
      navigation.navigate('Connect');
    } else {
      Alert.alert('Error', 'Galat password!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🤖</Text>
        <Text style={styles.appName}>WhatsApp Bot Manager</Text>
        <Text style={styles.tagline}>Control your bots remotely</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Enter Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          Note: Sab users ke liye same password hai
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Developed by YourName</Text>
        <Text style={styles.version}>v1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#128C7E', padding: 20 },
  logoContainer: { alignItems: 'center', marginTop: 60, marginBottom: 40 },
  logo: { fontSize: 80, marginBottom: 10 },
  appName: { fontSize: 28, fontWeight: 'bold', color: 'white', marginBottom: 5 },
  tagline: { fontSize: 16, color: '#DCF8C6' },
  formContainer: { backgroundColor: 'white', borderRadius: 15, padding: 25, elevation: 5 },
  label: { fontSize: 16, marginBottom: 10, color: '#075E54', fontWeight: '500' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ddd', borderRadius: 10, paddingHorizontal: 15, marginBottom: 20 },
  input: { flex: 1, height: 50, fontSize: 16 },
  eyeIcon: { fontSize: 20 },
  loginButton: { backgroundColor: '#25D366', borderRadius: 10, padding: 15, alignItems: 'center' },
  loginButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  note: { marginTop: 15, textAlign: 'center', color: '#666', fontSize: 14 },
  footer: { position: 'absolute', bottom: 30, left: 0, right: 0, alignItems: 'center' },
  footerText: { color: 'white', fontSize: 14 },
  version: { color: '#DCF8C6', fontSize: 12, marginTop: 5 }
});