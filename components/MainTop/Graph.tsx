import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import colors from '../../assets/styles/colors';
import { LineChart } from 'react-native-chart-kit';
import { GraphProps } from '../../Interfaces';

function Graph({ capital, blendedRate }: GraphProps) {
  return (
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
        width={Dimensions.get('window').width}
        height={200}
        yAxisLabel="$"
        yAxisSuffix=""
        yAxisInterval={1}
        chartConfig={{
          backgroundGradientTo: 'rgb(109,116,174)',
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
      />
    </View>
  );
}
const styles = StyleSheet.create({
  graphContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
  },
});

export default Graph;
