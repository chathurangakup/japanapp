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
import IconMore from 'react-native-vector-icons/Feather';

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
          <LinearGradient colors={['#fff', '#fff','#fff']}  style={styles.linearGradient}>
            <SafeAreaView style={{flex:1}}>

       
               
                <ScrollView style={styles.container}>
               
                <View>
                <View style={{width: '100%'}}>
               
             

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',flex:1,justifyContent:'flex-start',padding:10}}>
                      <View >
                      <Image
                                style={{width:30,height:30}}
                                source={require('../../images/arrowdown.png')}
                              />
                    
                      </View>
                     
                        
                    </View>
                    <View style={{flexDirection:'row',flex:1,padding:10}}>
                      
                      <View    style={{width:30,height:30,marginLeft:wp('30%')}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('CreateMemoWithData')}>
                        <Text style={{color:'#0ea8e0'}}>Save</Text>
                        </TouchableOpacity>
                         
                      </View>
                        
                    </View>
                   </View>
               
           

                 {/* <View style={{paddingLeft:wp('20%')}}>
                 <Image
                  style={{width:wp('40%'),height:wp('10%')}}
                  source={require('../../images/list.png')}
                />
                 </View> */}

                {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}
                <View >
                  <Text style={{color:'#777',padding:10,fontSize:wp('5%')}}>Title</Text>
               
                  <Text style={{color:'#777',padding:10}}>Memo</Text>
              

            </View>
            </View>
            </View>

          




            </ScrollView>
            <TouchableOpacity
          activeOpacity={0.5}
        // onPress={() => this.props.navigation.navigate('MyCart') } 
          style={styles.TouchableOpacityStyle}>
           
               <View>
               <Image
                      style={{width:wp('30%'),height:wp('28%')}}
                      source={require('../../images/photo.png')}
                    />
                </View>
         
        </TouchableOpacity>
      
        <TouchableOpacity
          activeOpacity={0.5}
        // onPress={() => this.props.navigation.navigate('MyCart') } 
          style={styles.TouchableOpacityStyle1}>
           
               <View>
               <Image
                      style={{width:wp('30%'),height:wp('28%')}}
                      source={require('../../images/image.png')}
                    />
                </View>
         
        </TouchableOpacity>
      

            </SafeAreaView>
            </LinearGradient>
      );
      
       
    }
} 



export default LoginScreen;