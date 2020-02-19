import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class LoginForm extends Component {
    state = { email: '', password: '' }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Animatable.Text animation={'fadeInDown'} duration={2000}>
                    <Text h3>Instagrin</Text>
                </Animatable.Text>
                <View style={styles.inputContainerStyle}>
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                name='email'
                                size={24}
                                color='black'
                            />
                        }
                        value={this.state.email}
                        onChangeText={(val) => this.setState({ email: val })}
                    />
                    <Input
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='black'
                            />
                        }
                        value={this.state.password}
                        onChangeText={(val) => this.setState({ password: val })}
                    />
                </View>
                <Button
                    title="Login"
                    containerStyle={{ width: '95%', marginBottom: 10 }}
                    buttonStyle={{ backgroundColor: 'black' }}
                />
                <Button
                    title="Register"
                    containerStyle={{ width: '95%' }}
                    buttonStyle={{ borderColor: 'black', borderWidth: 1 }}
                    titleStyle={{ color: 'black' }}
                    type="outline"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    inputContainerStyle: {
        marginTop: 50,
        marginBottom: 100,
        width: '100%'
    }
})

export default LoginForm;