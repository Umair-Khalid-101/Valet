import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import Vector from "../../Svgs/Vector";
import MunsTrashValet from "../../Svgs/MunsTrashValet";

function LandingPage(props) {
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
      <View style={styles.parentcontainer}>
        <View style={styles.container1}>
          <ImageBackground
            source={require("../../../assets/Dust.png")}
            style={styles.dust}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "row",
              }}
            >
              <View style={styles.bannertext}>
                <View style={styles.secondtext}>
                  {loaded ? <Text style={styles.hitext}>Hi There</Text> : ""}
                  <Image
                    source={require("../../../assets/hand.png")}
                    style={styles.hand}
                  />
                </View>
                {loaded ? (
                  <Text style={styles.welcometext}>Welcome Back to Muns</Text>
                ) : (
                  ""
                )}
              </View>
              <Image
                source={require("../../../assets/man.png")}
                style={styles.man}
              />
            </View>
          </ImageBackground>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("SendNotification")}
        >
          <View style={styles.container2}>
            <Text style={styles.notificationtext}>Send Notifications</Text>
            <Text style={styles.startext}>
              Start your route and inform residents
            </Text>
            <Image
              source={require("../../../assets/notification.png")}
              style={{
                flex: 1,
                resizeMode: "contain",
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Incident")}>
          <View style={styles.container3}>
            <Text style={styles.incidenttext}>Create Incident Report</Text>
            <Text style={styles.startext}>
              Incident report for property manager
            </Text>
            <Image
              source={require("../../../assets/Incident.png")}
              style={{ flex: 1, resizeMode: "contain" }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default LandingPage;
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
  bannertext: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  container1: {
    width: "90%",
    height: 120,
    backgroundColor: "#2C2C40",
    borderRadius: 16,
    marginTop: 15,
    display: "flex",
    alignSelf: "center",
  },
  container2: {
    width: "90%",
    height: 200,
    backgroundColor: "#F8D8F5",
    borderRadius: 16,
    marginTop: 15,
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  container3: {
    width: "90%",
    height: 200,
    backgroundColor: "#D7FEDD",
    borderRadius: 16,
    marginTop: 15,
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  dust: {
    width: "100%",
    height: "100%",
  },
  secondtext: {
    display: "flex",
    flexDirection: "row",
  },
  hand: {
    marginLeft: 10,
    width: 30,
    height: 30,
  },
  man: {
    width: 85,
    height: 110,
    marginTop: 10,
    marginLeft: 60,
  },
  hitext: {
    fontSize: 20,
    fontFamily: "CircularStd-Bold",
    color: "white",
  },
  notificationtext: {
    fontSize: 20,
    fontFamily: "CircularStd-Bold",
    marginTop: 10,
  },
  incidenttext: {
    fontSize: 20,
    fontFamily: "CircularStd-Bold",
    marginTop: 10,
  },
  welcometext: {
    fontSize: 12,
    fontFamily: "CircularStd",
    color: "white",
  },
  startext: {
    fontSize: 12,
    fontFamily: "CircularStd",
    color: "black",
  },
});
