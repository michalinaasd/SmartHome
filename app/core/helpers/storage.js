import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * @param {string} key
 * @param {object} data
 */
export const setStorageItem = async (key, data) => {
    try {
        if (typeof data != 'object') {
            throw new Error('Not an object');
        }

        await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

/**
 * @param {string} key 
 */
export const getStorageItem = async (key) => {
    try {
        let storageData = await AsyncStorage.getItem(key);

        if (!storageData) {
            return null;
        }

        let data = JSON.parse(storageData);

        return data;
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

/**
 * @param {string} key 
 */
export const removeStorageItem = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log("Something went wrong", error);
    }
}