import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from './Mealtem';
import {useNavigation} from '@react-navigation/native';

const MealsList = ({items}) => {
  const navigation = useNavigation();

  const navigatingToMealDetailsScreen = dataItem => {
    navigation.navigate('MealDetailsScreen', {
      mealItemId: dataItem.item.id,
    });
  };
  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={items}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={dataItem => {
          return (
            <MealItem
              title={dataItem.item.title}
              imageUrl={dataItem.item.imageUrl}
              duration={dataItem.item.duration}
              complexity={dataItem.item.complexity}
              affordability={dataItem.item.affordability}
              onClick={() => {
                navigatingToMealDetailsScreen(dataItem);
              }}></MealItem>
          );
        }}
      />
    </View>
  );
};
export default MealsList;

const styles = StyleSheet.create({
  rootContainer: {},
});
