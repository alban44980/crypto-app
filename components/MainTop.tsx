import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Touchable,
  Text,
} from 'react-native';

function MainTop() {
  return (
    <View style={styles.top}>
      <View style={styles.addContainer}>
        <Image
          style={styles.profilePic}
          source={require('./../assets/profile_pic.jpeg')}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text>+ Add Funds</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainNumbers}>
        <Text style={styles.capital}>$ 1000</Text>
        <Text style={styles.interest}>$1.04795293</Text>
        <Text></Text>
      </View>
      <View style={styles.graphContainer}>
        <Text>GRAPH SECTION</Text>
      </View>
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
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  graphContainer: {
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginLeft: 20,
  },
  addButton: {
    backgroundColor: '#E6E8FA',
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
});

export default MainTop;
