import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DataItem from './DataItem';
import colors from '../../assets/styles/colors';
import { MainBottomProps } from '../../Interfaces';

function MainBottom({ setManageModal, rates, investAmounts }: MainBottomProps) {
  return (
    <View style={styles.bottom}>
      <View accessible={true} style={styles.titleContainer}>
        <Text style={styles.investTitle}>My investments</Text>
      </View>
      <View accessible={true} style={styles.dataContainer}>
        <DataItem
          name={'DAI'}
          rate={rates.dai}
          investment={investAmounts.dai}
          color={colors.asset1}
        />
        <DataItem
          name={'USDC'}
          rate={rates.usdc}
          investment={investAmounts.usdc}
          color={colors.asset2}
        />
        <DataItem
          name={'USDT'}
          rate={rates.usdt}
          investment={investAmounts.usdt}
          color={colors.asset3}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Tap me!"
          accessibilityHint="Manage your investments"
          style={styles.manageButton}
          onPress={() => {
            setManageModal(true); //When clicking on Manage, reveal the modal
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
    paddingTop: 15,
  },
  titleContainer: {
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
    height: '55%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
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
    borderWidth: 1,
  },
  manageText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
});

export default MainBottom;
