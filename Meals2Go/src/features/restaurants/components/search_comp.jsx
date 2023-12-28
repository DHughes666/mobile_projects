import {useContext, useEffect, useState} from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { LocationContext } from "../../../services/location/location_context";


export const SearchContainer = styled.View`
	paddingTop: ${({theme}) => theme.space[6]};
	paddingBottom: ${({theme}) => theme.space[3]};
	paddingLeft: ${({theme}) => theme.space[2]};
	paddingRight: ${({theme}) => theme.space[2]};
`

const Search = () => {
    const {keyword, search} = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword)

    useEffect(() => {
        search(searchKeyword);
    }, [])

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