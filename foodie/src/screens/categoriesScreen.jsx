import {FlatList} from 'react-native';
import { CATEGORIES } from '../../data/dummy_data'
import CategoryGridTile from '../components/categoryGridTile';

const renderCategoryItem = (itemData) => {
    return <CategoryGridTile 
        title={itemData.item.title}
        color={itemData.item.color}
    />
}

const CategoriesScreen = () => {
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