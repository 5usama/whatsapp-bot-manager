import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Clipboard, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ConnectScreen({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pairingCode, setPairingCode] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  // Generate 8-digit random code
  const generatePairingCode = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      Alert.alert('Error', 'Pehle sahi phone number dalo');
      return;
    }

    const code = Math.floor(10000000 + Math.random() * 90000000).toString();
    setPairingCode(code);
    
    Alert.alert(
      'Pairing Code Generated',
      `Code: ${code}\n\nWhatsApp Web/Desktop par jaake is code se link karo.`,
      [
        { text: 'Copy Code', onPress: () => Clipboard.setString(code) },
        { text: 'OK' }
      ]
    );
  };

  const handleConnect = () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Phone number dalo');
      return;
    }

    if (!pairingCode) {
      Alert.alert('Error', 'Pehle pairing code generate karo');
      return;
    }

    // Simulate connection
    Alert.alert(
      'Connection Status',
      `Number: ${phoneNumber}\nCode: ${pairingCode}\n\nLink karne ke liye:\n1. WhatsApp Web kholo\n2. Link a Device par click karo\n3. Code paste karo: ${pairingCode}\n4. ✓ par click karo`,
      [
        {
          text: 'Already Linked',
          onPress: () => {
            setIsConnected(true);
            setTimeout(() => navigation.navigate('Dashboard'), 1000);
          }
        },
        { text: 'Cancel' }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Connect WhatsApp</Text>
      </View>

      <View style={styles.content}>
        {/* Phone Number Input */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>📱 Enter Phone Number</Text>
          <TextInput
            style={styles.phoneInput}
            placeholder="9232XXXXXXX (with country code)"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={15}
          />
          <Text style={styles.note}>WhatsApp registered number dalo</Text>
        </View>

        {/* Pairing Code Generator */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🔗 Generate Pairing Code</Text>
          <TouchableOpacity style={styles.generateButton} onPress={generatePairingCode}>
            <Icon name="qr-code" size={24} color="white" />
            <Text style={styles.generateButtonText}>Generate 8-Digit Code</Text>
          </TouchableOpacity>

          {pairingCode ? (
            <View style={styles.codeContainer}>
              <Text style={styles.codeLabel}>Your Code:</Text>
              <View style={styles.codeDisplay}>
                <Text style={styles.codeText}>{pairingCode}</Text>
                <TouchableOpacity onPress={() => Clipboard.setString(pairingCode)}>
                  <Icon name="content-copy" size={24} color="#25D366" />
                </TouchableOpacity>
              </View>
              <Text style={styles.instructions}>
                📌 WhatsApp Web/Desktop → Link a Device → Enter code
              </Text>
            </View>
          ) : null}
        </View>

        {/* Connect Button */}
        <TouchableOpacity
          style={[styles.connectButton, (!phoneNumber || !pairingCode) && styles.disabledButton]}
          onPress={handleConnect}
          disabled={!phoneNumber || !pairingCode}>
          <Icon name="link" size={24} color="white" />
          <Text style={styles.connectButtonText}>
            {isConnected ? 'Connected ✓' : 'Connect WhatsApp'}
          </Text>
        </TouchableOpacity>

        {/* Connection Steps */}
        <View style={styles.stepsCard}>
          <Text style={styles.stepsTitle}>Connection Steps:</Text>
          {[
            '1. Phone number dalo',
            '2. Generate pairing code karo',
            '3. WhatsApp Web/Desktop kholo',
            '4. "Link a Device" par click karo',
            '5. Code paste karo',
            '6. Yahan "Connect" dabao'
          ].map((step, index) => (
            <View key={index} style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  header: { backgroundColor: '#128C7E', flexDirection: 'row', alignItems: 'center', padding: 15 },
  backButton: { marginRight: 15 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: 'white' },
  content: { padding: 20 },
  card: { backgroundColor: 'white', borderRadius: 10, padding: 20, marginBottom: 15, elevation: 3 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#075E54', marginBottom: 15 },
  phoneInput: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 15, fontSize: 16, marginBottom: 10 },
  note: { fontSize: 14, color: '#666', fontStyle: 'italic' },
  generateButton: { backgroundColor: '#25D366', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 8, padding: 15, marginBottom: 15 },
  generateButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold', marginLeft: 10 },
  codeContainer: { backgroundColor: '#f8f9fa', borderRadius: 8, padding: 15, borderWidth: 1, borderColor: '#25D366', borderStyle: 'dashed' },
  codeLabel: { fontSize: 14, color: '#666', marginBottom: 5 },
  codeDisplay: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  codeText: { fontSize: 32, fontWeight: 'bold', letterSpacing: 5, color: '#075E54' },
  instructions: { fontSize: 14, color: '#666', marginTop: 10, fontStyle: 'italic' },
  connectButton: { backgroundColor: '#128C7E', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 10, padding: 18, marginVertical: 20 },
  disabledButton: { backgroundColor: '#ccc' },
  connectButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  stepsCard: { backgroundColor: 'white', borderRadius: 10, padding: 20, elevation: 3 },
  stepsTitle: { fontSize: 18, fontWeight: 'bold', color: '#075E54', marginBottom: 15 },
  stepItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  stepNumber: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#25D366', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  stepNumberText: { color: 'white', fontWeight: 'bold' },
  stepText: { fontSize: 15, color: '#333', flex: 1 }
});