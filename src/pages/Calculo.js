import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';

export function Calculo() {
  return (
    <View style={styles.container}>
      <Text>Tela Contato</Text>
      <StatusBar style="auto" />
    </View>
  );
}