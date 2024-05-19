import {FlatList,StyleSheet,View} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryTile from './components/CategoryTile';

const CategoriesScreen = ({navigation}) => {

  const NavigatingToMealsOverViewScreen=(dataItem)=>{

    navigation.navigate('MealsOverViewScreen',{
      categoryId: dataItem.item.id
    });
  }
  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={dataItem => {
          return (
            <CategoryTile
              title={dataItem.item.title}
              id={dataItem.item.id}
              color={dataItem.item.color}
              onClick={()=>NavigatingToMealsOverViewScreen(dataItem)}></CategoryTile>
          );
        }}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles= StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#24180f'
    }
})