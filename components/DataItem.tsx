import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import colors from '../assets/styles/colors';

function DataItem({ crypto, color, value }: any) {
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
          0.90%
        </Text>
      </View>
      <View style={styles.itemBottom}>
        <View style={styles.sliderContainer}>
          <View style={styles.allocTitleContainer}>
            <Text style={{ color: color, marginRight: 'auto', paddingLeft: 8 }}>
              Allocation
            </Text>
            <Text style={styles.allocamount1}>{value}%</Text>
          </View>
          <View style={styles.slider}>
            <Slider
              value={0}
              minimumTrackTintColor={color}
              maximumTrackTintColor={colors.main2}
              minimumValue={0}
              thumbTintColor={color}
              trackStyle={{ height: 7 }}
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
