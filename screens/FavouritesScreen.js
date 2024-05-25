import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";
import { FavouritesContext } from "./store/Favourites-context";
import MealsList from "./components/MealsList";
const FavouriteScreen=()=>{

    const ctx= useContext(FavouritesContext);

    const displayMeals= MEALS.filter((meal)=>{
        return (
            ctx.ids.includes(meal.id)
        )
    })

    if(displayMeals.length===0){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have No meals Added</Text>
            </View>
        )
    }
    return (
        <MealsList items={displayMeals} />
    )
}

export default FavouriteScreen;

const styles= StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'white',
        fontSize:25,
        fontWeight:'bold'
    }
})