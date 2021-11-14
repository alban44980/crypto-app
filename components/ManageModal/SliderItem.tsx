import React from 'react';
import { Slider } from '@miblanchard/react-native-slider';
import { View } from 'react-native';
import colors from '../../assets/styles/colors';
import { SliderItemProp } from '../../Interfaces';

function SliderItem({
  crypto,
  color,
  investRate,
  setUpdate,
  sliderValue,
  setSliderValue,
}: SliderItemProp) {
  return (
    <View style={{ margin: 5 }}>
      <Slider
        value={sliderValue}
        minimumTrackTintColor={color}
        maximumTrackTintColor={colors.main2}
        minimumValue={0}
        maximumValue={100}
        thumbTintColor={color}
        trackStyle={{ height: 7 }}
        step={5}
        onValueChange={(value: any) => {
          setSliderValue(value[0]); //update the value onChange for a better UX
        }}
        onSlidingComplete={(value: any) => {
          const diff = investRate - value[0]; //difference between previous value and new value
          const adjust = Math.abs(diff / 2);
          setUpdate((previous) => {
            const newState: any = { ...previous };
            let edgeCase = false; //edgeCase represents the scenario when one of the asset would go under 0%
            for (let key in newState) {
              //if asset is the one we've used the slider for, update other assets rate
              if (key !== crypto) {
                //if diff is a positive value, incrase other assets
                if (diff > 0) {
                  newState[key] = newState[key] + adjust;
                  //if diff is a negative value, decrease other assets
                } else if (diff < 0) {
                  if (newState[key] >= adjust) {
                    newState[key] = newState[key] - adjust;
                    //if decreasing would make it under 0, set it to 0
                  } else if (newState[key] < adjust) {
                    edgeCase = true;
                    newState[key] = 0;
                  }
                }
                //Update the current asset with the value we've defined with slider
              } else if (key === crypto) {
                newState[key] = value[0];
              }
            }
            //if we have an edge case, readjust assets to have a total of 100%
            if (edgeCase) {
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
  );
}

export default SliderItem;
