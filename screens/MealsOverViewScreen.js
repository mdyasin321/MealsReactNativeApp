import {useRoute} from '@react-navigation/native';
import {useEffect, useLayoutEffect} from 'react';
import {MEALS, CATEGORIES} from '../data/dummy-data';
import MealsList from './components/MealsList';

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

  return <MealsList items={displayMeals}></MealsList>;
};

export default MealsOverViewScreen;
