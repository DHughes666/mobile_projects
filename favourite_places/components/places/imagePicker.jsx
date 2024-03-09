import { useState } from "react";
import { View, Text, Button, Alert, Image, StyleSheet } from "react-native";
import {launchCameraAsync, 
    useCameraPermissions, PermissionStatus} from "expo-image-picker"

import {Colors} from '../../constants/colors';
import OutlineButton from "../../UI/outlineButton";

const ImagePicker = () => {
    const [
        cameraPermissionsInformation, 
        requestPermission] = useCameraPermissions()
    const [pickedImage, setPickedImage] = useState();

    const verifyPermission = async () => {
        if (cameraPermissionsInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (cameraPermissionsInformation.status === PermissionStatus.DENIED) {
            Alert.alert(
                "Insufficient Permission!",
                "Camera permission required to use this app"
            )

            return false;
        }

        return true;
    }

    const takeImageHandler = async () => {
        const hasPermission = await verifyPermission();

        if (!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspectRatio: [16, 9],
            quality: 0.5,
        });
        setPickedImage(image.assets[0].uri);
        // console.log(image.assets[0]["uri"]);
    }

    let imagePreview = <Text>No image taken yet.</Text>

    if (pickedImage) {
        imagePreview = <Image style={styles.image}
            source={{ uri: pickedImage }}
        />
    }

    return (
        <View>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <OutlineButton
                icon="camera"
                pressit={takeImageHandler}
            >
                Take Image
            </OutlineButton>
        </View>
    )
};

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default ImagePicker;