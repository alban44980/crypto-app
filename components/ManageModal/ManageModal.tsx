import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import colors from '../../assets/styles/colors';
import SliderContainer from './SliderContainer';
import { Crypto, ManageModalProps } from '../../Interfaces';

function ManageModal({
  manageModal,
  setManageModal,
  rates,
  investRepartition,
  setInvestRepartition,
  setInvestAmounts,
  capital,
}: ManageModalProps) {
  const [update, setUpdate] = useState<Crypto>({ ...investRepartition }); //state to store changes before updating the investment Repartition when clicking the confirm button
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
              setManageModal(false); //when pressing the back button hide the modal
            }}
          >
            <Text style={styles.backText}>BACK</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>MY INVESTMENTS</Text>
        </View>
        <View style={styles.dataContainer}>
          <SliderContainer
            crypto={'dai'}
            rate={rates.dai}
            color={colors.asset1}
            investRate={update.dai}
            setUpdate={setUpdate}
          />
          <SliderContainer
            crypto={'usdc'}
            rate={rates.usdc}
            color={colors.asset2}
            investRate={update.usdc}
            setUpdate={setUpdate}
          />
          <SliderContainer
            crypto={'usdt'}
            rate={rates.usdt}
            color={colors.asset3}
            investRate={update.usdt}
            setUpdate={setUpdate}
          />
        </View>
        <View style={styles.confirmContainer}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => {
              setInvestRepartition(update); //Update investments allocation in %

              //update investments allocation in $
              setInvestAmounts((previous: Crypto) => {
                return {
                  ...previous,
                  dai: (update.dai * capital) / 100,
                  usdc: (update.usdc * capital) / 100,
                  usdt: (update.usdt * capital) / 100,
                };
              });
              setManageModal(false); //hide the modal
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
    backgroundColor: colors.main2,
  },
  backContainer: {
    height: '7%',
    width: '100%',
  },
  backButton: {
    backgroundColor: colors.main1,
    marginLeft: 'auto',
    marginTop: 5,
    marginRight: 5,
    height: '70%',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
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
    backgroundColor: colors.main3,
    margin: 30,
    borderRadius: 20,
  },
  confirmContainer: {
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: colors.main1,
    height: '50%',
    width: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
  confirmText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default ManageModal;
