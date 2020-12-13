import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * @param {string} key
 * @param {object} data
 */
export const setStorageItem = async (key, data) => {
    return AsyncStorage.setItem(key, JSON.stringify(data));
}

/**
 * @param {string} key 
 */
export const getStorageItem = (key) => {
    return AsyncStorage.getItem(key).then(value => JSON.parse(value));
}

/**
 * @param {string} key 
 */
export const removeStorageItem = (key) => {
    return AsyncStorage.removeItem(key);
}