import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const CoinItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={{height: 30, width: 30}}
        source={{
          uri: item?.image,
        }}
      />
      <View style={{marginLeft: 5}}>
        <Text style={styles.title}>{item?.name}</Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text
            style={{
              backgroundColor: '#585858',
              color: 'white',
              fontWeight: 'bold',
              marginLeft: 'auto',
              borderRadius: 5,
              paddingHorizontal: 3,
              padding: 1,
              marginRight: 5,
            }}>
            {item?.market_cap_rank}{' '}
          </Text>
          <Text style={styles.text}>{item?.symbol.toUpperCase()}</Text>

          <Text style={{color: 'white', marginLeft: 5}}>
            {item?.price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{marginLeft: 'auto'}}>
        <Text style={styles.text}>{item?.current_price}</Text>
        <Text style={styles.text}>Mcap {item?.market_cap.toFixed(1)}T</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    paddingTop: 10,
    color: '#ffffff',
    flexDirection: 'row',
    borderBottomColor: '#333333',
    borderWidth: 1,
    marginBottom: 2,
    paddingVertical: 15,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
  },
});

export default CoinItem;
