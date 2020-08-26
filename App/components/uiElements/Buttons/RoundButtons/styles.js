
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Dimensions,
  PixelRatio
} from 'react-native';

const imageWidth = Dimensions.get('window').width;

export default EStyleSheet.create({
    wrapper: {
   
        // alignItems: 'center',
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        borderWidth:1,
        
       
        // paddingTop: StatusBar.currentHeight,
        // paddingBottom: StatusBar.currentHeight
      },
      buttonText: {
         
        alignItems: 'center',
       paddingTop:9,
       paddingBottom:9,
       
      
        textAlign:'center',
      },
      btnwrapper:{
       
       
        marginTop:15,
       
        
      }
});
