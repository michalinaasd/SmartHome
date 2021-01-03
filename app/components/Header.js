import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getJwt, getUser, STORAGE_JWT_ACCESS } from "../core/api/AuthService";

const Header = () => {
  const [user, setUser] = useState(null);

  if (!user) {
    getUser().then(user => {
      if (user) {
        setUser(user);
      }
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
          }}
        >
          Welcome home
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "700",
          }}
        >
          {user && user.email}
        </Text>
        <Text style={{ fontSize: 18 }}>Lorem ipsum dolor sit amet</Text>
      </View>
      <View style={styles.logo}>
        <MaterialCommunityIcons name="home" color="white" size={80} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "25%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "#009387",
    borderRadius: 50,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
