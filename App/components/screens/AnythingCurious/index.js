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
          <LinearGradient colors={['#40BCF2', '#0EA8E0','#6CCDDE']}  style={styles.linearGradient}>
            <SafeAreaView style={{flex:1}}>



                <ScrollView style={styles.container}>

                <View>
                <View style={{width: '100%', height: wp('100%')}}>



                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',flex:1,justifyContent:'flex-start',padding:10}}>
                      <View >
                          <IconBack name="arrow-back" size={25} color='white' onPress={()=>this.props.navigation.navigate('SecondScreen')} style={{fontWeight:'bold'}} />
                      </View>
                      <View style={{padding:5}}>
                          <Text style={{color:'white'}}>Folder Name</Text>
                      </View>

                    </View>
                    <View style={{flexDirection:'row',flex:1,padding:10}}>
                        <View>
                        <Image
                                style={{width:30,height:30,marginLeft:wp('30%')}}
                                source={require('../../images/doublebox.png')}
                              />

                      </View>
                      <View>
                      <IconMore name="more-vertical" size={25} color='white'  style={{fontWeight:'bold'}} />
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
                <View style={styles.bodycontainer}>

                 <View style={{padding:20,alignItems:'center'}}>
                    <Image
                      style={{width:wp('70%'),height:wp('15%')}}
                      source={require('../../images/group126.png')}
                    />
                    <View style={{paddingTop:wp('8%')}}>
                         <Text style={{color:'#40bcf2',fontSize:wp('5%')}}>Anything Curious</Text>
                    </View>

                    <View style={{paddingTop:wp('8%')}}>
                         <Text style={{color:'#40bcf2'}}>Save the places where you want to go or what you want to eat!</Text>
                         <Text style={{color:'#40bcf2'}}>You can tore Pictures ,web and text in the memo</Text>
                    </View>

                 </View>

                <View style={styles.body}>
                     <View style={{alignItems:'center'}}>
                        <Buttons  text="Create Memo" btnfontSize={wp('4%')} btnbackgroundColor='#0EA8e0' btntxtncolor="#ffffff" btnMarginRight={imageWidth/12} btnMarginLeft={imageWidth/12} onPress={()=>this.btnPress()}/>
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
            <TouchableOpacity
          activeOpacity={0.5}
        // onPress={() => this.props.navigation.navigate('MyCart') }
          style={styles.TouchableOpacityStyle}>

               <View>
                    <IconMore name="plus" size={35} color='#40bcf2'  />
                </View>

        </TouchableOpacity>


            </SafeAreaView>
            </LinearGradient>
      );


    }
}



export default LoginScreen;
