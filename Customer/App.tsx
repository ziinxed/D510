import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import GenerateForm from 'react-native-form-builder';




export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.container}>
        </Text>
      <Text style={styles.container}>
        가격을 입력하세요</Text>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50
  },
});
