import React, { useState, useEffect } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

const CameraModule = (props) => {
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        props.setModalVisible();
      }}
    >
      <Camera
        style={{ flex: 1 }}
        ratio="16:9"
        flashMode={Camera.Constants.FlashMode.off}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
        navigation={props.navigation}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            justifyContent: "flex-end",
          }}
        >
          <View
            style={{
              backgroundColor: "black",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={async () => {
                if (cameraRef) {
                  cameraRef
                    .takePictureAsync({
                      base64: true,
                      quality: 1,
                    })
                    .then((data) => {
                      props.setImage(data);
                    });
                }
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 50,
                  borderColor: "white",
                  height: 50,
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 16,
                  marginTop: 16,
                }}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: 50,
                    borderColor: "white",
                    height: 40,
                    width: 40,
                    backgroundColor: "white",
                  }}
                ></View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Camera>
    </Modal>
  );
};
export default function ImagePickerExample(props) {
  const [camera, setShowCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === "granted");
      }
    })();
  }, []);

  const send = (result) => {
    props.route.params.service.updatePicture(
      props.route.params.id,
      Platform.OS !== "web"
        ? `data:image/jpg;base64,${result.base64}`
        : result.uri
    );
    props.navigation.navigate("room", {
      name: props.route.params.name,
      image:
        Platform.OS !== "web"
          ? `data:image/jpg;base64,${result.base64}`
          : result.uri,
      roomID: props.route.params.id,
      service: props.route.params.service,
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (result) {
      send(result);
    }
  };
  if (Platform.OS === "web") {
    return (
      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.text}> Pick from gallery </Text>
      </TouchableOpacity>
    );
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      }}
    >
      <Modal animationType="slide" transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity style={styles.button} onPress={pickImage}>
              <Text style={styles.text}> Pick from gallery </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setShowCamera(true)}
            >
              <Text style={styles.text}> Take a photo </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {camera && (
        <CameraModule
          showModal={camera}
          setModalVisible={() => setShowCamera(false)}
          setImage={(result) => {
            if (result.base64) {
              send(result);
            }
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 200,
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    color: "darkgray",
  },
});
