import {StyleSheet, TextStyle, ViewStyle, FlexStyle} from "react-native";

const imageBackground: ViewStyle = {
    flex: 1,
};

const container: ViewStyle = {
    flex: 1,
};

const wrapper: ViewStyle = {
    marginTop: 100,
    alignItems: 'center',
};

const title: TextStyle = {
    color: '#000',
    fontSize: 24,
    textAlign: 'center'
};

const value: TextStyle = {
    marginTop: 40,
    color: '#000',
    fontSize: 16,
};

const inputvalue: TextStyle={

    color: 'red',
    fontSize: 40,
    textAlign : 'center'
};

const fixToText: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between'
};

const separator: ViewStyle= {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
};

export const styles = StyleSheet.create({
    imageBackground,
    container,
    wrapper,
    title,
    value,
    inputvalue,
    fixToText,
    separator
});
