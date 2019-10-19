import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { View, Text, Button } from 'native-base';
import GenerateForm from 'react-native-form-builder';

const styles = {
    wrapper: {
        flex: 1,
        marginTop: 150,
    },
    submitButton: {
        paddingHorizontal: 10,
        paddingTop: 20,
    },
};
// These Fields will create a login form with three fields
const fields = [
    {
        type: 'text',
        name: 'user_name',
        required: true,
        icon: 'ios-person',
        label: 'Username',
    },
    {
        type: 'password',
        name: 'password',
        icon: 'ios-lock',
        required: true,
        label: 'Password',
    },
    {
        type: 'picker',
        name: 'country',
        mode: 'dialog',
        label: 'Select Country',
        defaultValue: 'INDIA',
        options: ['US', 'INDIA', 'UK', 'CHINA', 'FRANCE'],
    },
];
export default class FormGenerator extends Component {
    login() {
        const formValues = this.formGenerator.getValues();
        console.log('FORM VALUES', formValues);
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View>
                    <GenerateForm
                        ref={(c) => {
                            this.formGenerator = c;
                        }}
                        fields={fields}
                    />
                </View>
                <View style={styles.submitButton}>
                    <Button block onPress={() => this.login()}>
                        <Text>Login</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent('FormGenerator', () => FormGenerator);