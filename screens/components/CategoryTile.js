import {View, Text, Pressable, StyleSheet} from 'react-native';

const CategoryTile = ({title, id, color,onClick}) => {
  return (
    <View style={[styles.mainContainer]}>
      <Pressable android_ripple={{color: '#ccc'}} style={({pressed})=>[styles.buttonContainer, pressed ? styles.button : null]}
        onPress={onClick}>
        <View style={[styles.innerContainer,{backgroundColor:color}]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryTile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 16,
    borderRadius: 5,
    height: 150,
    elevation: 4,
    //for android_ripple
    overflow:'hidden'
  },
  buttonContainer: {
    // here we have given flex : 1 because as we are giving flex :1 to innerContainer, so its parent container  i.e
    // buttonContainer, must be having flex :1 
    flex: 1,
  },
  button:{
    opacity:0.5
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'black'
  },
});
