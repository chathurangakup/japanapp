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
        this.setState({Alert_Visibility:true})
      }



    
      Show_Custom_Alert=()=>{
        this.setState({Alert_Visibility:false})
       
      }
      okPress=()=>{
       this.props.navigation.navigate('AnythingCurious')
       this.setState({Alert_Visibility:false})
      }
    
    

  
    render(){
      
     
        return(
          <LinearGradient colors={['#02a6cb', '#03b1c9','#42ccd6']} style={styles.linearGradient}>
  
    

                <ScrollView style={styles.container}>
               
                <View>
                <View style={{width: '100%', height: wp('100%')}}>
                <View style={{padding:20,marginTop:40}}>
                 <Image
                  style={{width:wp('10%'),height:wp('10%')}}
                  source={require('../../images/drawer.png')}
                />
                 </View>

                 <View style={{paddingLeft:wp('20%')}}>
                 <Image
                  style={{width:wp('40%'),height:wp('10%')}}
                  source={require('../../images/list.png')}
                />
                 </View>

                {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}
                <View style={styles.bodycontainer}>

                 <View style={{padding:20,alignItems:'center'}}>
                    <Image
                      style={{width:wp('32%'),height:wp('20%')}}
                      source={require('../../images/group130.png')}
                    />
                    <View style={{paddingTop:wp('8%')}}>
                         <Text style={{color:'#40bcf2',fontSize:wp('5%')}}>Make a folder first</Text>
                    </View>

                    <View style={{paddingTop:wp('8%')}}>
                         <Text style={{color:'#40bcf2'}}>Save the places where you want to go or what you want to eat!</Text>
                         <Text style={{color:'#40bcf2'}}>You can tore Pictures ,web and text in the memo</Text>
                    </View>
                   
                 </View>
              
                <View style={styles.body}>
                     <View style={{alignItems:'center'}}>
                        <Buttons  text="Create new folder" btnfontSize={wp('4%')} btnbackgroundColor='#0EA8e0' btntxtncolor="#ffffff" btnMarginRight={imageWidth/12} btnMarginLeft={imageWidth/12} onPress={()=>this.btnPress()}/>
                     </View>
                </View>

            </View>
            </View>
            </View>

            <Modal
 
 visible={this.state.Alert_Visibility}
 animationType="slide"
        transparent={true}




 onRequestClose={ () => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } >


   <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>


       <View style={styles.Alert_Main_View}>
            <Text>Create new folder</Text>

         <View style={{width:wp('70%')}}>
                   <TextInput
                       
                        mode='outlined'
                        onChangeText={value => this.onChangeText('stateprovince',value)}
                        onFocus={()=> this.setState({hasFocusStateProvince:true})}
                        onBlur={()=> this.setState({hasFocusStateProvince:false})}
                        style={this.state.hasFocusStateProvince ? styles.focusedTextInput:styles.txtstyle}  >   
                   </TextInput>
        </View>
        
                

           <View style={{flexDirection: 'row',}}>
                            <View style={{padding:50,marginRight:50}}>
                                <TouchableOpacity onPress={()=>this.setState({Alert_Visibility:false})}>
                                    <Text>Cancel</Text>
                                </TouchableOpacity>
                            </View>

                            <View  >
                                <TouchableOpacity onPress={()=>this.okPress()} style={{marginTop:45,marginBottom:45,paddingLeft:50,paddingRight:50,paddingTop:10,paddingBottom:10,backgroundColor:'#0EA8e0',justifyContent:'center',borderRadius:5}}>
                                    <Text style={{color:'white'}}>Create</Text>
                                </TouchableOpacity>
                            </View>
           </View>
         
       </View>

   </View>


</Modal>




            </ScrollView>
         
            </LinearGradient>
      );
      
       
    }
} 



export default LoginScreen;