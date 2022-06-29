import styled from "styled-components/native";


// if <Text /> did not have a variant property
const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.bold};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
    font-family: ${theme.fonts.body};
`;

const label = (theme) => `
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
    font-family: ${theme.fonts.body};
`;

const caption = (theme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
    font-family: ${theme.fonts.body};
`;


const error = (theme) => `
    color: ${theme.colors.text.error};
    font-family: ${theme.fonts.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
    font-family: ${theme.fonts.body};
`;

const variants = {
    body,
    label,
    caption,
    error,
    hint,
};

export const Text = styled.Text`
    ${({ theme }) => defaultTextStyles(theme)}
    ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
    variant: "body",
};