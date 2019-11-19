import React, {Fragment} from 'react';
import {View} from 'react-native';
import {Button, Text} from 'native-base';

class MainPage extends React.Component {
    render() {
        return (
            <Fragment>
                <View style={{flexDirection: 'column',  alignSelf: 'center', marginTop:"-10%", paddingBottom:"10%"}}>
                    <Text> What are you looking for ? </Text>
                </View>
                <View style={{flex: 2, flexDirection: 'column'}}>
                    <View style={{paddingBottom: '2%'}}>
                        <Button style={this.buttonStyle} rounded>
                            <Text>cafe</Text>
                        </Button>
                    </View>
                    <View style={{paddingBottom: '2%'}}>
                        <Button style={this.buttonStyle} rounded>
                            <Text> restaurant </Text>
                        </Button>

                    </View>
                    <View style={{paddingBottom: '2%'}}>
                        <Button style={this.buttonStyle} rounded>
                            <Text>informations</Text>
                        </Button>
                    </View>
                </View>
            </Fragment>
        );
    }

    buttonStyle = {
        backgroundColor: '#324f82',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    };
}

export default MainPage;
