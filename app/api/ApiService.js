
import axios from 'axios';

export default class ApiService {
    constructor() {
        this.url = "http://localhost:8000";
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
                        localStorage.setItem('jwt_access', response.data.access);
                        localStorage.setItem('jwt_refresh', response.data.refresh);

                        this.http.defaults.headers.common = {
                            'Authorization': `Bearer ${localStorage.getItem('jwt_access').toString()}`,
                            'Accept': '*/*',
                            'Connection': 'keep-alive'
                        };

                        resolve("Jwt created successfuly");
                    }
                }).catch(error => {
                    var failure = {
                        status: 422,
                        message: 'Wystąpił problem z serwerem',
                        data: {}
                    }

                    /* Error 400 - Bad request */
                    if (error.response.status == 400) {
                        failure = {
                            status: 400,
                            message: "Wystąpił problem z formularzem",
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
                    localStorage.setItem('user', JSON.stringify(response.data));

                    resolve("Logged successfully");
                }
            }).catch(reason => {
                console.warn(reason);
                reject("Something went wrong with logging!");
            })
        })
    }
}