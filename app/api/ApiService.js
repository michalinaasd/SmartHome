
import axios from 'axios';
import { Subject } from 'rxjs';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

export const currentUserSubject = new Subject();

try {
    AsyncStorage.getItem('@AuthStore:user').then(user => {
        if (user !== null) {
            currentUserSubject.next(user);
        }
    })
} catch (error) {
    // Error saving data
}

export const currentUser = currentUserSubject.asObservable();

export default class ApiService {
    constructor() {
        this.url = "http://192.168.0.105:8000";
        this.http = axios.create({
            baseURL: this.url
        });
    }

    register() {
        const endpointUrl = `${this.url}/api/auth/users`;
    }

    jwtCreate(username, password) {
        const endpointUrl = `/api/auth/jwt/create`;

        return new Promise((resolve, reject) => {
            var params = new URLSearchParams();
            params.append('email', username);
            params.append('password', password);

            this.http.post(endpointUrl, params)
                .then(response => {
                    if (response.status == 200) {
                        this.http.defaults.headers.common = {
                            'Authorization': `Bearer ${response.data.access}`,
                            'Accept': '*/*',
                            'Connection': 'keep-alive'
                        };

                        resolve("Jwt created successfuly");

                        // Promise.all([
                        //     AsyncStorage.setItem('@AuthStore:jwt_access', response.data.access),
                        //     AsyncStorage.setItem('@AuthStore:jwt_refresh', response.data.refresh)
                        // ]).then(() => {
                        //     alert('subscribed');
                        // })
                    }
                }).catch(error => {
                    var failure = {
                        status: 422,
                        message: 'Wystąpił problem z serwerem',
                        data: {}
                    }

                    if (error.reponse) {
                        /* Error 400 - Bad request */
                        if (error.response.status == 400) {
                            failure = {
                                status: 400,
                                message: username + ':' + password,
                                data: error.response.data

                            }
                        }

                        /* Error 401 - Forbidden */
                        if (error.response.status == 401) {
                            failure = {
                                status: 401,
                                message: error.response.data.detail

                            }
                        }
                    }

                    reject(failure);
                });
        });
    }

    me() {
        const endpointUrl = '/api/auth/users/me/';

        return new Promise((resolve, reject) => {
            this.http.get(endpointUrl, {

            }).then(response => {
                if (response.status == 200) {
                    // try {
                    //     AsyncStorage.setItem(
                    //         '@AuthStore:user',
                    //         JSON.stringify(response.data)
                    //     );
                    // } catch (error) {
                    //     // Error saving data
                    // }
                    // localStorage.setItem('user', JSON.stringify(response.data));
                    currentUserSubject.next(response.data);

                    resolve("Logged successfully");
                }
            }).catch(reason => {
                console.warn(reason);
                reject("Something went wrong with logging!");
            })
        })
    }
}