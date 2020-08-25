import React, { Component } from 'react';
import { View, Image,Text, TouchableHighlight,StyleSheet,Dimensions,TouchableOpacity} from 'react-native';
import { PropTypes } from 'prop-types'

import styles from './styles';

const imageWidth = Dimensions.get('window').width;


class RoundButtons extends Component{
   
   render(){

    const { text,
      onPress,
      btnfontSize,
      btntxtncolor,
      btnbackgroundColor,
      btnWidth,
      btnHight,
      btnborderColor,
      btnMarginLeft,btnMarginRight,
      disabled } = this.props;
   
    const fontSize=btnfontSize || 14;
     const color=btntxtncolor || '#ffffff'
     const backgroundColor=btnbackgroundColor || '#000000'
     const width=btnWidth || imageWidth/1.1;
     const height=btnHight || 100;
     const marginLeft=btnMarginLeft || 20;
     const marginRight =btnMarginRight || 20;
     const borderColor=btnborderColor || '#ffffff'


       return(
         <View style={[{width,height},styles.btnwrapper]}>
         <TouchableOpacity style={[{backgroundColor,marginLeft,marginRight,borderColor},styles.wrapper]} onPress={onPress} disabled={disabled}>
             <Text style={[{fontSize,color},styles.buttonText]}>{text}</Text>
          </TouchableOpacity>
         </View>
       
       ); 
   } 
 
}

RoundButtons.propTypes={
    text:PropTypes.string,
    onPress:PropTypes.func,
    btnfontSize:PropTypes.number,
    btntxtcolor:PropTypes.string,
    btnbackgroundColor:PropTypes.string,
    btnborderColor:PropTypes.string,
    btnHight:PropTypes.number,
    btnWidth:PropTypes.number,
    btnMarginLeft:PropTypes.number,
    btnMarginLeft:PropTypes.number,
    disabled:PropTypes.boolean,
   
}

export default RoundButtons;