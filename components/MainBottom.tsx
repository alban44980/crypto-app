import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function MainBottom({ setManageModal }: any) {
  return (
    <View style={styles.bottom}>
      <View style={styles.titleContainer}>
        <Text style={styles.investTitle}>My investments</Text>
      </View>
      <View style={styles.dataContainer}></View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.manageButton}
          onPress={() => {
            setManageModal(true);
          }}
        >
          <Text style={styles.manageText}>Manage</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    height: '50%',
    width: '100%',
    backgroundColor: '#E6E8FA',
    alignItems: 'center',
  },
  titleContainer: {
    // backgroundColor: 'green',
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  investTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dataContainer: {
    backgroundColor: 'red',
    height: '55%',
    width: '100%',
  },
  buttonContainer: {
    // backgroundColor: 'aquamarine',
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  manageButton: {
    backgroundColor: '#FFF7EF',
    width: '60%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  manageText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default MainBottom;