import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import colors from '../assets/styles/colors';
import DataItem from './DataItem';

function ManageModal({ manageModal, setManageModal }: any) {
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
          <DataItem crypto={'DAI'} color={colors.asset1} />
          <DataItem crypto={'USDC'} color={colors.asset2} />
          <DataItem crypto={'USDT'} color={colors.asset3} />
        </View>
        <View style={styles.confirmContainer}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => {
              // setAddModal(false);
            }}
          >
            <Text style={styles.confirmText}>Add</Text>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backContainer: {
    height: '7%',
    width: '100%',
    // backgroundColor: 'red',
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
    // backgroundColor: 'yellow',
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
    // backgroundColor: 'red',
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
