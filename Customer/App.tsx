import React from 'react';
import { StyleSheet, Text, View, TextInput,  Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';


type Price = {
    output: string;
    exitCode: string;
    message: string;
}
export default class App extends React.Component
{
    // state 추가함.
    constructor(props) {
        super(props);
        this.state = {
            price : '0'
        };
    }

   componentDidMount(): void {
       axios.get('https://bba2kiilx5.execute-api.ap-northeast-2.amazonaws.com/week7test/fetch-message')
           .then(response => {console.log(response.data);})
   }




    render()
    {


        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>
                        가격을 입력하세요
                    </Text>

                    <Input
                        leftIcon={
                            <Icon
                                name='money'
                                size={24}
                                color='black'
                            />
                        }
                        placeholder='price'
                        errorStyle={{color: 'black'}}
                        errorMessage='ENTER Price Here'
                        keyboardAppearance={'default'}
                        keyboardType={'numeric'}
                        onChangeText={(price) => this.setState({price})}

                    />
                    <Button
                        title="SUBMIT"
                        onPress={() => {
                            //Alert.alert(this.state.price);
                            axios.post('https://bba2kiilx5.execute-api.ap-northeast-2.amazonaws.com/week7test/fetch-message', {price: this.state.price} )
                                .then(response => {
                                    console.log(response.data);
                                    Alert.alert(response.data);

                                });
                        }
                        }
                    />

                </View>

            </View>
        );
    }
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
