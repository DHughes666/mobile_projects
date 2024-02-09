import { View, Text, TextInput } from "react-native"

const InputComp = ({label, textInputConfig}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput {...textInputConfig}/>
        </View>
    )
};

export default InputComp;