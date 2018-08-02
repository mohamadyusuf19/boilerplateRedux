import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { loginChanged, passwordChanged } from './actions'
import { connect } from 'react-redux';

class Home extends Component {
    render () {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    placeholder="LOGIN"
                    value={this.props.login}
                    onChangeText={text => this.props.loginChanged(text)}
                />
                <TextInput
                    placeholder="PASSWORD"
                    secureTextEntry={true}
                    value={this.props.password}
                    onChangeText={text => this.props.passwordChanged(text)}
                />
                <TouchableOpacity>
                    <Text>Button</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const { login, password } = state.auth
    return {
      login,
      password
    }
}

export default connect(mapStateToProps, { loginChanged, passwordChanged })(Home)