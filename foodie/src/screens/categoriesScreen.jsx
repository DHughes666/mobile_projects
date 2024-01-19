import {FlatList} from 'react-native';
import { CATEGORIES } from '../../data/dummy_data'
import CategoryGridTile from '../components/categoryGridTile';


const CategoriesScreen = ({ navigation }) => {

    const renderCategoryItem = (itemData) => {

        const pressHandler = () => {
            navigation.navigate('Meals Overview');
        };
    
        return <CategoryGridTile 
            title={itemData.item.title}
            color={itemData.item.color}
            pressit={pressHandler}
        />
    }

    return (
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
};



export default CategoriesScreen;