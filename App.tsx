import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MainTop from './components/MainTop/MainTop';
import MainBottom from './components/MainBottom/MainBottom';
import AddModal from './components/AddModal/AddModal';
import ManageModal from './components/ManageModal/ManageModal';
import { Crypto } from './Interfaces';

export default function App() {
  const [addModal, setAddModal] = useState<boolean>(false);
  const [manageModal, setManageModal] = useState<boolean>(false);
  const [capital, setCapital] = useState<number>(0);
  const [rates, setRates] = useState<Crypto>({
    dai: 0,
    usdc: 0,
    usdt: 0,
  });

  const [investRepartition, setInvestRepartition] = useState<Crypto>({
    dai: 100,
    usdc: 0,
    usdt: 0,
  });

  const [investAmounts, setInvestAmounts] = useState<Crypto>({
    dai: 0,
    usdc: 0,
    usdt: 0,
  });

  const [blendedRate, setBlendedRate] = useState<number>(0);

  useEffect(() => {
    fetch('https://api.compound.finance/api/v2/ctoken')
      .then((res) => res.json())
      .then((data) => {
        const obj = {
          dai: 0,
          usdc: 0,
          usdt: 0,
        };
        for (let item of data.cToken) {
          if (item.name === 'Compound Dai') {
            obj.dai = Number(item.supply_rate.value);
          }
          if (item.name === 'Compound USD Coin') {
            obj.usdc = Number(item.supply_rate.value);
          }
          if (item.name === 'Compound USDT') {
            obj.usdt = Number(item.supply_rate.value);
          }
        }
        setRates(obj);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {addModal && (
        <AddModal
          addModal={addModal}
          setAddModal={setAddModal}
          setCapital={setCapital}
          setInvestAmounts={setInvestAmounts}
        />
      )}
      {manageModal && (
        <ManageModal
          capital={capital}
          manageModal={manageModal}
          setManageModal={setManageModal}
          rates={rates}
          investRepartition={investRepartition}
          setInvestRepartition={setInvestRepartition}
          setInvestAmounts={setInvestAmounts}
        />
      )}
      <MainTop
        setAddModal={setAddModal}
        capital={capital}
        rates={rates}
        investRepartition={investRepartition}
        blendedRate={blendedRate}
        setBlendedRate={setBlendedRate}
        investAmounts={investAmounts}
      />
      <MainBottom
        setManageModal={setManageModal}
        rates={rates}
        investAmounts={investAmounts}
      />
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
