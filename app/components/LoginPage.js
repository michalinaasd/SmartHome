import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import logo from '../../images/logo.png';
import { TextInput } from 'react-native-paper';
import AuthService from '../core/api/AuthService';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

const {width: WIDTH} = Dimensions.get('window');

const LoginPage = ({ navigation }) => {
    const [showPass, setShowPass] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validators, setValidators] = useState({
        email: [],
        password: []
    });
    const [validationError, setValidationError] = useState(null)

    const emailValidators = [];
    const passwordValidators = [];

    const renderValidator = function (value, index) {
        this.push(<View key="index"><Text style={styles.validator}>{value}</Text></View>);
    }

    validators.email?.forEach(renderValidator.bind(emailValidators));
    validators.password?.forEach(renderValidator.bind(passwordValidators));

    const service = new AuthService();

    const handleLogin = async () => {
        setValidators({
            email: [],
            password: []
        });

        setValidationError(null);

        await service.login(email, password).then(response => {
            navigation.navigate("Home");
        }).catch(reason => {
            let errorMessage = 'There was an error with the server';

            if (reason.status == 400) {
                errorMessage = 'Valide data below to continue!';

                const validators = reason.data;

                setValidators(validators);
            }

            if (reason.status == 401) {
                errorMessage = reason.message;
            }

            setValidationError(errorMessage);
        });
    }

    return (
        <KeyboardAvoidingView style={styles.backgroundContainer} behavior="padding">
            <View style={styles.logoContainer}>
                <View style={styles.logoCircle}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <Text style={styles.logoText}>SMART HOME</Text>
            </View>
            {validationError && (
                <View style={styles.validationError}>
                    <Text style={styles.validationErrorText}>{validationError}</Text>
                </View>
            )}
            <View styles={styles.inputContainer}>
                <View style={styles.inputIcon}>
                    <MaterialCommunityIcons name="account" color="rgb(0,0,0)" size={30} />
                </View>
                <TextInput
                    name="email"
                    theme={{ colors: { primary: '#00766c' } }}
                    style={[styles.input, emailValidators.length && styles.inputInvalid]}
                    placeholder={'Email'}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    keyboardType="email-address"
                    placeholderTextColor={'rgba(0,0,0,0.7)'}
                    textContentType="emailAddress"
                    underlineColorAndroid="transparent" />
                {emailValidators}
            </View>
            <View styles={styles.inputContainer}>
                <View style={[styles.inputIcon, styles.inputIconLock]}>
                    <MaterialCommunityIcons name="lock" color="rgb(0,0,0)" size={24} />
                </View>
                <TextInput
                    name="password"
                    theme={{ colors: { primary: '#00766c' } }}
                    style={[styles.input, passwordValidators.length && styles.inputInvalid]}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholder={'Password'}
                    placeholderTextColor={'rgba(0,0,0,0.7)'}
                    secureTextEntry={showPass}
                    textContentType="password"
                    underlineColorAndroid={'transparent'}>
                </TextInput>
                {passwordValidators}
                <TouchableOpacity onPress={() => setShowPass(!showPass)} style={styles.iconEye}>
                    <View>
                        {showPass ? <MaterialCommunityIcons name="eye-outline" color="rgb(0,0,0)" size={24} /> : <MaterialCommunityIcons name="eye-off-outline" color="rgba(0,0,0)" size={24} />}
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buttonLoginTO} onPress={handleLogin}>
                <Text styles={styles.buttonLogin}>LOGIN</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
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
        borderRadius: 100
    },
    validationError: {
        width: WIDTH - 55,
        padding: 16,
        marginTop: 24,
        backgroundColor: 'rgba(202, 174, 171, 0.57)',
        borderLeftWidth: 2,
        borderStyle: 'solid',
        borderLeftColor: 'rgb(255, 0, 0)'
    },
    validationErrorText: {
        color: 'rgb(255, 0, 0)'
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
        borderRadius: 8,
        borderTopEndRadius: 8,
        borderTopLeftRadius: 8,
        marginTop: 20,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(255,255,255,0.35)',
        color: 'rgba(0,0,0,0.5)'
    },
    inputInvalid: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'red',
    },
    inputIcon: {
        position: 'absolute',
        top: 28,
        left: 17
    },
    inputIconLock: {
        top: 31,
        left: 21
    },
    iconEye: {
        position: 'absolute',
        top: 31,
        right: 10
    },
    buttonLoginTO: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    buttonLogin: {
        fontSize: 16,
        textAlign: 'center'
    },
    validator: {
        paddingTop: 8,
        paddingLeft: 24,
        color: '#ff0000'
    }
})



export default LoginPage;
