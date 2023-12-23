import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const TopSmall = styled.View`
    margin-top: 4px;
`

const TopMedium = styled.View`
    margin-top: 8px;
`

const TopLarge = styled.View`
    margin-top: 16px;
`

export const Spacer = ({variant}) => {
    switch (variant) {
        case 'top.medium': {
            return <TopMedium />;
        };
        case 'top.large': {
            return <TopLarge />;
        }; 
          
        default: 
        return <TopSmall />;

    }
}