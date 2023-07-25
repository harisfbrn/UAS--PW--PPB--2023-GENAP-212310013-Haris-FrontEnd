import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import React, {useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import color from "../style/color.js";
import MaterialIcons from "react-native-vector-icons/MaterialIcons.js";
import Ionicons from "react-native-vector-icons/Ionicons.js";
import SignUp from "./SignUp.js";
import { useNavigation } from "@react-navigation/native";

const navigation = useNavigation();


const Login = () => {
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem("@viewedOnBoarding");
    } catch (err) {
      console.log("Error @clearOnBoarding: ", err);
    }
  };

  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.container, { width }]}>
      <TouchableOpacity style={styles.clear} onPress={clearOnboarding}>
        <Text style={{ color: color.blue }}>Clear OnBoarding</Text>
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.login}>LOGIN</Text>
        <Text style={styles.to}>to</Text>
        <Text style={styles.gor}>GOR APP</Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderColor: color.blue,
          borderRadius: 10,
          marginTop: 40,
          padding: 20,
          height: 250,
          width: 350,
        }}
      >
        <View style={{
          flexDirection: "row",
          borderColor: color.blue,
          borderBottomWidth: 1,
        }}>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color={color.blue}
            marginTop={15}
            marginRight={10}
          />
          <TextInput
            placeholder="E-mail"
            style={{
              fontSize: 15,
              backgroundColor: color.black,
              borderColor: color.blue,
              borderLeftWidth: 1,
              flex: 1,
              height: 50,
              color: color.blue,
              paddingLeft: 15,
            }}
            placeholderTextColor={color.blue}
            keyboardType="email-address"
          />
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, borderColor: color.blue, borderBottomWidth: 1,}}>
        <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color={color.blue}
            marginTop={23}
            marginRight={10}
          />
          <TextInput
            placeholder="Password"
            style={{
              color: color.blue,
              fontSize: 15,
              backgroundColor: color.black,
              borderColor: color.blue,
              borderLeftWidth: 1,
              flex: 1,
              height: 50,
              color: color.blue,
              paddingLeft: 5,
              marginTop: 10,
              paddingLeft: 15
            }}
            placeholderTextColor={color.blue}
            secureTextEntry={true}
          ></TextInput>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <TouchableOpacity style={styles.logButton} onPress={{}}>
            <Text style={{ fontSize: 20 }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signButton} onPress={{}}>
            <Text style={{ color: color.blue, fontSize: 20 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  clear: {
    position: "absolute",
    top: 70,
    left: 20,
  },
  title: {
    alignItems: "center",
  },

  login: {
    fontWeight: 700,
    fontSize: 60,
    color: color.blue,
  },

  to: {
    fontSize: 40,
    color: color.blue,
  },

  gor: {
    fontWeight: 700,
    fontSize: 60,
    color: color.blue,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.black,
  },

  forgotPassword: {
    color: color.blue,
    left: 210,
    marginTop: 15,
  },

  logButton: {
    backgroundColor: color.blue,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginRight: 20,
    height: 35,
    borderRadius: 10,
  },

  signButton: {
    backgroundColor: color.black,
    borderColor: color.blue,
    borderWidth: 1,
    height: 35,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
