import axios from "axios";
import {
  getStorageItem,
  removeStorageItem,
  setStorageItem,
} from "../helpers/storage";

export const STORAGE_JWT_ACCESS = "@AuthStorage:jwt_access";
const STORAGE_JWT_REFRESH = "@AuthStorage:jwt_refresh";
const STORAGE_USER = "@AuthStorage:user";

export default class AuthService {
  constructor() {
    this.url = "https://inzynierka-server.herokuapp.com";
    this.http = axios.create({
      baseURL: this.url,
    });
  }

  logout() {
    return new Promise((resolve) => {
      removeUser().then(() => {
        resolve(true);
      });
    });
  }

  async login(login, password) {
    return new Promise((resolve, reject) => {
      return this.jwtCreate(login, password)
        .then(() => {
          return this.me()
            .then((user) => resolve(user))
            .then((reason) => reject(reason));
        })
        .catch((reason) => reject(reason));
    });
  }

  async jwtCreate(login, password) {
    const endpointUrl = `/api/auth/jwt/create`;

    return new Promise((resolve, reject) => {
      var params = new URLSearchParams();
      params.append("email", login);
      params.append("password", password);

      this.http
        .post(endpointUrl, params)
        .then((response) => {
          if (response.status == 200) {
            this.http.defaults.headers.common = {
              Authorization: `Bearer ${response.data.access}`,
              Accept: "*/*",
              Connection: "keep-alive",
            };

            try {
              this.storeJwt(response.data.access, response.data.refresh).then(
                () => {
                  resolve(true);
                }
              );
            } catch (e) {
              console.warn(e);
            }
          }
        })
        .catch((error) => {
          let failure = {
            status: 422,
            message: "Wystąpił problem z serwerem",
            data: {},
          };

          if (error.response) {
            /* Error 400 - Bad request */
            if (error.response.status == 400) {
              failure = {
                status: 400,
                message: login + ":" + password,
                data: error.response.data,
              };
            }

            /* Error 401 - Forbidden */
            if (error.response.status == 401) {
              failure = {
                status: 401,
                message: error.response.data.detail,
              };
            }
          }

          reject(failure);
        });
    });
  }

  async me() {
    const endpointUrl = "/api/auth/users/me/";

    return new Promise((resolve, reject) => {
      this.http
        .get(endpointUrl)
        .then((response) => {
          if (response.status == 200) {
            try {
              this.storeUser(response.data).then(() => {
                resolve(response.data);
              });
            } catch (error) {
              reject(error);
            }
          }
        })
        .catch((reason) => {
          console.warn(reason);
          reject("Something went wrong with logging!");
        });
    });
  }

  async storeJwt(access, refresh) {
    return Promise.all([
      setStorageItem(STORAGE_JWT_ACCESS, access),
      setStorageItem(STORAGE_JWT_REFRESH, refresh),
    ]);
  }

  async storeUser(user) {
    return setStorageItem(STORAGE_USER, user);
  }

  async getData(endpointUrl) {
    this.token = await getJwt().then((res) => {
      return res;
    });

    return new Promise((resolve, reject) => {
      fetch(this.url + endpointUrl, {
        method: "get",
        headers: new Headers({
          Authorization: `Bearer ${this.token}`,
        }),
      })
        .then((res) => res.json())
        .then((result) => resolve(result))
        .catch((reason) => reject(reason));
    });
  }

  async createScene(data) {
    this.token = await getJwt().then((res) => {
      console.log(res);
      return res;
    });

    console.log(data);

    return new Promise((resolve, reject) => {
      fetch(this.url + "/api/scenes/", {
        method: "post",
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        }),
        body: JSON.stringify(data),
      }).catch((reason) => reject(reason));
    });
  }
}

export const getJwt = async () => {
  return getStorageItem(STORAGE_JWT_ACCESS);
};

export const removeUser = async () => {
  await removeStorageItem(STORAGE_USER);
};

export const getUser = async () => {
  return getStorageItem(STORAGE_USER);
};
