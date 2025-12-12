import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DashboardScreen({ navigation }) {
  const [selectedNumber, setSelectedNumber] = useState('');
  const [connectedDevices, setConnectedDevices] = useState([
    { id: 1, number: '923001234567', platform: 'Android', status: 'online' },
    { id: 2, number: '923007654321', platform: 'iOS', status: 'offline' }
  ]);

  // ANDROID FUNCTION - EXACT CODE
  const executeAndroidFunction = () => {
    if (!selectedNumber) {
      Alert.alert('❌ Error', 'Pehle number select karo');
      return;
    }

    Alert.alert(
      '🤖 ANDROID FUNCTIONS',
      `Selected: ${selectedNumber}\n\nYe functions WhatsApp ko crash kar sakte hain.\nSirf EDUCATIONAL testing ke liye!`,
      [
        {
          text: '📞 CALL BOMB',
          onPress: () => {
            Alert.alert(
              '📞 Android Call Bomb',
              'Ye function fake video calls bhejta hai jo WhatsApp crash karta hai.\n\nEXECUTING...',
              [
                {
                  text: 'CONFIRM EXECUTE',
                  onPress: () => {
                    Alert.alert('✅ Executing', 'Android() function executing...');
                    // Tumhara Android() function yahan execute hoga
                    console.log(`Android Call Bomb executing for: ${selectedNumber}`);
                    
                    // Simulate execution
                    setTimeout(() => {
                      Alert.alert(
                        '🎯 Android Function Result',
                        `✅ TARGET: ${selectedNumber}\n✅ FUNCTION: Android()\n✅ TYPE: Call Bomb\n✅ STATUS: Executed\n\n📊 WhatsApp crash simulation complete.`
                      );
                    }, 1500);
                  }
                },
                { text: 'Cancel' }
              ]
            );
          }
        },
        { text: 'Cancel', style: 'destructive' }
      ]
    );
  };

  // iOS FUNCTION 1 - James Close
  const executeiOSFunction1 = () => {
    if (!selectedNumber) {
      Alert.alert('❌ Error', 'Pehle number select karo');
      return;
    }

    Alert.alert(
      '📱 iOS FUNCTION 1',
      `JAMES CLOSE\nTarget: ${selectedNumber}\n\nYe function viewOnceMessage ke through WhatsApp ko force close karta hai.`,
      [
        {
          text: '🚀 EXECUTE',
          onPress: () => {
            Alert.alert('⏳ Processing', 'jamesclose() executing...');
            console.log(`jamesclose() executing for: ${selectedNumber}`);
            
            setTimeout(() => {
              Alert.alert(
                '✅ jamesclose() Complete',
                `TARGET: ${selectedNumber}\nFUNCTION: jamesclose()\nEFFECT: Force Close WhatsApp\nSTATUS: Success\n\n💾 900,000 null characters sent.`
              );
            }, 1200);
          }
        }
      ]
    );
  };

  // iOS FUNCTION 2 - Force Close 2
  const executeiOSFunction2 = () => {
    if (!selectedNumber) {
      Alert.alert('❌ Error', 'Pehle number select karo');
      return;
    }

    Alert.alert(
      '💥 iOS FUNCTION 2',
      `FORCLOSE2\nTarget: ${selectedNumber}\n\nMassive nested data structures (100,000 sections) create karta hai.`,
      [
        {
          text: '💣 EXECUTE',
          onPress: () => {
            Alert.alert('⚠️ WARNING', 'Ye function WhatsApp ko immediately hang kar sakta hai.');
            
            setTimeout(() => {
              Alert.alert(
                '✅ forclose2() Executed',
                `TARGET: ${selectedNumber}\nSECTIONS: 100,000\nDATA SIZE: ~10MB\nEFFECT: Immediate Freeze\nSTATUS: Success`
              );
            }, 1000);
          }
        }
      ]
    );
  };

  // iOS FUNCTION 3 - Crash iOS
  const executeiOSFunction3 = () => {
    if (!selectedNumber) {
      Alert.alert('❌ Error', 'Pehle number select karo');
      return;
    }

    Alert.alert(
      '❄️ iOS FUNCTION 3',
      `CRASH iOS\nTarget: ${selectedNumber}\n\nLocation message with 60,000 Unicode characters.`,
      [
        {
          text: '🧊 EXECUTE',
          onPress: () => {
            Alert.alert('🧨 Executing...', 'CrashiOS() function starting...');
            
            setTimeout(() => {
              Alert.alert(
                '✅ CrashiOS() Complete',
                `TARGET: ${selectedNumber}\nUNICODE CHARS: 60,000\nURL LENGTH: 25,000 chars\nEFFECT: WhatsApp Crash\nSTATUS: Success`
              );
            }, 1300);
          }
        }
      ]
    );
  };

  // iOS FUNCTION 4 - Freeze iOS
  const executeiOSFunction4 = () => {
    if (!selectedNumber) {
      Alert.alert('❌ Error', 'Pehle number select karo');
      return;
    }

    Alert.alert(
      '🧪 iOS FUNCTION 4',
      `FREEZE iOS\nTarget: ${selectedNumber}\n\nGroup invite with 15,000 repeated Unicode characters.`,
      [
        {
          text: '❄️ EXECUTE',
          onPress: () => {
            Alert.alert('⚠️ Heavy Function', 'freezeIos() executing...');
            
            setTimeout(() => {
              Alert.alert(
                '✅ freezeIos() Success',
                `TARGET: ${selectedNumber}\nGROUP INVITE: Random\nCAPTION: 15,000 chars\nTHUMBNAIL: ZeppImg\nEFFECT: Freeze/Crash`
              );
            }, 1400);
          }
        }
      ]
    );
  };

  const addNewDevice = () => {
    if (!selectedNumber || selectedNumber.length < 11) {
      Alert.alert('Error', 'Valid phone number dalo (923XXXXXXXXX)');
      return;
    }

    const newDevice = {
      id: connectedDevices.length + 1,
      number: selectedNumber,
      platform: 'Not Selected',
      status: 'pending'
    };

    setConnectedDevices([...connectedDevices, newDevice]);
    Alert.alert('Added', `Device ${selectedNumber} added successfully`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🤖 WhatsApp Bot Manager</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Connect')} style={styles.addButton}>
          <Icon name="add" size={24} color="white" />
          <Text style={styles.addButtonText}>Add Device</Text>
        </TouchableOpacity>
      </View>

      {/* Add New Device */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>➕ Add New Number</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.numberInput}
            placeholder="9232XXXXXXX"
            keyboardType="phone-pad"
            value={selectedNumber}
            onChangeText={setSelectedNumber}
            maxLength={15}
          />
          <TouchableOpacity style={styles.addBtn} onPress={addNewDevice}>
            <Text style={styles.addBtnText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Connected Devices List */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📱 Connected Devices ({connectedDevices.length})</Text>
        {connectedDevices.map((device) => (
          <View key={device.id} style={styles.deviceCard}>
            <View style={styles.deviceInfo}>
              <Icon name="smartphone" size={30} color="#128C7E" />
              <View style={styles.deviceDetails}>
                <Text style={styles.deviceNumber}>{device.number}</Text>
                <View style={styles.deviceMeta}>
                  <Text style={styles.devicePlatform}>{device.platform}</Text>
                  <View style={[styles.statusDot, { backgroundColor: device.status === 'online' ? '#25D366' : '#FF4757' }]} />
                  <Text style={styles.deviceStatus}>{device.status}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.selectButton} onPress={() => setSelectedNumber(device.number)}>
              <Text style={styles.selectButtonText}>Select</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Selected Number Display */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎯 Selected Target</Text>
        <Text style={styles.selectedNumber}>
          {selectedNumber || '❌ Koi number select nahi kiya'}
        </Text>
        {selectedNumber && (
          <Text style={styles.selectedNote}>
            ✅ Ye number functions execute hone ke liye ready hai
          </Text>
        )}
      </View>

      {/* ANDROID FUNCTION BUTTON */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🤖 ANDROID FUNCTIONS</Text>
        <Text style={styles.functionDescription}>
          Call bomb function - WhatsApp crash karta hai
        </Text>
        <TouchableOpacity
          style={[styles.functionButton, styles.androidButton]}
          onPress={executeAndroidFunction}
          disabled={!selectedNumber}>
          <Icon name="android" size={30} color="white" />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.functionButtonText}>📞 CALL BOMB</Text>
            <Text style={styles.functionSubText}>Android() Function</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* iOS FUNCTIONS */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📱 iOS FUNCTIONS</Text>
        
        {/* iOS Function 1 */}
        <TouchableOpacity
          style={[styles.iOSButton, styles.iOSButton1]}
          onPress={executeiOSFunction1}
          disabled={!selectedNumber}>
          <Icon name="apple" size={30} color="white" />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.functionButtonText}>JAMES CLOSE</Text>
            <Text style={styles.functionSubText}>viewOnceMessage with null chars</Text>
          </View>
        </TouchableOpacity>

        {/* iOS Function 2 */}
        <TouchableOpacity
          style={[styles.iOSButton, styles.iOSButton2]}
          onPress={executeiOSFunction2}
          disabled={!selectedNumber}>
          <Icon name="apple" size={30} color="white" />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.functionButtonText}>FORCE CLOSE 2</Text>
            <Text style={styles.functionSubText}>100,000 nested sections</Text>
          </View>
        </TouchableOpacity>

        {/* iOS Function 3 */}
        <TouchableOpacity
          style={[styles.iOSButton, styles.iOSButton3]}
          onPress={executeiOSFunction3}
          disabled={!selectedNumber}>
          <Icon name="apple" size={30} color="white" />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.functionButtonText}>CRASH iOS</Text>
            <Text style={styles.functionSubText}>60k Unicode location message</Text>
          </View>
        </TouchableOpacity>

        {/* iOS Function 4 */}
        <TouchableOpacity
          style={[styles.iOSButton, styles.iOSButton4]}
          onPress={executeiOSFunction4}
          disabled={!selectedNumber}>
          <Icon name="apple" size={30} color="white" />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.functionButtonText}>FREEZE iOS</Text>
            <Text style={styles.functionSubText}>15k Unicode group invite</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.warningText}>
          ⚠️ All functions are for EDUCATIONAL testing only
        </Text>
      </View>

      {/* Quick Stats */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📊 Quick Stats</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{connectedDevices.length}</Text>
            <Text style={styles.statLabel}>Devices</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Functions</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statLabel}>Selected</Text>
          </View>
        </View>
      </View>

      {/* Warning Footer */}
      <View style={styles.warningCard}>
        <Icon name="warning" size={30} color="#FF9500" />
        <Text style={styles.warningTitle}>⚠️ IMPORTANT DISCLAIMER</Text>
        <Text style={styles.warningText}>
          • Sirf EDUCATIONAL testing ke liye{'\n'}
          • Sirf APNI device par test karein{'\n'}
          • Kisi aur par use karna illegal hai{'\n'}
          • Responsibility aapki khud ki hai
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0A0A' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: '#111' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#25D366' },
  addButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#25D366', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20 },
  addButtonText: { color: 'white', marginLeft: 5, fontWeight: 'bold' },
  card: { backgroundColor: '#1A1A1A', borderRadius: 10, padding: 20, marginHorizontal: 15, marginVertical: 10, borderWidth: 1, borderColor: '#333' },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#25D366', marginBottom: 15 },
  inputRow: { flexDirection: 'row', alignItems: 'center' },
  numberInput: { flex: 1, borderWidth: 1, borderColor: '#444', borderRadius: 8, padding: 12, fontSize: 16, marginRight: 10, backgroundColor: '#222', color: 'white' },
  addBtn: { backgroundColor: '#25D366', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 8 },
  addBtnText: { color: 'white', fontWeight: 'bold' },
  deviceCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#222', padding: 15, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#333' },
  deviceInfo: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  deviceDetails: { marginLeft: 15, flex: 1 },
  deviceNumber: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
  deviceMeta: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  devicePlatform: { fontSize: 14, color: '#888', marginRight: 10 },
  statusDot: { width: 8, height: 8, borderRadius: 4, marginRight: 5 },
  deviceStatus: { fontSize: 14, color: '#888' },
  selectButton: { backgroundColor: '#128C7E', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 6 },
  selectButtonText: { color: 'white', fontWeight: 'bold' },
  selectedNumber: { fontSize: 20, fontWeight: 'bold', color: '#FF4757', textAlign: 'center', padding: 15, backgroundColor: '#222', borderRadius: 8 },
  selectedNote: { fontSize: 14, color: '#25D366', textAlign: 'center', marginTop: 10 },
  functionDescription: { fontSize: 14, color: '#888', marginBottom: 15 },
  functionButton: { flexDirection: 'row', alignItems: 'center', padding: 20, borderRadius: 10, marginBottom: 10 },
  androidButton: { backgroundColor: '#3DDC84' },
  iOSButton: { flexDirection: 'row', alignItems: 'center', padding: 18, borderRadius: 10, marginBottom: 10 },
  iOSButton1: { backgroundColor: '#FF2D55' },
  iOSButton2: { backgroundColor: '#5856D6' },
  iOSButton3: { backgroundColor: '#FF9500' },
  iOSButton4: { backgroundColor: '#34C759' },
  buttonTextContainer: { marginLeft: 15, flex: 1 },
  functionButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  functionSubText: { color: 'rgba(255,255,255,0.8)', fontSize: 12 },
  warningText: { fontSize: 14, color: '#FF9500', textAlign: 'center', marginTop: 10 },
  statsGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  statBox: { alignItems: 'center', flex: 1 },
  statNumber: { fontSize: 28, fontWeight: 'bold', color: '#25D366' },
  statLabel: { fontSize: 14, color: '#888', marginTop: 5 },
  warningCard: { backgroundColor: '#1A1A1A', borderRadius: 10, padding: 20, marginHorizontal: 15, marginVertical: 10, borderWidth: 2, borderColor: '#FF9500', alignItems: 'center' },
  warningTitle: { fontSize: 18, fontWeight: 'bold', color: '#FF9500', marginTop: 10, marginBottom: 10 }
});