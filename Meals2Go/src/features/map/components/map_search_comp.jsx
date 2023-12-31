import {useContext, useEffect, useState} from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location_context";


export const SearchContainer = styled.View`
	padding: ${({theme}) => theme.space[6]};
    position: absolute;
    z-index: 999;
    top: 20px;
    width: 100%;
`

const Search = () => {
    const {keyword, search} = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword)

    return (
        <SearchContainer>
            <Searchbar 
                placeholder="Google me" 
                value={searchKeyword}
                onSubmitEditing={() => search(searchKeyword)}
                onChangeText={(text) => {
                    setSearchKeyword(text)
                }}
            />
        </SearchContainer> 
    )
};

export default Search;