import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  Platform,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import AddModal from './AddModal/AddModal';
import colors from '../assets/styles/colors';

function MainTop({ setAddModal, capital }: any) {
  return (
    <View style={styles.top}>
      <View style={styles.addContainer}>
        <Image
          style={styles.profilePic}
          source={require('./../assets/profile_pic.jpeg')}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            setAddModal(true);
          }}
        >
          <Text>+ Add Funds</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainNumbers}>
        <Text style={styles.capital}>$ {capital}</Text>
        <Text style={styles.interest}>$1.04795293</Text>
        <Text></Text>
      </View>
      <View style={styles.graphContainer}>
        <LineChart
          data={{
            labels: ['Now', '2023', '2026', '2032', '2040', '2048'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={200}
          yAxisLabel="$"
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
          }}
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
    height: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  graphContainer: {
    width: '100%',
    height: '50%',
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 20,
  },
  addButton: {
    backgroundColor: colors.main2,
    width: '30%',
    height: '50%',
    marginLeft: 'auto',
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  mainNumbers: {
    width: '100%',
    height: '25%',
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
});

export default MainTop;
