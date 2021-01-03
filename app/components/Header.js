import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getUser } from "../core/api/AuthService";

const Header = () => {
  const [user, setUser] = useState(null);

  if (!user) {
    getUser().then((user) => {
      if (user) {
        setUser(user);
      }
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome home</Text>
        <Text style={styles.text}>
          {user &&
            user.email.charAt(0).toUpperCase() +
              user.email.slice(1, user.email.indexOf("@"))}
        </Text>
      </View>
      <View style={styles.logo}>
        <MaterialCommunityIcons name="home" color="white" size={80} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
  },
});

export default Header;
