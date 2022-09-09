import React from "react";
import { StyleSheet, Button, Text, View, Image, TouchableOpacity,TextInput } from "react-native";

const Home = ({ navigation }) => {
  return (
  
    <View style={styles.container}>
      
      <View style={styles.carContainer}>
      <View style={styles.titles}>
         <Text style={styles.title}>FUEL TRACKER</Text>
         
         <Image source={{uri: 'https://www.newlanka.lk/wp-content/uploads/2021/03/gas-cylinders-single.png'}}
       style={{width: 400, height: 400}} />
       

</View>
       
        <TouchableOpacity onPress={() => navigation.navigate("Lists")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>LP GAS</Text>  
          </View> 
        </TouchableOpacity> 

        <TouchableOpacity onPress={() => navigation.navigate("Lists")}>
          <View style={styles.buttons}> 
          <Text style= {styles.text}>Live Queue Map </Text>  
          </View> 
        </TouchableOpacity>

        
        
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
    fontSize:20,
  },

  buttons: {
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor:"#85929E",
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
  Mark: {
    fontSize: 30,
    fontWeight: "600",
  },
  menu: {
    fontSize: 15,
    fontWeight: "600"
    
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
    
  },
});

export default Home;