import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import Back from "../../Svgs/Back";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const defaultColor = "#F5F5F5";
const darkDefaultColor = "#94A1B2";
const TrueColor = "#27AE60";
const Icon1BG = "rgba(255, 179, 23,0.1)";
const Icon1C = "#FFB317";
const Icon2BG = "rgba(36, 162, 253,0.1)";
const Icon2C = "#24A2FD";
const Icon3BG = "rgba(118, 36, 253,0.1)";
const Icon3C = "#7624FD";
const Icon4BG = "rgba(253, 36, 127,0.1)";
const Icon4C = "#FD247F";
const Icon5BG = "rgba(36, 253, 58,0.1)";
const Icon5C = "#1ECB2F";

import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function SendNotification() {
  const [loaded, setloaded] = useState(false);
  const [count, setCount] = useState(0);
  const [Icon1, setIcon1] = useState(false);
  const [Icon2, setIcon2] = useState(false);
  const [Icon3, setIcon3] = useState(false);
  const [Icon4, setIcon4] = useState(false);
  const [Icon5, setIcon5] = useState(false);
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

  const handleTimeOut = async () => {
    setIcon1(false);
    setIcon2(false);
    setIcon3(false);
    setIcon4(false);
    setIcon5(false);
    let newCount = 0;
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        newCount++;
        setCount(newCount);
        if (newCount == 1) {
          setIcon1(true);
        } else if (newCount == 2) {
          setIcon2(true);
        } else if (newCount == 3) {
          setIcon3(true);
        } else if (newCount == 4) {
          setIcon4(true);
        } else if (newCount == 5) {
          setIcon5(true);
        }
      }, i * 2000);
    }
  };

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
        {loaded ? <Text style={styles.text1}>Create Incident Report</Text> : ""}
      </View>
      <View style={styles.greyline}></View>
      <View style={styles.redbutton}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View
            style={{
              ...styles.circle2,
              backgroundColor: Icon1 == true ? TrueColor : defaultColor,
            }}
          >
            <MaterialIcons
              name="done"
              size={18}
              color={Icon1 == true ? "#FFFFFF" : darkDefaultColor}
            />
          </View>
          <View
            style={{
              ...styles.circle,
              backgroundColor: Icon1C == true ? Icon1BG : defaultColor,
            }}
          >
            <AntDesign
              name="clockcircleo"
              size={24}
              color={Icon1 == true ? Icon1C : darkDefaultColor}
            />
          </View>
          {loaded ? (
            <Text
              style={{
                ...styles.text3,
                color: Icon1 == true ? "#000000" : darkDefaultColor,
              }}
            >
              Dear resident your valet will be arriving in 1 hour. Please have
              your trash ready
            </Text>
          ) : (
            ""
          )}
        </View>
      </View>
      <View style={styles.verticalline}></View>
      <View style={styles.redbutton2}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View
            style={{
              ...styles.circle2,
              backgroundColor: Icon2 == true ? TrueColor : defaultColor,
            }}
          >
            <MaterialIcons
              name="done"
              size={18}
              color={Icon2 == true ? "#FFFFFF" : darkDefaultColor}
            />
          </View>
          <View
            style={{
              ...styles.circle3,
              backgroundColor: Icon2 == true ? Icon2BG : defaultColor,
            }}
          >
            <MaterialCommunityIcons
              name="timer-sand-empty"
              size={24}
              color={Icon2 == true ? Icon2C : darkDefaultColor}
            />
          </View>
          {loaded ? (
            <Text
              style={{
                ...styles.text3,
                color: Icon2 == true ? "#000000" : darkDefaultColor,
              }}
            >
              Dear resident your valet will arrive in 30 minutes
            </Text>
          ) : (
            ""
          )}
        </View>
      </View>
      <View style={styles.verticalline}></View>
      <View style={styles.redbutton2}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View
            style={{
              ...styles.circle2,
              backgroundColor: Icon3 == true ? TrueColor : defaultColor,
            }}
          >
            <MaterialIcons
              name="done"
              size={18}
              color={Icon3 == true ? "#FFFFFF" : darkDefaultColor}
            />
          </View>
          <View
            style={{
              ...styles.circle4,
              backgroundColor: Icon3 == true ? Icon3BG : defaultColor,
            }}
          >
            <Feather
              name="trash-2"
              size={24}
              color={Icon3 == true ? Icon3C : darkDefaultColor}
            />
          </View>
          {loaded ? (
            <Text
              style={{
                ...styles.text3,
                color: Icon3 == true ? "#000000" : darkDefaultColor,
              }}
            >
              Dear Resident we have now arrived at your location for trash
              pick-up
            </Text>
          ) : (
            ""
          )}
        </View>
      </View>
      <View style={styles.verticalline}></View>
      <View style={styles.redbutton2}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View
            style={{
              ...styles.circle2,
              backgroundColor: Icon4 == true ? TrueColor : defaultColor,
            }}
          >
            <MaterialIcons
              name="done"
              size={18}
              color={Icon4 == true ? "#FFFFFF" : darkDefaultColor}
            />
          </View>
          <View
            style={{
              ...styles.circle5,
              backgroundColor: Icon4 == true ? Icon4BG : defaultColor,
            }}
          >
            <MaterialCommunityIcons
              name="bus-school"
              size={24}
              color={Icon4 == true ? Icon4C : darkDefaultColor}
            />
          </View>
          {loaded ? (
            <Text
              style={{
                ...styles.text3,
                color: Icon4 == true ? "#000000" : darkDefaultColor,
              }}
            >
              We are leaving in 10 mins. Please enter app and request pickup
            </Text>
          ) : (
            ""
          )}
        </View>
      </View>
      <View style={styles.verticalline}></View>
      <View style={styles.redbutton2}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View
            style={{
              ...styles.circle2,
              backgroundColor: Icon5 == true ? TrueColor : defaultColor,
            }}
          >
            <MaterialIcons
              name="done"
              size={18}
              color={Icon5 == true ? "#FFFFFF" : darkDefaultColor}
            />
          </View>
          <View
            style={{
              ...styles.circle6,
              backgroundColor: Icon5 == true ? Icon5BG : defaultColor,
            }}
          >
            <MaterialCommunityIcons
              name="check-all"
              size={20}
              color={Icon5 == true ? Icon5C : darkDefaultColor}
            />
          </View>
          {loaded ? (
            <Text
              style={{
                ...styles.text4,
                color: Icon5 == true ? "#000000" : darkDefaultColor,
              }}
            >
              Thank you
            </Text>
          ) : (
            ""
          )}
        </View>
      </View>
      <TouchableOpacity style={styles.back2} onPress={() => handleTimeOut()}>
        {loaded ? <Text style={styles.text6}>Send Notification</Text> : ""}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  nav: {
    display: "flex",
    marginTop: 60,
  },
  text1: {
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 16,
    position: "absolute",
  },
  back: {
    alignSelf: "flex-start",
    position: "absolute",
    left: 16,
  },
  greyline: {
    width: "100%",
    height: 1,
    backgroundColor: "#D6D6D6",
    marginTop: 50,
  },
  redbutton: {
    width: "88%",
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 12,
    backgroundColor: "white",

    borderColor: "black",
    marginTop: 30,
    marginLeft: 20,
  },
  redbutton2: {
    width: "88%",
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 12,
    backgroundColor: "white",

    borderColor: "black",
    marginTop: 10,
    marginLeft: 20,
  },
  text2: {
    fontFamily: "CircularStd",
    fontSize: 14,
    marginLeft: 20,
    marginTop: 10,
  },
  circle: {
    display: "flex",
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: defaultColor,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  back2: {
    display: "flex",
    backgroundColor: "#246BFD",
    width: "90%",
    height: 60,
    borderRadius: 16,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  circle3: {
    display: "flex",
    width: 45,
    height: 45,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  circle4: {
    display: "flex",
    width: 45,
    height: 45,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  circle5: {
    display: "flex",
    width: 45,
    height: 45,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  circle6: {
    display: "flex",
    width: 45,
    height: 45,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  circle2: {
    display: "flex",
    width: 25,
    height: 25,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  text3: {
    fontFamily: "CircularStd",
    fontSize: 12,
    marginTop: 8,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 15,
  },
  text4: {
    fontFamily: "CircularStd",
    fontSize: 12,
    marginTop: 12,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 15,
  },
  verticalline: {
    width: "0.5%",
    height: 30,
    backgroundColor: "#D6D6D6",
    position: "relative",
    left: 100,
    borderRadius: 20,
    marginTop: 5,
  },
  text6: {
    fontFamily: "CircularStd",
    fontSize: 14,
    color: "white",
  },
});

// #F5F5F5
// #94A1B2

// TRUE #27AE60
// Tick White
// Text Black
// Icon1
// Yello Background
// 'rgba(255, 179, 23,0.1)'
// Yellow icon
// #FFB317
// Icon2
// Blue background
// 'rgba(36, 162, 253,0.1)'
// Blue icon
// #24A2FD
// Icon3
// Light purple
// 'rgba(118, 36, 253,0.1)'
// Purple
// #7624FD
// Icon4
// light pink
// 'rgba(253, 36, 127,0.1)'
// pink#FD247F
// Icon5
// light green
// 'rgba(36, 253, 58,0.1)'
// green
// #1ECB2F
