import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  SafeAreaView,
} from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import colors from '../assets/styles/colors';

function ManageModal({ manageModal, setManageModal }: any) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={manageModal}
      onRequestClose={() => {}}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.backContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              setManageModal(false);
            }}
          >
            <Text style={styles.backText}>BACK</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>MY INVESTMENTS</Text>
        </View>
        <View style={styles.dataContainer}>
          <View style={styles.dataItem}>
            <View style={styles.itemTop}>
              <Text style={styles.crypto1}>DAI</Text>
              <Text style={styles.rate1}>0.90%</Text>
            </View>
            <View style={styles.itemBottom}>
              <View style={styles.sliderContainer}>
                <View style={styles.allocTitleContainer}>
                  <Text style={styles.alloc1}>Allocation</Text>
                  <Text style={styles.allocamount1}>100%</Text>
                </View>
                <View style={styles.slider}>
                  <Slider
                    value={0}
                    minimumTrackTintColor={colors.asset1}
                    // maximumTrackTintColor="none"
                    minimumValue={0}
                    thumbTintColor={colors.asset1}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.dataItem}>
            <View style={styles.itemTop}>
              <Text style={styles.crypto2}>USDC</Text>
              <Text style={styles.rate2}>0.90%</Text>
            </View>
            <View style={styles.itemBottom}>
              <View style={styles.sliderContainer}>
                <View style={styles.allocTitleContainer}>
                  <Text style={styles.alloc2}>Allocation</Text>
                  <Text style={styles.allocamount2}>100%</Text>
                </View>
                <View style={styles.slider}>
                  <Slider
                    value={0}
                    minimumTrackTintColor={colors.asset2}
                    // maximumTrackTintColor="none"
                    minimumValue={0}
                    thumbTintColor={colors.asset2}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.dataItem}>
            <View style={styles.itemTop}>
              <Text style={styles.crypto3}>USDT</Text>
              <Text style={styles.rate3}>0.90%</Text>
            </View>
            <View style={styles.itemBottom}>
              <View style={styles.sliderContainer}>
                <View style={styles.allocTitleContainer}>
                  <Text style={styles.alloc3}>Allocation</Text>
                  <Text style={styles.allocamount3}>100%</Text>
                </View>
                <View style={styles.slider}>
                  <Slider
                    value={0}
                    minimumTrackTintColor={colors.asset3}
                    // maximumTrackTintColor="none"
                    minimumValue={0}
                    thumbTintColor={colors.asset3}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.confirmContainer}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => {
              // setAddModal(false);
            }}
          >
            <Text style={styles.confirmText}>Add</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E8FA',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backContainer: {
    height: '7%',
    width: '100%',
    // backgroundColor: 'red',
  },
  backButton: {
    backgroundColor: '#FFF7EF',
    marginLeft: 'auto',
    marginTop: 5,
    marginRight: 5,
    height: '70%',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  backText: {},
  titleContainer: {
    // backgroundColor: 'yellow',
    height: '13%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  dataContainer: {
    height: '55%',
    backgroundColor: '#FDF9F5',
    margin: 30,
    borderRadius: 20,
  },
  dataItem: { height: '30%', margin: 5 },
  itemTop: {
    flexDirection: 'row',
    height: '50%',
    alignItems: 'center',
  },
  crypto1: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    color: colors.asset1,
  },
  rate1: {
    color: colors.asset1,
    fontWeight: 'bold',
  },
  crypto2: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    color: colors.asset2,
  },
  rate2: {
    color: colors.asset2,
    fontWeight: 'bold',
  },
  crypto3: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
    color: colors.asset3,
  },
  rate3: {
    color: colors.asset3,
    fontWeight: 'bold',
  },
  itemBottom: {
    height: '50%',
  },
  sliderContainer: {
    // backgroundColor: 'green',
    // height: '30%',
    // justifyContent: 'center',
    // margin: 5,
  },
  allocTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  alloc1: { color: colors.asset1, marginRight: 'auto' },
  allocamount1: {},
  alloc2: { color: colors.asset2, marginRight: 'auto' },
  allocamount2: {},
  alloc3: { color: colors.asset3, marginRight: 'auto' },
  allocamount3: {},
  slider: {
    // width: '90%',
    margin: 5,
  },
  confirmContainer: {
    // backgroundColor: 'red',
    height: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#FFF7EF',
    height: '50%',
    width: '55%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  confirmText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default ManageModal;
