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
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import Back from "../../Svgs/Back";
import { AntDesign } from "@expo/vector-icons";
import { SelectList } from "react-native-dropdown-select-list";

export default function Incident() {
  const [pickerValue, setPickerValue] = useState("JavaScript");
  const navigation = useNavigation();
  const [loaded, setloaded] = useState(false);
  const [selected, setSelected] = React.useState("");
  const [image, setImage] = useState(null);
  const placeHolder =
    "http://res.cloudinary.com/dfmhxmauj/image/upload/v1670337910/axqfk5lkxf09qsbhpspr.jpg";

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log("image",result);

    if (!result.canceled) {
      setImage(result.assets[0]);
      // console.log(image);
    }
  };

  let source;
  if (!image) {
    source = { uri: placeHolder };
  } else {
    source = image;
  }

  const data = [
    { value: "Independance Place" },
    { value: "Lake Fairway" },
    { value: "Sun Hollow" },
    { value: "Ridgemar" },
    { value: "Spring Park" },
    { value: "Cliffside at Mountain Park" },
    { value: "Desert Commons" },
  ];
  const city = [{ value: "El Paso" }];
  const state = [{ value: "Texas" }];

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
      <ScrollView>
        <View style={styles.nav}>
          <TouchableOpacity>
            <View>
              <Back
                style={styles.back}
                onPress={() => navigation.navigate("TabNavigation")}
              />
            </View>
          </TouchableOpacity>
          {loaded ? (
            <Text style={styles.text1}>Create Incident Report</Text>
          ) : (
            ""
          )}
        </View>
        <View style={styles.greyline}></View>
        <View style={styles.inputview}>
          {loaded ? <Text style={styles.text2}>State</Text> : ""}

          <SelectList
            setSelected={(val) => setSelected(val)}
            data={state}
            boxStyles={styles.input}
            placeholder="State"
            inputStyles={{
              fontFamily: "CircularStd",
              width: "80%",
              alignSelf: "center",
            }}
            dropdownTextStyles={{ fontFamily: "CircularStd" }}
            dropdownStyles={{
              width: "90%",
              alignSelf: "center",
            }}
          />
        </View>
        <View style={styles.inputview}>
          {loaded ? <Text style={styles.text2}>City</Text> : ""}

          <SelectList
            setSelected={(val) => setSelected(val)}
            data={city}
            boxStyles={styles.input}
            placeholder="City"
            inputStyles={{
              fontFamily: "CircularStd",
              width: "80%",
              alignSelf: "center",
            }}
            dropdownTextStyles={{ fontFamily: "CircularStd" }}
            dropdownStyles={{
              width: "90%",
              alignSelf: "center",
              borderColor: "grey",
            }}
          />
        </View>
        <View style={styles.inputview}>
          {loaded ? <Text style={styles.text2}>Property</Text> : ""}

          <SelectList
            setSelected={(val) => setSelected(val)}
            data={data}
            boxStyles={styles.input}
            placeholder="Property"
            inputStyles={{
              fontFamily: "CircularStd",
              width: "80%",
              alignSelf: "center",
            }}
            dropdownTextStyles={{ fontFamily: "CircularStd" }}
            dropdownStyles={{
              width: "90%",
              alignSelf: "center",
            }}
          />
        </View>
        {loaded ? <Text style={styles.text2}>Apartment # (Optional)</Text> : ""}

        <TextInput placeholder="Enter Apartment Number" style={styles.input} />
        {loaded ? <Text style={styles.text2}>Other</Text> : ""}

        <TextInput
          placeholder="Type Here..."
          secureTextEntry={true}
          style={styles.input2}
          multiline={true}
        />
        {loaded ? <Text style={styles.text2}>Issue</Text> : ""}

        <TextInput
          placeholder="Type Here..."
          secureTextEntry={true}
          style={styles.input2}
          multiline={true}
        />
        <View style={styles.camerabox}>
          <TouchableOpacity style={styles.iconbox} onPress={pickImage}>
            <View>
              <AntDesign name="upload" size={24} color="#246BFD" />
            </View>
          </TouchableOpacity>
          {loaded ? <Text style={styles.text4}>Upload Image</Text> : ""}
          {loaded ? (
            <Text style={styles.text3}>Choose file to be uploaded</Text>
          ) : (
            ""
          )}
        </View>
        {image && (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={source}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginTop: "2%",
              }}
            />
          </View>
        )}
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.getstarted}
            onPress={() => navigation.navigate("ReportSuccessfull")}
          >
            {loaded ? (
              <Text style={styles.getstartedtext}>Create Incident Report</Text>
            ) : (
              ""
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ height: 30 }}></View>
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
    display: "flex",
  },
  input2: {
    borderWidth: 1,
    borderColor: "#D6D6D6",
    height: 140,
    width: "90%",
    marginTop: "2%",
    borderRadius: 12,
    padding: 20,
    alignSelf: "center",
    fontFamily: "CircularStd",
    fontSize: 14,
    display: "flex",
  },
  text2: {
    fontSize: 12,
    fontFamily: "CircularStd",
    color: "#94A1B2",
    marginTop: 20,
    left: 16,
  },
  pickeritem: {
    fontSize: 14,
    fontFamily: "CircularStd",
  },
  picker: {
    fontFamily: "CircularStd",
  },
  inputview: {
    display: "flex",
    justifyContent: "flex-start",
  },
  camerabox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    height: 150,
    borderStyle: "dashed",
    backgroundColor: "rgba(36, 107, 253, 0.1)",
    alignSelf: "center",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#246BFD",
    marginTop: 12,
  },
  text3: {
    fontSize: 14,
    fontFamily: "CircularStd",
    color: "#94A1B2",
    marginTop: 5,
  },
  text4: {
    fontSize: 16,
    fontFamily: "CircularStd",
    color: "#246BFD",
    marginTop: 5,
  },
  iconbox: {
    width: "20%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    borderColor: "rgba(36, 107, 253, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
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
