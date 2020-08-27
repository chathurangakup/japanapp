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
import IconMore from 'react-native-vector-icons/AntDesign';

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
        thumbnail_large:require('../../images/1.jpeg')
    }, {
        value: 'Vade',
        lable:'vade',
        thumbnail_large:require('../../images/2.jpeg')
    },
    {
      value: 'Vade',
      lable:'vade',
      thumbnail_large:require('../../images/3.jpeg')
  },{
    value: 'Vade',
    lable:'vade',
    thumbnail_large:require('../../images/1.jpeg')
},{
  value: 'Vade',
  lable:'vade',
  thumbnail_large:require('../../images/2.jpeg')
},
{
  value: 'Vade',
  lable:'vade',
  thumbnail_large:require('../../images/2.jpeg')
},
]
    
     
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
                    <Text style={{color:'#0ea8e0'}}>Save</Text>
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
                <FlatList
                              data={titles}
                              horizontal={true}
                              renderItem={({ item }) =>
                                  <View >
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('FullScreenImg')}>
                                    <Image
                                        style={{width:wp('50%'),height:wp('35%')}}
                                        source={item.thumbnail_large}
                                      />
                                    </TouchableOpacity>
                                  
                                  </View>
                                    
                                    }
                                      keyExtractor={item => item.id}
                                      numColumns={1}
                                />
              

            </View>

            <View style={{padding:20}}>
               <Text style={{fontSize:wp('6%')}}>Diamond Bed</Text>
            </View>
            <View style={{paddingLeft:20}}>
               <Text style={{fontSize:wp('4%')}}>https://djhdjsh.com</Text>
               <Text style={{fontSize:wp('4%')}}>https://djhdjsh.com</Text>
            </View>


            <View >
                <FlatList
                              data={titles}
                             
                              renderItem={({ item }) =>
                                  <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth:0.25,margin:10,borderRadius:5,borderColor:'#000'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <View >
                                            <Image
                                                style={{width:wp('20%'),height:wp('20%')}}
                                                source={item.thumbnail_large}
                                              />
                                              
                                        </View>
                                        <View style={{padding:7,alignSelf:'center'}}>
                                              <Text>Alona center</Text>
                                              <Text>alomexter.com</Text>
                                        </View>
                                    </View>

                                    <View style={{alignSelf:'center',paddingRight:10}}>
                                        <IconMore name="close" size={22} color='#777'  /> 
                                    </View>
                                  
                                  </View>
                                    
                                    }
                                      keyExtractor={item => item.id}
                                      numColumns={1}
                                />
              

            </View>

          
            </View>
            </View>

          




            </ScrollView>

            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}
  pagingEnabled={true} >
             <View>
           <TouchableOpacity
          activeOpacity={0.5}
        // onPress={() => this.props.navigation.navigate('MyCart') } 
       >
           
           <View style={{paddingLeft:10,paddingRight:10,paddingTop:5,marginTop:1,borderColor:'#777',borderWidth:0,alignItems:'center',marginRight:8,marginLeft:8,marginBottom:10, shadowRadius: 3.84,
           backgroundColor:'#fff',
          shadowColor: "#000000",
          shadowOpacity: 0.5,
          shadowRadius: 3,
          shadowOffset: {
            height: 0,
            width: 0
          }}}>
               <Image
                      style={{width:wp('8%'),height:wp('6%')}}
                      source={require('../../images/image.png')}
                    />
                     <Text style={{fontSize:wp('3%'),paddingTop:2}}>Add Image</Text>
                </View>
               
         
        </TouchableOpacity>
             </View>
             
             
        <TouchableOpacity
          activeOpacity={0.5}
        // onPress={() => this.props.navigation.navigate('MyCart') } 
         >
           
           <View style={{paddingLeft:10,paddingRight:10,paddingTop:5,marginTop:1,borderColor:'#777',borderWidth:0,alignItems:'center',marginRight:8,marginBottom:5, shadowRadius: 3.84,
           backgroundColor:'#fff',
          shadowColor: "#000000",
          shadowOpacity: 0.5,
          shadowRadius: 3,
          shadowOffset: {
            height: 0,
            width: 0
          }}}>
               <Image
                      style={{width:wp('8%'),height:wp('6%')}}
                      source={require('../../images/photo.png')}
                    />
                      <Text style={{fontSize:wp('3%'),paddingTop:2}}>Take Photo</Text>
                </View>
         
        </TouchableOpacity>
        
        <TouchableOpacity
          activeOpacity={0.5}
        // onPress={() => this.props.navigation.navigate('MyCart') } 
         >
           
           <View style={{paddingLeft:10,paddingRight:10,paddingTop:5,marginTop:1,borderColor:'#777',borderWidth:0,alignItems:'center',marginRight:8,marginBottom:5, shadowRadius: 3.84,
           backgroundColor:'#fff',
          shadowColor: "#000000",
          shadowOpacity: 0.5,
          shadowRadius: 3,
          shadowOffset: {
            height: 0,
            width: 0
          }}}>
               <Image
                      style={{width:wp('4.5%'),height:wp('6%')}}
                      source={require('../../images/copy.png')}
                    />
                    <Text style={{fontSize:wp('3%'),paddingTop:2}}>Copy Memo</Text>
                </View>
         
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
        // onPress={() => this.props.navigation.navigate('MyCart') } 
         >
           
           <View style={{paddingLeft:10,paddingRight:10,paddigTop:5,marginTop:1,marginRight:0,paddingBottom:4,alignItems:'center',backgroundColor:'#fff', 
           shadowRadius: 3.84,
          shadowColor: "#000000",
          shadowOpacity: 0.5,
          shadowRadius: 2,
          shadowOffset: {
            height: 0,
            width: 0
          }}}>
               <Image
                      style={{width:wp('7%'),height:wp('5%'),marginTop:5}}
                      source={require('../../images/delete.png')}
                    />
                     <Text style={{fontSize:wp('3%'),paddingTop:2}}>Delete Memo</Text>
                </View>
         
        </TouchableOpacity>
             
          
      
        
        </ScrollView>

            </SafeAreaView>
            </LinearGradient>
      );
      
       
    }
} 



export default LoginScreen;