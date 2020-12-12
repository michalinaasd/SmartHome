
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorageItem, removeStorageItem, setStorageItem } from '../helpers/storage';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const STORAGE_JWT_ACCESS = '@AuthStorage:jwt_access';
const STORAGE_JWT_REFRESH = '@AuthStorage:jwt_refresh';
const STORAGE_USER = '@AuthStorage:user';

export default class AuthService {
    constructor() {
        this.url = "http://192.168.0.105:8000";
        this.http = axios.create({
            baseURL: this.url
        });
    }

    logout() {
        return new Promise(resolve => {
            removeUser().then(() => {
                resolve(true);
            });
        });
    }

    async login(username, password) {
        return new Promise((resolve, reject) => {
            return this.jwtCreate(username, password).then(() => {
                return this.me().then(user => resolve(user)).then(reason => reject(reason));
            }).catch(reason => reject(reason));
        });
    }

    async jwtCreate(username, password) {
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

                        try {
                            this.storeJwt(response.data.access, response.data.refresh);

                            resolve(true);
                        } catch (e) {
                            console.warn(e);
                        }
                    }
                }).catch(error => {
                    let failure = {
                        status: 422,
                        message: 'Wystąpił problem z serwerem',
                        data: {}
                    }

                    if (error.response) {
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

    async me() {
        const endpointUrl = '/api/auth/users/me/';

        return new Promise((resolve, reject) => {
            this.http.get(endpointUrl).then(response => {
                if (response.status == 200) {
                    try {
                        this.storeUser(response.data);
                    } catch (error) {
                        reject(error);
                    }

                    resolve(response.data);
                }
            }).catch(reason => {
                console.warn(reason);
                reject("Something went wrong with logging!");
            })
        })
    }

    async storeJwt(access, refresh) {
        await setStorageItem(STORAGE_JWT_ACCESS, access);
        await setStorageItem(STORAGE_JWT_REFRESH, refresh);
    }

    async storeUser(user) {
        await setStorageItem(STORAGE_USER, user);
    }
}

export const getJwt = async () => {
    return getStorageItem(STORAGE_JWT_ACCESS);
}

export const removeUser = async () => {
    await removeStorageItem(STORAGE_USER);
}

export const getUser = async () => {
    return getStorageItem(STORAGE_USER);
}
