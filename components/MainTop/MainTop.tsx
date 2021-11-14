import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import colors from '../../assets/styles/colors';
import { MainTopProps } from '../../Interfaces';
import Graph from './Graph';

function MainTop({
  setAddModal,
  capital,
  rates,
  investRepartition,
  blendedRate,
  setBlendedRate,
  investAmounts,
}: MainTopProps) {
  //Updating Blended Rate everytime the capital or investment allocations change
  useEffect(() => {
    const totalInvests =
      investAmounts.dai * rates.dai +
      investAmounts.usdc * rates.usdc +
      investAmounts.usdt * rates.usdt;
    setBlendedRate(totalInvests / capital);
  }, [capital, investRepartition]);

  return (
    <View style={styles.top}>
      <View style={styles.addContainer}>
        <Image
          style={styles.profilePic}
          source={require('../../assets/profile_pic.jpeg')}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setAddModal(true); //When clicking on Add Funds reveal the modal
          }}
        >
          <Text style={styles.addText}>+ Add Funds</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainNumbers}>
        <Text style={styles.capital}>${capital}</Text>
        <Text style={styles.interest}>
          {isNaN(blendedRate) ? (
            <Text>Add Funds !</Text>
          ) : (
            <Text>{blendedRate.toFixed(4)}%</Text>
          )}
        </Text>
        <Text style={styles.prediction}>
          1 year prediction benefits:
          {isNaN(capital * blendedRate) ? (
            <Text> $0</Text>
          ) : (
            <Text> ${(capital * blendedRate).toFixed(2)}</Text>
          )}
        </Text>
      </View>
      <Graph capital={capital} blendedRate={blendedRate} />
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    height: '53%',
    width: '100%',
    backgroundColor: colors.main1,
    paddingTop: Platform.OS === 'android' ? 27 : 0, //workaround as SafeAreaView works only on IOS
  },
  addContainer: {
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
  },
  mainNumbers: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  capital: {
    fontSize: 22,
  },
  interest: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  prediction: {
    fontSize: 15,
  },
  profilePic: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 20,
  },
  addButton: {
    backgroundColor: colors.main2,
    width: '30%',
    height: '85%',
    marginLeft: 'auto',
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
  },
  addText: {
    fontWeight: 'bold',
  },
});

export default MainTop;
