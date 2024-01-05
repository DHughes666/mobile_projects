import { AccountBackground, AccountCover, 
    AccountContainer, AuthButton } from "../components/account_styles";
import { Spacer } from "../../../components/spacer/spacer-comp";

const AccountScreen = ({navigation}) => {
    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={navigation.navigate("login")}
                >
                    Login
                </AuthButton>
                <Spacer size="large"/>
                <AuthButton
                    icon="lock-open-outline"
                    mode="contained"
                    onPress={navigation.navigate("register")}
                >
                    Register
                </AuthButton>
            </AccountContainer>
        </AccountBackground>
    )
}

export default AccountScreen;