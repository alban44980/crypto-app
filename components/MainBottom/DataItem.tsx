import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BottomItemProps } from '../../Interfaces';

function DataItem({ name, rate, investment }: BottomItemProps) {
  return (
    <View style={styles.dataItem}>
      <View style={styles.crypto}>
        <Text style={styles.cryptoText}>{name}</Text>
        <Text style={styles.cryptoPer}>{rate.toFixed(4)}%</Text>
      </View>
      <View style={styles.amount}>
        <Text style={styles.amountNum}>${investment}</Text>
        <Text style={styles.amountText}>invested</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dataItem: {
    width: '100%',
    height: '27%',
    margin: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  crypto: {
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
