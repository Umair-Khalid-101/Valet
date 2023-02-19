import { View, Text, Image, SafeAreaView } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import * as Font from "expo-font";

import { colors } from "../../constants/colors";
import Logo from "../../Svgs/Logo";

const SplashScreen = ({ navigation }) => {
  const [loaded, setLoaded] = useState(false);
  const animation = useRef(null);
  const loadfonts = async () => {
    await Font.loadAsync({
      Montserrat: require("../../../assets/Montserrat.ttf"),
    });
    setLoaded(true);
  };
  useEffect(() => {
    loadfonts();
    setTimeout(() => {
      navigation.navigate("MainScreen");
    }, 3000);
  }, []);
  return (
    <>
      <SafeAreaView
        className="flex-1 justify-center items-center"
        style={{ backgroundColor: colors.primary }}
      >
        <View className="flex justify-center items-center absolute">
          <Logo />
          {loaded ? (
            <Text
              className="text-white text-[24px] mt-[10px]"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              MUNS TRASHVALET
            </Text>
          ) : null}
        </View>

        <LottieView
          className="w-32 h-32"
          style={{
            position: "relative",
            marginTop: 150,
          }}
          autoPlay
          ref={animation}
          source={require("../../../assets/Loader.json")}
        />
      </SafeAreaView>
    </>
  );
};

export default SplashScreen;
