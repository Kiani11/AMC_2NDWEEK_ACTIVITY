import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const YourApp = () => {
  return (
    <ScrollView style={{
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text> Shane Kian B. Bautista </Text>
    <View
    style={{
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <Text>  IT-302 </Text>
    <Image
    source={{
      uri: 'https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2018/05/GettyImages-1206883692.jpg'
    }}

    style={{
      width: 200, 
      height: 200, }}
    />
    </View>
    <TextInput
    style={{
      
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      textAlign: 'center',
    }}
    defaultValue="You can type in me"
    />
    </ScrollView>
  );
};

export default YourApp;