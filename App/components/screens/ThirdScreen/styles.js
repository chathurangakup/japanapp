import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const imageWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: imageWidth / 380});
import {widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange as lor,
  removeOrientationListener as rol} from 'react-native-responsive-screen';

export default EStyleSheet.create({
    container:{
       
        flex:1
       
      },
      thumbnail1: {
            flex:1,
            paddingBottom:wp('2%'),
            paddingLeft:wp('1%'),
            paddingRight:wp('1%'),
            paddingTop:wp('2%'),
      },
      thumbnail: {
        borderRadius: 10,
      },
      img:{
        height:wp('30%'),
        width: wp('40%'),
        padding:wp('5%'),
        borderRadius: 10,
      },
      title:{
        marginTop: wp('15%'),
        marginLeft:wp('5%'),
        color:'white'
      },
      TouchableOpacityStyle: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:70,
        position: 'absolute',                                          
        bottom:wp('15%'),                                                    
        right: 10,
        height:70,
        backgroundColor:'#fff',
        borderRadius:100,
      
      },
      linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
    
     
});