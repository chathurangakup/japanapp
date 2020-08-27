import React from 'react'
import {
    Image,
    Text,
    View,
    Platform
  } from 'react-native';
import {createAppContainer,createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import ForthScreen from '../screens/ForthScreen';
import AnythingCurious from '../screens/AnythingCurious';
import CreateMemo from '../screens/CreateMemo';
import CreateMemoWithData from '../screens/CreateMemoWithData';






const StartNavigator = createStackNavigator({
  FirstScreen: {
        screen: FirstScreen,
        navigationOptions:{
            header:()=> null,
        },
        navigatorStyle: {
            navBarHidden: true
        }
    }, 
    SecondScreen: {
      screen: SecondScreen,
      navigationOptions:{
          header:()=> null,
      },
      navigatorStyle: {
          navBarHidden: true
      }
  }, 
  ThirdScreen: {
    screen: ThirdScreen,
    navigationOptions:{
        header:()=> null,
    },
    navigatorStyle: {
        navBarHidden: true
    }
}, 
ForthScreen: {
  screen: ForthScreen,
  navigationOptions:{
      header:()=> null,
  },
  navigatorStyle: {
      navBarHidden: true
  }
}, 
AnythingCurious: {
    screen: AnythingCurious,
    navigationOptions:{
        header:()=> null,
    },
    navigatorStyle: {
        navBarHidden: true
    }
  }, 
  CreateMemo: {
    screen: CreateMemo,
    navigationOptions:{
        header:()=> null,
    },
    navigatorStyle: {
        navBarHidden: true
    }
  }, 
  CreateMemoWithData: {
    screen: CreateMemoWithData,
    navigationOptions:{
        header:()=> null,
    },
    navigatorStyle: {
        navBarHidden: true
    }
  }, 

 
  },{
       navigationOptions: {
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0
                }
        },
         // transitionConfig: () => fromLeft(1000),
        // transitionConfig: () => fromLeft(1000)   
}
);



const getstart=false;

 const createRootNavigator =createSwitchNavigator(
     
        {
         StartNavigator: {
            screen: StartNavigator
         },
        
        },
        {
            initialRouteName: "StartNavigator",
        
           
          }
      );



const App = createAppContainer(createRootNavigator);

export default App;

