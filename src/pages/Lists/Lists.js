import React from "react";
import { StyleSheet, Button, Text, View, Image, TouchableOpacity } from "react-native";


const Home = ({ navigation }) => {
  return (
  
    <View style={styles.container}>
      <View style={styles.carContainer}>
      <View style={styles.titles}>
         
         <Text style={styles.title}>LP GAS</Text>
        <Image source={{uri: 'https://www.newlanka.lk/wp-content/uploads/2021/03/gas-cylinders-single.png'}}
       style={{width: 300, height: 300}} />

</View>
       <View style={styles.titles}>
         
         <Text style={styles.menu}>Litro</Text>
         <Text style={styles.point}>5Kg</Text>
         <Text style={styles.point}>12.5Kg</Text>
         <Text style={styles.point}>37.5Kg</Text>
         <Text style={styles.menu}>Laugfs</Text>
         <Text style={styles.point}>5Kg</Text>
         <Text style={styles.point}>12.5Kg</Text>
         <Text style={styles.point}>37.5Kg</Text>
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
    fontSize: 60,
    fontWeight: "600",
    
  },
  menu: {
    fontSize: 30,
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