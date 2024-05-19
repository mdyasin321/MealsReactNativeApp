import {useRoute} from '@react-navigation/native';
import {useEffect, useLayoutEffect} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import MealItem from './components/Mealtem';

const MealsOverViewScreen = ({route, navigation}) => {
  // const route=useRoute();
  //OR
  const catId = route.params.categoryId;

  // useEffect(()=>{

  //   const categoryTitle=CATEGORIES.find((element)=>{
  //     return element.id===catId
  //   })

  //   navigation.setOptions({
  //     title:categoryTitle.title
  //   })
  // },[catId,navigation])

  //OR ( U CAN USE useLayoutEffect)

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(element => {
      return element.id === catId;
    });

    navigation.setOptions({
      title: categoryTitle.title,
    });
  }, [catId, navigation]);

  const displayMeals = MEALS.filter(element => {
    return element.categoryIds.indexOf(catId) >= 0;
  });

  const navigatingToMealDetailsScreen=(dataItem)=>{

    navigation.navigate('MealDetailsScreen',{
      mealItemId: dataItem.item.id,
    });

  }

  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={displayMeals}
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
              onClick={()=>{navigatingToMealDetailsScreen(dataItem)}}></MealItem>
          );
        }}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  rootContainer: {},
});
