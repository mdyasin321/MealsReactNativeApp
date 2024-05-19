import {Text, View, StyleSheet, Image, ScrollView, Button} from 'react-native';
import {MEALS} from '../data/dummy-data';
import List from './components/List';
import {useLayoutEffect} from 'react';
const MealDetailsScreen = ({route, navigation}) => {
  const mealId = route.params.mealItemId;

  const meal = MEALS.find(element => {
    return element.id === mealId;
  });
  //add useLayout effect

  // not working some syntax error

  // useLayoutEffect(() => {
  //   navigation.setOptions(() => {
  //     return ({
  //       headerRight: () => {
  //         return <Button title="Tap me" />;
  //       },
  //     });
  //   });
  // }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap me" />;
      },
    });
  }, [navigation]);

  return (
    <View style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: meal.imageUrl}} />
      <Text style={styles.mainTitle}>{meal.title}</Text>
      <View style={styles.complexDurationContainer}>
        <Text style={styles.complexDurationText}>{meal.duration}</Text>
        <Text style={styles.complexDurationText}>{meal.complexity}</Text>
        <Text style={styles.complexDurationText}>{meal.affordability}</Text>
      </View>
      <ScrollView>
        {/* // I have add this extra OuterContainer, to make this center by align items */}
        <View style={styles.outerContainer}>
          {/* // I have used this list container to make width 80% */}
          <View style={styles.listContainer}>
            <Text style={styles.subTitle}>Ingredients</Text>
            <List data={meal.ingredients}></List>
            <Text style={styles.subTitle}>Steps</Text>
            <List data={meal.steps}></List>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 300,
  },
  mainTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',

    textAlign: 'center',
    marginTop: 10,
  },
  complexDurationContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  complexDurationText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',

    textAlign: 'center',
    borderBottomWidth: 4,
    borderBottomColor: 'white',
  },
  outerContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
