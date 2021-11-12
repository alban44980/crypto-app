import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import colors from '../assets/styles/colors';
import { Investments } from '../Interfaces';

function DataItem({
  crypto,
  color,
  rate,
  investRate,
  setInvestRepartition,
}: any) {
  return (
    <View style={styles.dataItem}>
      <View style={styles.itemTop}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            padding: 8,
            color: color,
          }}
        >
          {crypto}
        </Text>
        <Text
          style={{
            color: color,
            fontWeight: 'bold',
          }}
        >
          {rate.toFixed(2)}%
        </Text>
      </View>
      <View style={styles.itemBottom}>
        <View style={styles.sliderContainer}>
          <View style={styles.allocTitleContainer}>
            <Text style={{ color: color, marginRight: 'auto', paddingLeft: 8 }}>
              Allocation
            </Text>
            <Text style={styles.allocamount1}>{investRate}%</Text>
          </View>
          <View style={styles.slider}>
            <Slider
              value={investRate}
              minimumTrackTintColor={color}
              maximumTrackTintColor={colors.main2}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor={color}
              trackStyle={{ height: 7 }}
              step={5}
              onValueChange={(value: any) => {
                setInvestRepartition((previous: Investments) => {
                  const asset = crypto.toLowerCase();
                  return {
                    ...previous,
                    [asset]: value[0],
                  };
                });
              }}
              onSlidingComplete={(value: any) => {
                const total = 100;
                const diff = total - value;
                const asset = crypto.toLowerCase();
                setInvestRepartition((previous: Investments) => {
                  const newState: any = { ...previous };
                  for (let key in newState) {
                    if (key !== asset) {
                      newState[key] = diff / 2;
                    }
                  }
                  return newState;
                });
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dataItem: { height: '30%', margin: 5 },
  itemTop: {
    flexDirection: 'row',
    height: '50%',
    alignItems: 'center',
  },
  itemBottom: {
    height: '50%',
  },
  sliderContainer: {},
  allocTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  allocamount1: {},
  slider: {
    margin: 5,
  },
});

export default DataItem;
