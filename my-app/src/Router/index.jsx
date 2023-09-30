import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from "./StackNavigator";
import Form from "../components/Form/Form";

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
   
        <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Main"
        screenOptions={{ headerTitle: "Todo App"}}
      >
      
        <Tab.Screen name="Main" component={StackNavigator}  />
       
        
        <Tab.Screen name="CompletedTask" component={Form}  />
      </Tab.Navigator> 
    
    </NavigationContainer>
  );
};

export default Router;