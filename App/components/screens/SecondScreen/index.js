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
  import IconMore from 'react-native-vector-icons/Feather';
  import LinearGradient from 'react-native-linear-gradient';


import styles from './styles';

import Buttons from '../../uiElements/Buttons/RoundButtons';


class SecondScreen extends Component{


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
    

      goVedio=()=>{
       this.props.navigation.navigate('ThirdScreen')
      }
    

  
    render(){

      let titles = [{
        value: 'Veg Rice',
        lable:'rice',
        thumbnail_large:'https://demo-restaurant.tk/storage/cuisines/VEG FRIED RICE.jpg'
    }, {
        value: 'Vade',
        lable:'vade',
        thumbnail_large:'https://demo-restaurant.tk/storage/cuisines/MEDHU VADAI.jpg'
    },
    {
      value: 'Vade',
      lable:'vade',
      thumbnail_large:'https://demo-restaurant.tk/storage/cuisines/MEDHU VADAI.jpg'
  },{
    value: 'Vade',
    lable:'vade',
    thumbnail_large:'https://demo-restaurant.tk/storage/cuisines/MEDHU VADAI.jpg'
},{
  value: 'Vade',
  lable:'vade',
  thumbnail_large:'https://demo-restaurant.tk/storage/cuisines/MEDHU VADAI.jpg'
},
{
  value: 'Vade',
  lable:'vade',
  thumbnail_large:'https://demo-restaurant.tk/storage/cuisines/MEDHU VADAI.jpg'
}

  
  
  ];
  
    function Item({ name, _url,onPress,description }) {
      return (
          <View style={styles.thumbnail1} >
           
           <TouchableOpacity  onPress={onPress}>


          
           <ImageBackground    style={{ width: wp('45%'), height: wp('30%'), borderRadius: 25 }} 
             imageStyle={{ borderRadius: 10 }}source={{
               uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}>
                <View>
                    <IconMore name="more-vertical" size={25} color='white'  style={{fontWeight:'bold',marginLeft:wp('37%'),marginTop:wp('3%')}} /> 
                </View>
                    <Text style={styles.title}>{name}</Text>
              </ImageBackground>
         
            
           
             
              {/* <Text style={{ fontSize: 15, marginHorizontal: 30, color: "blue" }}>Product</Text> */}
           
              </TouchableOpacity>
             
          </View>
      );
    }
  
        return(
          <SafeAreaView style={{ flex: 1}}>
            <LinearGradient colors={['#02a6cb', '#03b1c9','#42ccd6']} style={styles.linearGradient}>
  
                <ScrollView style={styles.container}>
                <View>

                <View style={{padding:20}}>
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


                  <View style={{width: '100%'}}>
                   <View >
                        <FlatList
                              data={titles}
                              renderItem={({ item }) =>
                                <Item 
                                      description={item.lable}
                                      name={item.value}
                                      _url={item.thumbnail_large} 
                                      onPress={()=>this.goVedio(item.id)} />}
                                      keyExtractor={item => item.id}
                                      numColumns={2}
                                />
                     </View>
                  </View>
               </View>
            </ScrollView>
            
  <TouchableOpacity
          activeOpacity={0.5}
        // onPress={() => this.props.navigation.navigate('MyCart') } 
          style={styles.TouchableOpacityStyle}>
           
               <View>
                    <IconMore name="plus" size={35} color='#40bcf2'  /> 
                </View>
         
        </TouchableOpacity>
      
</LinearGradient>
            </SafeAreaView>
      );
      
       
    }
} 



export default SecondScreen;