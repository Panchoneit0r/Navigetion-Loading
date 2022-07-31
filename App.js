import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import First from './First';
import Second from './Second';
import Third from './Third';
import Fourht from './Fourht';

import ProgressBar from './ProgressBar';
import styles from './styles';

const Stack = createNativeStackNavigator();

const routes =[
  {name: 'first', component: First},
  {name: 'Second', component: Second},
  {name: 'Third', component: Third},
  {name: 'Fourht', component: Fourht},
]

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route,navigation})=>{
          const currentRouteIndex = routes.map((r) => r.name).indexOf(route.name);
          const prevRouteName = routes[currentRouteIndex-1]?.name;
          const nextRouteName = routes[currentRouteIndex+1]?.name;
          
          return{
            headerTitle: () => (
              <View style={styles.progress}>
                <Text>{route.name}</Text>
                <ProgressBar label = {false} progress={route.params.progress}/>
              </View>
            ),
            headerLeft: ()=>(
              <Button
                title="Prev"
                disabled={currentRouteIndex === 0}
                onPress={()=>navigation.navigate(prevRouteName)}
              />
            ),

            headerRight: ()=>(
              <Button
                title="Next"
                disabled={currentRouteIndex === 3}
                onPress={()=>navigation.navigate(nextRouteName)}
              />
            ),
          }
        }}
      >
        {
          routes.map((routeProps, index) => (
            <Stack.Screen
              key={routeProps.name}
              {...routeProps}
              initialParams={{progress:(index+1)/routes.length}}
              options={{headerBackVisible: false}}
            />
          ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}