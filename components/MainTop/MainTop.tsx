import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import colors from '../../assets/styles/colors';
import { MainTopProps } from '../../Interfaces';

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
        <Text>
          1 year prediction benefits:
          {isNaN(capital * blendedRate) ? (
            <Text> $0</Text>
          ) : (
            <Text> ${(capital * blendedRate).toFixed(2)}</Text>
          )}
        </Text>
      </View>
      <View style={styles.graphContainer}>
        <LineChart
          data={{
            labels: ['Now', '2023', '2026', '2031', '2041', '2051'],
            datasets: [
              {
                data: isNaN(blendedRate)
                  ? [capital]
                  : [
                      capital,
                      Math.round(capital + capital * blendedRate * 2),
                      Math.round(capital + capital * blendedRate * 5),
                      Math.round(capital + capital * blendedRate * 10),
                      Math.round(capital + capital * blendedRate * 20),
                      Math.round(capital + capital * blendedRate * 30),
                    ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={200}
          yAxisLabel="$"
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={{
            // backgroundColor: '#e26a00',
            // backgroundGradientFrom: colors.main2,
            // backgroundGradientTo: '#ffa726',
            backgroundGradientTo: 'rgb(109,116,174)',
            // backgroundGradientTo: colors.main1,
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '4',
              strokeWidth: '1',
              stroke: colors.main1,
            },
          }}
          bezier
          style={
            {
              // marginVertical: 8,
            }
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    height: '53%',
    width: '100%',
    backgroundColor: colors.main1,
    paddingTop: Platform.OS === 'android' ? 27 : 0,
  },
  addContainer: {
    width: '100%',
    height: '20%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
    // backgroundColor: 'green',
  },
  mainNumbers: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  capital: {
    fontSize: 20,
  },
  interest: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  graphContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
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
  },
  addText: {
    fontWeight: 'bold',
  },
});

export default MainTop;
