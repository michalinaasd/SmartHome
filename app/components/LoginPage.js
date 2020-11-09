import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { Component } from 'react';
import logo from '../../images/logo.png';
import { TextInput } from 'react-native-paper';
import { AiOutlineUser, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import ApiService from '../api/ApiService';

const { width: WIDTH } = Dimensions.get('window')

class LoginPage extends Component {


    constructor() {
        super();
        
        this.state = {
            showPass: true,
            press: false,
            username: '',
            password: ''
        }

        this.service = new ApiService();
    }

    updateLoginValue(e) {
        this.setState({
            username: e.target.value
        });
    }

    updatePasswordValue(e) {
        this.setState({
            password: e.target.value
        });
    }

    showPass = () => {
        if (!this.state.press) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }

    login = () => {
        this.service.jwtCreate(this.state.username, this.state.password).then(response => {
            this.service.me().then(response => {
            })
        }).catch(reason => {
            // TODO: Walidacja formularza i walidacja 401 forbidden

            if (reason.status == 400) {
                alert(reason.message);
            }

            if (reason.status == 401) {
                alert(reason.message);
            }
        });
    }

    render() {
        return (
            <View style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <View style={styles.logoCircle}>
                        <Image source={logo} style={styles.logo} />
                    </View>
                    <Text style={styles.logoText}>SMART HOME</Text>
                </View>
                <View styles={styles.inputContainer}>
                    <View style={styles.inputIcon}>
                        <AiOutlineUser size={30} />
                    </View>
                    <TextInput
                        name="email"
                        theme={{ colors: { primary: 'orange' } }}
                        style={styles.input}
                        placeholder={'Username'}
                        value={this.state.username}
                        onChange={this.updateLoginValue.bind(this)}
                        placeholderTextColor={'rgba(0,0,0,0.7)'}
                        underlineColorAndroid={'transparent'} />
                </View>
                <View styles={styles.inputContainer}>
                    <View style={styles.inputIcon}>
                        <RiLockPasswordLine size={30} />
                    </View>
                    <TextInput
                        name="password"
                        theme={{ colors: { primary: 'orange' } }}
                        style={styles.input}
                        value={this.state.password}
                        onChange={this.updatePasswordValue.bind(this)}
                        placeholder={'Password'}
                        placeholderTextColor={'rgba(0,0,0,0.7)'}
                        secureTextEntry={this.state.showPass}
                        underlineColorAndroid={'transparent'}>
                    </TextInput>
                    <TouchableOpacity onPress={this.showPass.bind(this)} style={styles.iconEye}>
                        <View>
                            {
                                (this.state.press == false) && <AiOutlineEye size={30} />
                            }
                            {
                                (this.state.press == true) && <AiOutlineEyeInvisible size={30} />
                            }
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonLoginTO} onPress={this.login.bind(this)}>
                    <Text styles={styles.buttonLogin}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009387'
    },
    logoContainer: {
        alignItems: 'center',
    },
    logoCircle: {
        height: 160,
        width: 160,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: '100%'
    },
    logo: {
        width: 120,
        height: 120,
        opacity: 0.5
    },
    logoText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5

    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        borderTopEndRadius: 25,
        borderTopLeftRadius: 25,
        marginTop: 20,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(255,255,255,0.35)',
        color: 'rgba(0,0,0,0.5)',
    },
    inputIcon: {
        position: 'absolute',
        top: 25,
        left: 17
    },
    iconEye: {
        position: 'absolute',
        top: 30,
        right: 10
    },
    buttonLoginTO: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'rgba(255,255,255,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    buttonLogin: {
        fontSize: 16,
        textAlign: 'center'
    }
})



export default LoginPage;
