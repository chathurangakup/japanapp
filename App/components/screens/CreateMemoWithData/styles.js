import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';
const imageWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: imageWidth / 380});
import {widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange as lor,
  removeOrientationListener as rol} from 'react-native-responsive-screen';

export default EStyleSheet.create({
    container:{
      
       
      },
    header:{
       
        height:imageWidth/3,
        flexDirection:'row',
        justifyContent: 'center',
        paddingTop:15
       
      },
      
      avatar: {
        width: 100,
        height: 100,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginTop:-70,
        alignSelf:'center',
        position: 'absolute',
       
      },
      bodycontainer:{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "white",
 
        marginRight:wp('5%'),
        marginLeft:wp('5%'),
        marginTop:wp('20%'),
        backgroundColor:'white',
       
      },
      name:{
        fontSize:22,
        color:'#000000',
       
        fontWeight:'600',
      },
      body:{
        marginTop:0,
    
       
       // borderColor: "white",
       
      },
      bodyContent: {
        flex: 1,
        alignItems: 'center',
        
        padding:"40rem",
      },
      name:{
        fontSize:28,
        color: "#696969",
        fontWeight: "600"
      },
      info:{
        fontSize:14,
        color: "#777777",
        marginTop:2
      },
      description:{
        fontSize:16,
        color: "#696969",
        marginTop:10,
        textAlign: 'center'
      },
      buttonContainer: {
        marginTop:10,
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
        backgroundColor: "#00BFFF",
      },
      alertnoty:{
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:20
      },
      maindatanoty:{
        justifyContent:'center',
        alignItems:'center'
      },
      profilebuttons:{
        flexDirection:'column',
        paddingTop:"25rem"
      },
      helpandabout:{
        paddingLeft:15,
        paddingTop:"35rem"
      },
      Alert_Main_View:{
 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : "#fff", 
        height: hp('20%') ,
        paddingTop:40,
        width: wp('90%'),
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius:7,
      },
       
      Alert_Title:{
        fontSize: 25, 
        color: "#000",
        textAlign: 'center',
        padding: 5,
      },
       
      Alert_Message:{
          fontSize: 22, 
          color: "#000",
          textAlign: 'center',
          padding: 10,
          height: '80%'
        },
        txtstyle:{
       
            height:wp('10%'),
            fontSize:wp('4%'),
       
          
            justifyContent:'center',
            backgroundColor:'#ffffff',
            borderBottomWidth:1,
            borderColor:'#777777',
           
          },
         focusedTextInput:{
       
          height:wp('10%'),
            fontSize:wp('4%'),
        
          justifyContent:'center',
          backgroundColor:'#ffffff',
        
          borderBottomWidth:1,
          borderColor:'#20366B',
         
         },
         linearGradient: {
          flex: 1,
        
          borderRadius: 5
        },
        TouchableOpacityStyle: {
          borderWidth:1,
       marginTop:100,
         
          width:90,
          position: 'absolute',                                          
          bottom:wp('15%'),                                                    
        
          height:70,
          backgroundColor:'#fff',
        
        
        },
        TouchableOpacityStyle1: {
          borderWidth:1,
          borderColor:'rgba(0,0,0,0.2)',
          alignItems:'center',
          justifyContent:'center',
          width:90,
          position: 'absolute',                                          
          bottom:wp('15%'),                                                    
          right: 100,
          height:70,
          backgroundColor:'#fff',
        
        
        },
     
});