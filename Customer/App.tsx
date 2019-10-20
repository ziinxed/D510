import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default function PriceTextInput() {
    const [value, onChangeText] = React.useState('0');

    return (
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 2, fontSize: 32 }}
            onChangeText={text => onChangeText(text)}
            value={value}
            keyboardAppearance={"default"}
            keyboardType={"numeric"}
        />
    );
}


export default function App(){
  return (
    <View style={styles.container}>
        <View style={styles.wrapper}>
      <Text style={styles.title}>
        가격을 입력하세요
    </Text>
            <PriceTextInput/>
            <Button
                title="수락"
                onPress={() => Alert.alert("wow")}
            />



        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
    wrapper: {
        marginTop: 100,
        alignItems: 'center',
        fontSize: 50
    },
    title: {
      fontSize : 50
    }
});
