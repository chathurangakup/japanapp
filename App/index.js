import React from 'react';

import {
   StatusBar,
   Platform
   
  } from 'react-native';
//import EStyleSheet from 'react-native-extended-stylesheet';
import { View,Text} from 'react-native';


 import Home_Resturant from './components/screens/FullScreenImg';
 import Navigators from './components/navigators/Appnavigators';

 import FirstScreen from '././components/screens/ForthScreen';


 


export default () =>

<View style={{ flex: 1 }}>
 {/* <GeneralStatusBarColor backgroundColor="#C7003B"
barStyle="light-content"/> */}

    <Navigators/>
  
   
    </View>
  

