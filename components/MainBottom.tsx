import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function MainBottom({ setManageModal }: any) {
  return (
    <View style={styles.bottom}>
      <View style={styles.titleContainer}>
        <Text style={styles.investTitle}>My investments</Text>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.dataItem}>
          <View style={styles.crypto}>
            <Text style={styles.cryptoText}>DAI</Text>
            <Text style={styles.cryptoPer}>0.90%</Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.amountNum}>$300</Text>
            <Text style={styles.amountText}>invested</Text>
          </View>
        </View>
        <View style={styles.dataItem}>
          <View style={styles.crypto}>
            <Text style={styles.cryptoText}>USDC</Text>
            <Text style={styles.cryptoPer}>1.23%</Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.amountNum}>$200</Text>
            <Text style={styles.amountText}>invested</Text>
          </View>
        </View>
        <View style={styles.dataItem}>
          <View style={styles.crypto}>
            <Text style={styles.cryptoText}>USDT</Text>
            <Text style={styles.cryptoPer}>0.40%</Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.amountNum}>$200</Text>
            <Text style={styles.amountText}>invested</Text>
          </View>
        </View>
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
    // backgroundColor: 'red',
    height: '55%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dataItem: {
    // backgroundColor: 'yellow',
    width: '100%',
    height: '27%',
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  crypto: {
    // backgroundColor: 'red',
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cryptoText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  cryptoPer: {
    paddingLeft: 8,
  },
  amount: {
    // backgroundColor: 'blue',
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountNum: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  amountText: { paddingLeft: 8 },
  dataSecond: {},
  dataThird: {},
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
