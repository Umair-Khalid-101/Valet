import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import Back from "../../Svgs/Back";
import { AntDesign } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Notification() {
  const [state, setState] = useState({ cycle: 0, colorIndex: 0 });
  const colors = ["red", "green", "blue", "purple", "orange"]; // an array of colors to cycle through
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

  const changeStyles = () => {
    const interval = setInterval(() => {
      setState((prevState) => {
        const { cycle, colorIndex } = prevState;
        const newColorIndex = (colorIndex + 1) % colors.length;
        if ((cycle + 1) % 5 === 0) {
          return { cycle: 0, colorIndex: newColorIndex };
        } else {
          return { cycle: cycle + 1, colorIndex: newColorIndex };
        }
      });
    }, 300000); // 5 minutes in milliseconds

    return () => clearInterval(interval);
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
          <View style={styles.circle2}>
            <MaterialIcons name="done" size={18} color="white" />
          </View>
          <View style={styles.circle}>
            <AntDesign name="clockcircleo" size={24} color="#FFB317" />
          </View>
          {loaded ? (
            <Text style={styles.text3}>
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
          <View style={styles.circle2}>
            <MaterialIcons name="done" size={18} color="white" />
          </View>
          <View style={styles.circle3}>
            <MaterialCommunityIcons
              name="timer-sand-empty"
              size={24}
              color="#24A2FD"
            />
          </View>
          {loaded ? (
            <Text style={styles.text3}>
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
          <View style={styles.circle2}>
            <MaterialIcons name="done" size={18} color="white" />
          </View>
          <View style={styles.circle4}>
            <Feather name="trash-2" size={24} color="#7624FD" />
          </View>
          {loaded ? (
            <Text style={styles.text3}>
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
          <View style={styles.circle2}>
            <MaterialIcons name="done" size={18} color="white" />
          </View>
          <View style={styles.circle5}>
            <MaterialCommunityIcons
              name="bus-school"
              size={24}
              color="#FD247F"
            />
          </View>
          {loaded ? (
            <Text style={styles.text3}>
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
          <View style={styles.circle2}>
            <MaterialIcons name="done" size={18} color="white" />
          </View>
          <View style={styles.circle6}>
            <Image
              source={require("../../../assets/check.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
          {loaded ? <Text style={styles.text4}>Thank you</Text> : ""}
        </View>
      </View>
      <TouchableOpacity style={styles.back2}>
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
    backgroundColor: "rgba(255, 179, 23,0.1)",
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
    backgroundColor: "rgba(36, 162, 253,0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  circle4: {
    display: "flex",
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: "rgba(118, 36, 253,0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  circle5: {
    display: "flex",
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: "rgba(253, 36, 127,0.1)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  circle6: {
    display: "flex",
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: "rgba(36, 253, 58,0.1)",
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
    backgroundColor: "#27AE60",
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
