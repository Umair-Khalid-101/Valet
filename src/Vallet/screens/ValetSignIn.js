import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import Vector from "../../Svgs/Vector";
import MunsTrashValet from "../../Svgs/MunsTrashValet";

function ValetSignIn(props) {
  const navigation = useNavigation();
  const [loaded, setloaded] = useState(false);

  const loadfonts = async () => {
    await Font.loadAsync({
      CircularStd: require("../../../assets/CircularStd.ttf"),
      "CircularStd-Bold": require("../../../assets/CircularStd-Bold.otf"),
      Montserrat: require("../../../assets/Montserrat.ttf"),
    });
    setloaded(true);
  };
  useEffect(() => {
    loadfonts();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Vector />
        <View style={styles.logotext}>
          <MunsTrashValet />
        </View>
      </View>
      <View style={styles.greyline}></View>
      <View style={styles.inputview}>
        {loaded ? <Text style={styles.SignIntext}>Sign In</Text> : ""}
        {loaded ? (
          <Text style={styles.text2}>Please sign-in to your account</Text>
        ) : (
          ""
        )}
        {loaded ? <Text style={styles.text3}>Username</Text> : ""}
        <TextInput placeholder="John Doe" style={styles.input} />
        {loaded ? <Text style={styles.text4}>Password</Text> : ""}

        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.getstarted}
            onPress={() => navigation.navigate("TabNavigation")}
          >
            {loaded ? <Text style={styles.getstartedtext}>Sign In</Text> : ""}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ValetSignIn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 80 : 50,
  },
  logotext: {
    marginTop: 10,
  },
  greyline: {
    width: "100%",
    height: 1,
    backgroundColor: "#D6D6D6",
    marginTop: 30,
  },
  SignIntext: {
    fontSize: 28,
    fontFamily: "CircularStd",
    marginTop: 30,
    left: 16,
    letterSpacing: -1,
  },
  text2: {
    fontSize: 14,
    fontFamily: "CircularStd",
    color: "#94A1B2",
    marginTop: 10,
    left: 16,
  },
  text3: {
    fontSize: 12,
    fontFamily: "CircularStd",
    color: "#94A1B2",
    marginTop: 50,
    left: 16,
  },
  text4: {
    fontSize: 12,
    fontFamily: "CircularStd",
    color: "#94A1B2",
    marginTop: 40,
    left: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D6D6D6",
    height: 50,
    width: "90%",
    marginTop: "2%",
    borderRadius: 12,

    paddingLeft: 20,
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 14,
  },

  getstarted: {
    width: "90%",
    backgroundColor: "#246BFD",
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,

    alignSelf: "center",
  },
  getstartedtext: {
    color: "white",
    fontFamily: "CircularStd",
    fontSize: 14,
  },
});
