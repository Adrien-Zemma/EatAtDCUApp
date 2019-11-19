import React from 'react';
import {Body, Container, Header, Left, Right, Title} from 'native-base';
import {StyleSheet} from 'react-native';


class MyHeader extends React.Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor: "#324f82"}}>
                    <Left/>
                    <Body>
                        <Title style={{ color:"#FFFFFF"}}>Eat At DCU</Title>
                    </Body>
                    <Right/>
                </Header>
            </Container>
        );
    }
}

export default MyHeader;
