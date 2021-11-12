import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DataItem from './DataItem';
import colors from '../../assets/styles/colors';

function MainBottom({
  setManageModal,
  rates,
  investRepartition,
  capital,
}: any) {
  return (
    <View style={styles.bottom}>
      <View style={styles.titleContainer}>
        <Text style={styles.investTitle}>My investments</Text>
      </View>
      <View style={styles.dataContainer}>
        <DataItem
          name={'DAI'}
          rate={rates.dai}
          investment={(investRepartition.dai * capital) / 100}
        />
        <DataItem
          name={'USDC'}
          rate={rates.usdc}
          investment={(investRepartition.usdc * capital) / 100}
        />
        <DataItem
          name={'USDT'}
          rate={rates.usdt}
          investment={(investRepartition.usdt * capital) / 100}
        />
      </View>
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
    backgroundColor: colors.main2,
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
    // backgroundColor: 'red',
    height: '55%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    // backgroundColor: 'aquamarine',
    height: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  manageButton: {
    backgroundColor: colors.main1,
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
