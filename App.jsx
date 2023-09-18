import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { transfer,numberbun, review, pay } from './screen';
const Stack = createNativeStackNavigator();

const App=()=>{

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
      >
        <Stack.Screen name="review" component={review}/>
        <Stack.Screen name="pay" component={pay}/>
        <Stack.Screen name="transfer" component={transfer}/>
        <Stack.Screen name="numberbun" component={numberbun}/>
      </Stack.Navigator>
    </NavigationContainer> 
    //<transfer></transfer>
  );
}


export default App;
