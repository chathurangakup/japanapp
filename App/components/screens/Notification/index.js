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
    Modal,
    FlatList
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
      let titles = [{
        value: 'Veg Rice',
        lable:'rice',
        notificationdata:"djjdjdj djddjs dhgsdgs"
    }, {
        value: 'Vade',
        lable:'vade',
        notificationdata:"djjdjdj djddjs dhgsdgs"
    },
    {
      value: 'Vade',
      lable:'vade',
      notificationdata:"djjdjdj djddjs dhgsdgs"
  },{
    value: 'Vade',
    lable:'vade',
    notificationdata:"djjdjdj djddjs dhgsdgs"
},{
  value: 'Vade',
  lable:'vade',
  notificationdata:"djjdjdj djddjs dhgsdgs"
},
{
  value: 'Vade',
  lable:'vade',
  notificationdata:"djjdjdj djddjs dhgsdgs"
},
]


        return(
          <LinearGradient colors={['#ffffff', '#fff','#fff']}  style={styles.linearGradient}>
            <SafeAreaView style={{flex:1}}>



                <ScrollView style={styles.container}>

                <View>
                <View style={{width: '100%'}}>



                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'row',flex:1,paddingTop:10}}>
                      <View >
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('CreateMemoWithData')}>
                          <Image
                                    style={{width:30,height:30,  transform: [{ rotate: '90deg'}]}}
                                    source={require('../../images/arrowdown.png')}
                                  />
                        </TouchableOpacity>     
                      </View>
                     

                    
                    </View>
                        <View style={{justifyContent:'center',flex:1,paddingLeft:wp('10%'),paddingTop:wp('2%')}}>
                          <Text style={{color:'#000'}}>Notification</Text>
                        </View>
                        <View style={{flex:1}}>
                          <Text style={{color:'#000'}}></Text>
                        </View>
                   </View>



                 {/* <View style={{paddingLeft:wp('20%')}}>
                 <Image
                  style={{width:wp('40%'),height:wp('10%')}}
                  source={require('../../images/list.png')}
                />
                 </View> */}

                {this.props.loading && <Loading navigation={this.props.navigation} animating={true} />}
                <View style={{paddingLeft:20}}>
                    <Text style={{paddingTop:5,paddingBottom:5,color:'#c0c0c0'}}>328738727b 3u2h </Text>
                    <Text>Notification title</Text>
                    <Text>Notification details comes here</Text>

                </View>
               


                <View >
                <FlatList
                              data={titles}
                             
                              renderItem={({ item }) =>
                                  <View style={{}}>
                                    <View style={{flexDirection:'row'}}>
                                        
                                        <View style={{paddingLeft:20,paddingTop:7,paddingBottom:7,alignSelf:'center'}}>
                                               <Text style={{paddingTop:5,paddingBottom:5,color:'#c0c0c0'}}>alomexter.com</Text>
                                              <Text>fa fahhaj fajhjhaj fjahfhaj fjahjfhaj fajhjhjshga</Text>
                                              <Text style={{paddingTop:10}}>dhgshgddshghgs dhgsdgsh</Text>
                                             
                                        </View>
                                        
                                    </View>

                                    <View
                                      style={{
                                        borderBottomColor: '#c0c0c0',
                                        borderBottomWidth: 1,
                                      }}
                                    />
                                  
                                  </View>
                                    
                                    }
                                      keyExtractor={item => item.id}
                                      numColumns={1}
                                />
              

            </View>

          
            </View>
            </View>






            </ScrollView>
           
            </SafeAreaView>
            </LinearGradient>
      );


    }
}



export default LoginScreen;
