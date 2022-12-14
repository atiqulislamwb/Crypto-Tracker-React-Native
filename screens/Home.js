import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import CoinItem from '../components/CoinItem';
import cryptocurrencies from '../constants/cryptocurrencies.json';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#121212'}}>
      <StatusBar style="auto" />
      <View style={{display: 'flex', flexDirection: 'column', marginTop: 10}}>
        <FlatList
          data={cryptocurrencies}
          renderItem={({item}) => <CoinItem item={item} />}
          keyExtractor={item => item?.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
