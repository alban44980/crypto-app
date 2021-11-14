import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';
import colors from '../../assets/styles/colors';
import { AddModalProps, Crypto } from '../../Interfaces';

function AddModal({
  addModal,
  setAddModal,
  setCapital,
  setInvestAmounts,
  investRepartition,
  capital,
}: AddModalProps) {
  const [inputState, setInputState] = useState<string>(''); //state keeping track of input value

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={addModal}
      onRequestClose={() => {}}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.backContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              setAddModal(false); //When clicking on back button hide the Add Modal
            }}
          >
            <Text>BACK</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.dollarTextContainer}>
            <Text style={styles.dollarText}>$</Text>
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.inputText}
              placeholder="100.00"
              value={inputState}
              onChangeText={(text) => {
                setInputState(text); //updating the input state on change
              }}
            />
          </View>
        </View>
        <View style={styles.addContainer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              setCapital((previous: number) => previous + Number(inputState)); //update capital state
              setInvestAmounts((previous: Crypto) => {
                return {
                  ...previous,
                  dai:
                    (investRepartition.dai / 100) *
                    (capital + Number(inputState)),
                  usdc:
                    (investRepartition.usdc / 100) *
                    (capital + Number(inputState)),
                  usdt:
                    (investRepartition.usdt / 100) *
                    (capital + Number(inputState)),
                };
              });
              setInputState(''); // Resetting the input value state
              setAddModal(false); //Hide the add modal
            }}
          >
            <Text style={styles.addText}>Add</Text>
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
    alignItems: 'center',
  },
  backContainer: {
    height: '35%',
    width: '100%',
  },
  backButton: {
    backgroundColor: colors.main1,
    marginLeft: 'auto',
    marginTop: 5,
    marginRight: 5,
    height: '15%',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
  inputContainer: {
    width: '80%',
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    textShadowColor: '#585858',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
  },
  dollarTextContainer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  dollarText: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingRight: 15,
  },
  input: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 30,
  },
  addContainer: {
    width: '100%',
    height: '8%',
    alignItems: 'center',
    marginTop: 20,
  },
  addButton: {
    backgroundColor: colors.main1,
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
  addText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default AddModal;
