import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
    const [titleText, setTitleText] = useState("Bautista");
  const bodyText = 'BOSSING AKO PRE.';

  const onPressTitle = () => {
    setTitleText("SHANE KIAN, BAUTISTA"+ 
    '\n'+
    "20yrs old" +
    '\n'+ 
    "3rd YR IT STUDENT in Grc" +
    '/n' +
    "POGI AKO BES"
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>
        
          <Text style={styles.titleText} onPress={onPressTitle}>
            {titleText}
            {'\n '}
            {'\n'}
          </Text>
          <Text numberOfLines={5}>{bodyText}</Text>
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextInANest;
