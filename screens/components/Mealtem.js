import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

const MealItem = ({title, imageUrl, duration, complexity, affordability,onClick}) => {
  return (
    <View style={styles.rootContainer}>
      <Pressable onPress={onClick} android_ripple={{color:'#ccc'}} style={({pressed})=>[styles.pressConatiner, pressed ? styles.button : null]}>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.description}>
            <Text>{duration}</Text>
            <Text>{complexity}</Text>
            <Text> {affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 35,
    marginHorizontal: 35,
    overflow: 'hidden',
    borderRadius: 8,
    elevation: 4,
  },
  pressConatiner:{

    flex:1,
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 200,
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign:'center'
  },

  description: {
    flex: 1,
    marginTop: 10,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  button:{
    opacity:0.5
  }
});
