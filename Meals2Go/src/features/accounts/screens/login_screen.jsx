import { useState, useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication_context";
import { 
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    AuthInput,
    Title,
    ErrorContainer
 } from "../components/account_styles";
import { Spacer } from "../../../components/spacer/spacer-comp";
import { Text } from "../../../components/typography/text-comp";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, isLoading, error } = useContext(AuthenticationContext);
    return (
        <AccountBackground>
            <AccountCover />
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthInput 
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(t) => setEmail(t)}
                />
                <Spacer size="large"/>
                <AuthInput 
                    label="Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(p) => setPassword(p)}
                />
                {error && <Spacer size="large">
                    <ErrorContainer>
                        <Text variant="error">{error}</Text>
                    </ErrorContainer>
                </Spacer>}
                <Spacer size="large"/>
                {
                    !isLoading ? (
                        <AuthButton
                    icon="lock-outline"
                    mode="contained"
                    onPress={() => onLogin(email, password)}
                >
                    Login
                </AuthButton>
                    ) : (
                        <ActivityIndicator animating={true} color={MD2Colors.blue200} />
                    )
                }
                <Spacer />
            </AccountContainer>
            <Spacer size="large" />
            <AuthButton mode="contained" 
                onPress={() => navigation.goBack()}>
                Back
            </AuthButton>
        </AccountBackground>
    )
}

export default LoginScreen;