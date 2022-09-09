import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./src/pages/Home/Home";
import LogIn from "./src/pages/LogIn/LogIn";
import Register from "./src/pages/Register/Register";
import Dashboard from "./src/pages/Dashboard/Dashboard";
import Lists from "./src/pages/Lists/Lists";
import Details from "./src/pages/Details/Details";
import Map from "./src/pages/Map/Map";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
     
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="LogIn" component={LogIn} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Lists" component={Lists} />
        <Drawer.Screen name="Map" component={Map} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
