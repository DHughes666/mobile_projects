import { View, Alert, StyleSheet } from "react-native";
import {getCurrentPositionAsync, PermissionStatus,
    useForegroundPermissions} from "expo-location";

import OutlineButton from "../../UI/outlineButton";
import { Colors } from "../../constants/colors";

const LocationPicker = () => {
    const [
        locationPermissionInformation,
        requestPermission
    ] = useForegroundPermissions();

    const verifyPermissions = async () => {
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert(
                "Insufficient Permission!",
                "Location permission required to use this app"
            )

            return false;
        }

        return true;
    };

    const getLocationHandler = async () => {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return
        }

        const location = await getCurrentPositionAsync();
        console.log(location);
    };

    const pickOnMapHandler = () => {};

    return (
        <View>
            <View style={styles.mapPreview}></View>
            <View style={styles.actions}>
                <OutlineButton icon="location" pressit={getLocationHandler}>
                    Locate User
                </OutlineButton>
                <OutlineButton icon="map" pressit={pickOnMapHandler}>
                    Pick on Map
                </OutlineButton>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})

export default LocationPicker;