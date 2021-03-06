import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { fonts } from "../../../infrastructure/theme/fonts";
import { Text } from "../../../components/typography/text.component";

export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/background.jpg"),
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.3);
`;

export const AccountContainer = styled.View`
    background-color: rgba(255,255,255,0.7);
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary,
    dark: true
})`
    padding: ${(props) => props.theme.space[2]};
    font-family: ${fonts.body};
`;

export const AuthInput = styled(TextInput)`
    width: 300px;
`;

export const Title = styled(Text)`
    font-size: 30px;
    font-family: ;
`;

export const ErrorContainer = styled.View`
    max-width: 300px;
    align-items: center;
    align-self: center;
    margin-top: ${(props) => props.theme.space[2]};
    margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
    width: 100%;
    height: 30%;
    position: absolute;
    top: 30px;
    padding: ${props => props.theme.space[2]}
`;