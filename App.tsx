import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import MainTop from './components/MainTop/MainTop';
import MainBottom from './components/MainBottom/MainBottom';
import AddModal from './components/AddModal/AddModal';
import ManageModal from './components/ManageModal/ManageModal';
import colors from './assets/styles/colors';
import { Crypto } from './Interfaces';

export default function App() {
  const [addModal, setAddModal] = useState<boolean>(false); //state to toggle the add funds modal
  const [manageModal, setManageModal] = useState<boolean>(false); //state to toggle the manage investments modal
  const [capital, setCapital] = useState<number>(0); //total amount invested

  //will store rates coming from the api
  const [rates, setRates] = useState<Crypto>({
    dai: 0,
    usdc: 0,
    usdt: 0,
  });

  //allocation per asset in percentage
  const [investRepartition, setInvestRepartition] = useState<Crypto>({
    dai: 100, //100% on DAI by default
    usdc: 0,
    usdt: 0,
  });

  //allocation per asset in dollars
  const [investAmounts, setInvestAmounts] = useState<Crypto>({
    dai: 0,
    usdc: 0,
    usdt: 0,
  });

  //blended rate state
  const [blendedRate, setBlendedRate] = useState<number>(0);

  //making the call to the API on app load
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
        setRates(obj); //updating our rates state with values from the API
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {addModal && (
        <AddModal
          setAddModal={setAddModal}
          capital={capital}
          setCapital={setCapital}
          setInvestAmounts={setInvestAmounts}
          investRepartition={investRepartition}
        />
      )}
      {manageModal && (
        <ManageModal
          capital={capital}
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
    backgroundColor: colors.main1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
