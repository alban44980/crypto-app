import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MainTop from './components/MainTop';
import BottomTop from './components/BottomTop';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainTop />
      <BottomTop />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
