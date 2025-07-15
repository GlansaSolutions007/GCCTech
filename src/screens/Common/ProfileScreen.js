import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import CustomText from '../../components/CustomText';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const { logout } = useAuth();
  const navigate = useNavigation();

  const handleLogout = () => {
    navigate.navigate('Login')
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.heading}>Profile Screen</CustomText>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <CustomText style={styles.buttonText}>Logout</CustomText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 24, marginBottom: 20 },
  button: {
    backgroundColor: '#FF3333',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: { color: 'white', fontSize: 16 },
});
