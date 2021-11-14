import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import colors from '../../assets/styles/colors';
import { Crypto, ManageItemsProps } from '../../Interfaces';

function SliderItem({
  crypto,
  color,
  rate,
  investRate,
  setUpdate,
  updateItem,
  update,
}: ManageItemsProps) {
  // const [sliderValue, setSliderValue] = useState(investRate);
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
              onValueChange={(value: any) => {}}
              onSlidingComplete={(value: any) => {
                const diff = investRate - value[0];
                const adjust = Math.abs(diff / 2);
                setUpdate((previous: Crypto) => {
                  const newState: any = { ...previous };
                  let minusCase = false;
                  for (let key in newState) {
                    if (key !== crypto) {
                      if (diff > 0) {
                        newState[key] = newState[key] + adjust;
                      } else if (diff < 0) {
                        if (newState[key] >= adjust) {
                          newState[key] = newState[key] - adjust;
                        } else if (newState[key] < adjust) {
                          minusCase = true;
                          newState[key] = 0;
                        }
                      }
                    } else if (key === crypto) {
                      newState[key] = value[0];
                    }
                  }
                  if (minusCase) {
                    for (let key in newState) {
                      if (key !== crypto && newState[key] !== 0) {
                        newState[key] = 100 - value[0];
                      }
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

export default SliderItem;
