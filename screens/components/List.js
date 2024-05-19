import {StyleSheet, Text, View} from 'react-native';

const List = ({data}) => {
  return data.map(element => {
    return (
      <View style={styles.mainConatiner} key={element}>
        <Text style={styles.text} >{element}</Text>
      </View>
    );
  });
};

export default List;

const styles = StyleSheet.create({
    mainConatiner:{

        paddingVertical:8,
        paddingHorizontal:15,
        backgroundColor:"#FA9985",
        marginVertical:8,
        borderRadius:5,
        marginHorizontal:10

    
    },
    text:{
        fontSize:15,
        color:'white',
        textAlign:'center'
    }
});
