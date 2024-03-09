import { View, StyleSheet } from "react-native";
import OutlineButton from "../../UI/outlineButton";
import { Colors } from "../../constants/colors";

const LocationPicker = () => {
    const getLocationHandler = () => {};

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