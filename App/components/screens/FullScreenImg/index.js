import React,{Component} from 'react';
import {View, 
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    Dimensions,
    ImageBackground,
    TextInput,
    Modal
        } from 'react-native';

        const imageWidth = Dimensions.get('window').width;
import {widthPercentageToDP as wp, heightPercentageToDP as hp, listenOrientationChange as lor,
  removeOrientationListener as rol} from 'react-native-responsive-screen';
  import LinearGradient from 'react-native-linear-gradient';


import styles from './styles';
import IconBack from 'react-native-vector-icons/Ionicons';
import IconDelete from 'react-native-vector-icons/AntDesign';

import Buttons from '../../uiElements/Buttons/RoundButtons';









class LoginScreen extends Component{


    constructor(props) {
        super(props);
        this.state = {
          isActive:true,
          Alert_Visibility:false,
        
        
          }; 
      }
      
      btnPress=async()=>{
          this.props.navigation.navigate('SecondScreen')
      }



    
      Show_Custom_Alert=()=>{
        this.setState({Alert_Visibility:false})
       
      }
      okPress=()=>{
       this.props.navigation.navigate('SecondScreen')
       this.setState({Alert_Visibility:false})
      }
    
    

  
    render(){
      
     
        return(
          <LinearGradient colors={['#000', '#000','#000']}  style={styles.linearGradient}>
            <SafeAreaView style={{flex:1}}>

       
               
              
               
                <View>
                <View style={{width: '100%'}}>
               
             

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',flex:1,justifyContent:'flex-start',padding:10}}>
                      <View >
                      <IconDelete name="close" size={25} color='white' onPress={()=>this.props.navigation.navigate('CreateMemoWithData')} style={{fontWeight:'bold'}} /> 
                      </View>
                     
                        
                    </View>
                    <View style={{flexDirection:'row',flex:1,padding:10}}>
                      
                      <View    style={{width:30,height:30,marginLeft:wp('30%')}}>
                   
                      <IconDelete name="delete" size={25} color='white' onPress={()=>this.props.navigation.navigate('CreateMemoWithData')} style={{fontWeight:'bold'}} /> 
                         
                      </View>
                        
                    </View>
                   </View>
                  
                 <Image
                  style={{width:wp('100%'),height:wp('100%')}}
                  source={require('../../images/3.jpeg')}
                />
              


               

               
               
              

           
            </View>
            </View>

          




          
                  </SafeAreaView>
            </LinearGradient>
      );
      
       
    }
} 



export default LoginScreen;