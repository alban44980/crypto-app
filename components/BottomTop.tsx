import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function BottomTop() {
  return (
    <View style={styles.bottom}>
      <Text>HEY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    height: '50%',
    width: '100%',
    backgroundColor: '#E6E8FA',
  },
});

export default BottomTop;
