import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MainTop from './components/MainTop/MainTop';
import MainBottom from './components/MainBottom/MainBottom';
import AddModal from './components/AddModal/AddModal';
import ManageModal from './components/ManageModal/ManageModal';
import { Rates, Repartition } from './Interfaces';

export default function App() {
  const [addModal, setAddModal] = useState<Boolean>(false);
  const [manageModal, setManageModal] = useState<Boolean>(false);
  const [capital, setCapital] = useState<number>(0);
  const [rates, setRates] = useState<Rates>({
    dai: 0,
    usdc: 0,
    usdt: 0,
  });

  const [investRepartition, setInvestRepartition] = useState<Repartition>({
    dai: 100,
    usdc: 0,
    usdt: 0,
  });

  const [investAmounts, setInvestAmounts] = useState<Repartition>({
    dai: 0,
    usdc: 0,
    usdt: 0,
  });

  const [blendedRate, setBlendedRate] = useState<Number>(0);

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
          capital={capital}
          setCapital={setCapital}
          setBlendedRate={setBlendedRate}
          rates={rates}
          investAmounts={investAmounts}
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
        addModal={addModal}
        setAddModal={setAddModal}
        capital={capital}
        rates={rates}
        investRepartition={investRepartition}
        blendedRate={blendedRate}
        setBlendedRate={setBlendedRate}
        investAmounts={investAmounts}
        setInvestAmounts={setInvestAmounts}
      />
      <MainBottom
        setManageModal={setManageModal}
        rates={rates}
        capital={capital}
        investRepartition={investRepartition}
        investAmounts={investAmounts}
        setInvestAmounts={setInvestAmounts}
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
