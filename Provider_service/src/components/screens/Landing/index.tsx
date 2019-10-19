import React from "react";
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    ScrollView,
    Text,
    Alert,
} from 'react-native';
import {NavigationInjectedProps, withNavigation} from "react-navigation";
import {Geolocation} from "../../../context/Session";
import {styles} from "./styles";


type Props = NavigationInjectedProps & {
    fieldA: Array<string>,
    fieldB: boolean,
    fieldC: Date,
    geolocation: Geolocation
}

type State = {}

function Separator() {
    return <View style={styles.separator} />;
}

class Landing extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style = {styles.wrapper}>

                    <Text style = {styles.title}>
                        고객이 제시한 가격은 다음과 같습니다.
                    </Text>
                    <Separator/>

                    <Text style = {styles.inputvalue}>
                        32000
                    </Text>

                </View>
                <View style={{height: 40}}>
                    <Button
                        title="splash"
                        onPress={() => this.props.navigation.navigate('Splash')}
                    />

                </View>
                <View>
                    <View style={styles.fixToText}>
                        <Button
                            title="수락"
                            onPress={() => Alert.alert('수락하는 내용 전송')}
                        />
                        <Button
                            title="거절"

                            onPress={() => Alert.alert('거절 내용 전송')}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default withNavigation(Landing);
