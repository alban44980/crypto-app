import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ManageItemsProps } from '../../Interfaces';
import SliderItem from './SliderItem';

function SliderContainer({
  crypto,
  color,
  rate,
  investRate,
  setUpdate,
}: ManageItemsProps) {
  const [sliderValue, setSliderValue] = useState(investRate); //state to show the rate while changing the slider value
  //set the correct slider value on every change
  useEffect(() => {
    setSliderValue(investRate);
  }, [investRate]);

  return (
    <View accessible={true} style={styles.dataItem}>
      <View style={styles.itemTop}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            padding: 8,
            color: color,
          }}
        >
          {crypto.toUpperCase()}
        </Text>
        <Text
          style={{
            color: color,
            fontWeight: 'bold',
          }}
        >
          {rate.toFixed(4)} %
        </Text>
      </View>
      <View style={styles.itemBottom}>
        <View>
          <View style={styles.allocTitleContainer}>
            <Text style={{ color: color, marginRight: 'auto', paddingLeft: 8 }}>
              Allocation
            </Text>
            <Text>{sliderValue.toFixed(2)}%</Text>
          </View>
          <SliderItem
            crypto={crypto}
            color={color}
            investRate={investRate}
            setUpdate={setUpdate}
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
          />
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
  allocTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SliderContainer;
