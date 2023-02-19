import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Font from "expo-font";
import Back from "../../Svgs/Back";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
export default function WriteUs() {
  const [loaded, setloaded] = useState(false);
  const navigation = useNavigation();
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
      <View style={styles.nav}>
        <TouchableOpacity>
          <View>
            <Back
              style={styles.back}
              onPress={() => navigation.navigate("TabNavigation")}
            />
          </View>
        </TouchableOpacity>
        {loaded ? <Text style={styles.text1}>Write To Us</Text> : ""}
      </View>
      <View style={styles.greyline}></View>
      <View style={styles.termsbox}>
        <TextInput
          placeholder="Type Here..."
          style={styles.input2}
          multiline={true}
        />
        <TouchableOpacity
          style={styles.getstarted}
          onPress={() => navigation.navigate("ReportSuccessfull")}
        >
          {loaded ? (
            <Text style={styles.getstartedtext}>Send Feedback</Text>
          ) : (
            ""
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
  },
  nav: {
    display: "flex",
    marginTop: 60,
  },
  back: {
    alignSelf: "flex-start",

    position: "absolute",

    left: 16,
  },
  text1: {
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 16,
    position: "absolute",
  },
  greyline: {
    width: "100%",
    height: 1,
    backgroundColor: "#D6D6D6",
    marginTop: 50,
  },
  termsbox: {
    width: "93%",
    display: "flex",
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
  },
  text2: {
    color: "#94A1B2",
    fontFamily: "CircularStd",
    fontSize: 16,
    marginTop: 20,
  },
  input2: {
    borderWidth: 1,
    borderColor: "#D6D6D6",
    height: 190,
    width: "93%",
    marginTop: 30,
    borderRadius: 12,
    padding: 20,
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 14,
    display: "flex",
  },
  getstarted: {
    width: "93%",
    backgroundColor: "#246BFD",
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,

    alignSelf: "center",
  },
  getstartedtext: {
    color: "white",
    fontFamily: "CircularStd",
    fontSize: 14,
  },
});
