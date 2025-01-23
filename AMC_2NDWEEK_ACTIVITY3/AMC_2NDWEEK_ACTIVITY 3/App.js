import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>
        I am Kian
        <Text style={styles.innerText}> Bautista</Text>
      </Text>

      <Text style={styles.baseText}
      style={{color: 'violet'}}>
      3rd yr College in

      <Text style={styles.innerText}> GRC </Text>
      </Text>

        <Text style={styles.baseText}
      style={{color: 'blue'}}>
      My course is

      <Text style={styles.yes}> Information Technology </Text>
      </Text>

        <Text style={styles.baseText}
      style={{color: 'black'}}>
      mahirap lang po kami

      <Text style={styles.kups}> kaya ako nag scholar </Text>
      </Text>

        <Text style={styles.baseText}
      style={{color: 'green'}}>
      Ako ay dihamak na Pogi 

      <Text style={styles.big}> lamang </Text>
      </Text>
      
        <Text style={styles.baseText}
      style={{color: 'blue'}}>
      Nag- aaral ako

      <Text style={styles.eat}> Palagi</Text>
      </Text>
        <Text style={styles.baseText}
      style={{color: 'brown'}}>
      Thanks,

      <Text style={styles.wew}> Halfhart </Text>
      </Text>

    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
    color: 'pink',
    fontSize: 30,
  },
  innerText: {
    color: 'red',
  },
  wew: {
    color: 'blue'
  },
  eat: {
    color: 'pink'
  },
  big: {
    color: 'brown'
  },
kups: {
  color: 'lightblue'
},

});

export default BoldAndBeautiful;