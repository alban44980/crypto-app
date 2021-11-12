import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import colors from '../assets/styles/colors';
import DataItem from './DataItem';

function ManageModal({
  manageModal,
  setManageModal,
  rates,
  investRepartition,
  setInvestRepartition,
}: any) {
  const [update, setUpdate] = useState({ ...investRepartition });
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={manageModal}
      onRequestClose={() => {}}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.backContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              setManageModal(false);
            }}
          >
            <Text style={styles.backText}>BACK</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>MY INVESTMENTS</Text>
        </View>
        <View style={styles.dataContainer}>
          <DataItem
            crypto={'DAI'}
            rate={rates.dai}
            color={colors.asset1}
            value={100}
            investRate={update.dai}
            setInvestRepartition={setInvestRepartition}
            update={update}
            setUpdate={setUpdate}
          />
          <DataItem
            crypto={'USDC'}
            rate={rates.usdc}
            color={colors.asset2}
            value={0}
            investRate={update.usdc}
            setInvestRepartition={setInvestRepartition}
            update={update}
            setUpdate={setUpdate}
          />
          <DataItem
            crypto={'USDT'}
            rate={rates.usdt}
            color={colors.asset3}
            value={0}
            investRate={update.usdt}
            setInvestRepartition={setInvestRepartition}
            update={update}
            setUpdate={setUpdate}
          />
        </View>
        <View style={styles.confirmContainer}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => {
              setInvestRepartition(update);
              setManageModal(false);
            }}
          >
            <Text style={styles.confirmText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E8FA',
  },
  backContainer: {
    height: '7%',
    width: '100%',
  },
  backButton: {
    backgroundColor: '#FFF7EF',
    marginLeft: 'auto',
    marginTop: 5,
    marginRight: 5,
    height: '70%',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  backText: {},
  titleContainer: {
    height: '13%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  dataContainer: {
    height: '55%',
    backgroundColor: '#FDF9F5',
    margin: 30,
    borderRadius: 20,
  },
  confirmContainer: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#FFF7EF',
    height: '50%',
    width: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  confirmText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default ManageModal;
