import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import MainTop from './components/MainTop';
import MainBottom from './components/MainBottom';
import AddModal from './components/AddModal';
import ManageModal from './components/ManageModal';

export default function App() {
  const [addModal, setAddModal] = useState(false);
  const [manageModal, setManageModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {addModal && <AddModal addModal={addModal} setAddModal={setAddModal} />}
      {manageModal && (
        <ManageModal
          manageModal={manageModal}
          setManageModal={setManageModal}
        />
      )}
      <MainTop addModal={addModal} setAddModal={setAddModal} />
      <MainBottom setManageModal={setManageModal} />
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
