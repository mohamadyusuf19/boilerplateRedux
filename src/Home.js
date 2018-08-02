import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { loginChanged, passwordChanged, postLogin } from './actions'
import { connect } from 'react-redux';
import Spinner from './components/Spinner';

class Home extends Component {

    renderAll() {
        if(this.props.loading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Spinner/>
                </View>
            )
        }
        const { email, password } = this.props
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    placeholder="LOGIN"
                    style={{ width: '100%', borderColor: '#f1f1f1', borderWidth: 1 }}
                    value={this.props.login}
                    onChangeText={text => this.props.loginChanged(text)}
                />
                <TextInput
                    placeholder="PASSWORD"
                    secureTextEntry={true}
                    style={{ width: '100%', borderColor: '#f1f1f1', borderWidth: 1 }}
                    value={this.props.password}
                    onChangeText={text => this.props.passwordChanged(text)}
                />
                <TouchableOpacity style={{ 
                    backgroundColor: '#000', 
                    height: 40, 
                    width: 100, 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    borderRadius: 5 }}
                    onPress={() => this.props.postLogin({ email, password })}>
                    <Text style={{ color: '#fff' }}>Button</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render () {        
        return (
           <View style={{ flex: 1 }}>
                {this.renderAll()}            
           </View>               
        )
    }
}

const mapStateToProps = state => {
    const { email, password, loading, data, error } = state.auth
    return {
      email,
      password,
      loading,
      data,
      error
    }
}

export default connect(mapStateToProps, { loginChanged, passwordChanged, postLogin })(Home)