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
          <LinearGradient colors={['#ffffff', '#fff','#fff']}  style={styles.linearGradient}>
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

                      <View    style={{width:30,height:30,marginLeft:wp('27%')}}>
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
                  <TextInput
                  style={{color:'#777',padding:10,fontSize:wp('5%')}}
                  placeholder="Title"
                  ></TextInput>

               <TextInput
                  style={{color:'#777',padding:10,fontSize:wp('4%')}}
                  placeholder="Memo"
                  ></TextInput>




            </View>
            </View>
            </View>






            </ScrollView>
            <TouchableOpacity
          activeOpacity={0.5}
        // onPress={() => this.props.navigation.navigate('MyCart') }
          style={styles.TouchableOpacityStyle}>

           <View style={{paddingLeft:10,paddingRight:10,paddingTop:10,alignItems:'center',marginRight:5,marginBottom:5}}>
               <Image
                      style={{width:wp('8%'),height:wp('6%')}}
                      source={require('../../images/image.png')}
                    />
                      <Text style={{fontSize:wp('3%'),paddingTop:4}}>Add Image</Text>
                </View>

        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
        // onPress={() => this.props.navigation.navigate('MyCart') }
          style={styles.TouchableOpacityStyle1}>

           <View style={{paddingLeft:10,paddingRight:10,paddingTop:10,alignItems:'center',marginRight:5,marginBottom:5}}>
               <Image
                      style={{width:wp('8%'),height:wp('6%')}}
                      source={require('../../images/photo.png')}
                    />
                     <Text style={{fontSize:wp('3%'),paddingTop:4}}>Take Photo</Text>
                </View>


        </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.5}
                    // onPress={() => this.props.navigation.navigate('MyCart') }
                    style={{
                        borderWidth:0,
                        borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:'30%',
                        position: 'absolute',
                        bottom:wp('15%'),
                        right: wp('50%'),
                        height:70,
                        backgroundColor:'#fff',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,
                    }}>

                    <View style={{
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        alignItems: 'center',
                        marginRight: 5,
                        marginBottom: 5,
                    }}>
                        <Image
                            style={{width: wp('8%'), height: wp('6%')}}
                            source={require('../../images/photo.png')}
                        />
                        <Text style={{fontSize: wp('3%'), paddingTop: 4}}>Take Photo</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    // onPress={() => this.props.navigation.navigate('MyCart') }
                    style={{
                        borderWidth:0,
                        borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:'30%',
                        position: 'absolute',
                        bottom:wp('15%'),
                        right: wp('20%'),
                        height:70,
                        backgroundColor:'#fff',
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,

                        elevation: 3,
                    }}
                >

                    <View style={{
                        paddingLeft: 10,
                        paddingRight: 10,
                        paddingTop: 10,
                        alignItems: 'center',
                        marginRight: 5,
                        marginBottom: 5,
                    }}>
                        <Image
                            style={{width: wp('8%'), height: wp('6%')}}
                            source={require('../../images/image.png')}
                        />
                        <Text style={{fontSize: wp('3%'), paddingTop: 4}}>Add Image</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
            </LinearGradient>
      );


    }
}



export default LoginScreen;
