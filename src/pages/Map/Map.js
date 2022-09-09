import React from "react";
import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from "react-native";


const Home = ({ navigation }) => {
  return (
  
    <View style={styles.container}>
      <View style={styles.carContainer}>
      <View style={styles.titles}>
        <View>dgbfd</View>
         
         <Text style={styles.title}> Live Queue Map </Text>
        <Image source={{uri: 'https://www.tide-forecast.com/tidelocationmaps/Colombo-1.10.gif'}}
       style={{width: 300, height: 300}} />

</View>
       
      </View>
    </View>  
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D5F5E3",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  text:{
    alignItems:"center",
    textAlign: "center",
    justifyContent: "center",
    color: '#FFFFFF',
  },

  buttons: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor:"#45B39D",
    marginVertical:10,
  },

  carContainer: {
    width: "100%",
    height: "100%",
  },

  titles: {
    marginTop: "10%",
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "600",
    
  },
  menu: {
    fontSize: 15,
    fontWeight: "600",
  },
  
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
   
  },
});

export default Home;