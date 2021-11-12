import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function DataItem({ name, rate }: any) {
  return (
    <View style={styles.dataItem}>
      <View style={styles.crypto}>
        <Text style={styles.cryptoText}>{name}</Text>
        <Text style={styles.cryptoPer}>{rate.toFixed(2)}%</Text>
      </View>
      <View style={styles.amount}>
        <Text style={styles.amountNum}>$300</Text>
        <Text style={styles.amountText}>invested</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default DataItem;
