import { useState, useContext } from "react";
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


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error } = useContext(AuthenticationContext);
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
                    secure
                    onChangeText={(p) => setPassword(p)}
                />
                {error && <Spacer size="large">
                    <ErrorContainer variant="error">{error}</ErrorContainer>
                </Spacer>}
                <Spacer size="large"/>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={() => onLogin(email, password)}
                >
                    Login
                </AuthButton>
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