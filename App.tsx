import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MainTop from './components/MainTop';
import MainBottom from './components/MainBottom';
import AddModal from './components/AddModal';

export default function App() {
  const [addModal, setAddModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {addModal && <AddModal addModal={addModal} setAddModal={setAddModal} />}
      <MainTop addModal={addModal} setAddModal={setAddModal} />
      <MainBottom />
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
