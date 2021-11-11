import React from 'react';
import { View, StyleSheet } from 'react-native';

function MainTop() {
  return (
    <View style={styles.top}>
      <View style={styles.addContainer}></View>
      <View style={styles.mainNumbers}></View>
      <View style={styles.graphContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    height: '50%',
    width: '100%',
    backgroundColor: '#FFF7EF',
  },
  addContainer: {
    width: '100%',
    height: '25%',
    backgroundColor: 'aquamarine',
  },
  mainNumbers: {
    width: '100%',
    height: '30%',
    backgroundColor: 'green',
  },
  graphContainer: {
    width: '100%',
    height: '45%',
    backgroundColor: 'red',
  },
});

export default MainTop;
