import React from 'react';
import type {PropsWithChildren} from 'react';
import CategoriesScreen from './screens/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouritesScreen';
import FavouritesContextProvider from './screens/store/Favourites-context';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}>
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favourites" component={FavouriteScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <FavouritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
          }}>
          {/* here Nesting DrawerNavigator inside the Stack Navigator */}
          <Stack.Screen
            name="Home"
            component={DrawerNavigator}
            options={{
              // it will not show the header of Stack navigator, because we are already showing the
              // header name by the help of drawer navigation
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverViewScreen"
            component={MealsOverViewScreen}

            //Instead of it I will render the title from inside the component
            // options={({route,navigation}: { route: any ,navigation:any})=>{

            //   const catId = route.params.categoryId;
            //   return (

            //     {
            //     title:catId
            //     }
            //   )

            // }}
          ></Stack.Screen>
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </FavouritesContextProvider>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {

// });

export default App;
