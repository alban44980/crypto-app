import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import MainTop from './components/MainTop';
import MainBottom from './components/MainBottom';
import AddModal from './components/AddModal';
import ManageModal from './components/ManageModal';

export default function App() {
  const [addModal, setAddModal] = useState<Boolean>(false);
  const [manageModal, setManageModal] = useState<Boolean>(false);
  const [capital, setCapital] = useState<number>(0);
  const [rates, setRates] = useState<any>({
    dai: null,
    usdc: null,
    usdt: null,
  });

  useEffect(() => {
    fetch('https://api.compound.finance/api/v2/ctoken')
      .then((res) => res.json())
      .then((data) => {
        const obj = {
          dai: null,
          usdc: null,
          usdt: null,
        };
        console.log('TYPE ==>>>', typeof data.cToken);
        for (let item of data.cToken) {
          if (item.name === 'Compound Dai') {
            console.log('RATE FOR COMPOUND DAI ==>>> ', item.supply_rate);
            obj.dai = item.supply_rate;
          }
          if (item.name === 'Compound USD Coin') {
            console.log('RATE FOR COMPOUND USDC ==>>> ', item.supply_rate);
            obj.usdc = item.supply_rate;
          }
          if (item.name === 'Compound USDT') {
            console.log('RATE FOR COMPOUND USDT ==>>> ', item.supply_rate);
            obj.usdt = item.supply_rate;
          }
          // console.log(item.name);
        }
        console.log('obj for state ==>>> ', obj);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {addModal && (
        <AddModal
          addModal={addModal}
          setAddModal={setAddModal}
          setCapital={setCapital}
        />
      )}
      {manageModal && (
        <ManageModal
          manageModal={manageModal}
          setManageModal={setManageModal}
        />
      )}
      <MainTop
        addModal={addModal}
        setAddModal={setAddModal}
        capital={capital}
      />
      <MainBottom setManageModal={setManageModal} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
