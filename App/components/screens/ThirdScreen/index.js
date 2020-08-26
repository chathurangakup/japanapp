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
  import IconBack from 'react-native-vector-icons/Ionicons';
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
           
           <View style={{padding:10}}>
                 <Text>
                  Place to go
                </Text>
                <Text style={{color:'#777'}}>
                  Text comes here
                </Text>
           </View>
               
         
            
           
             
              {/* <Text style={{ fontSize: 15, marginHorizontal: 30, color: "blue" }}>Product</Text> */}
           
            
             
          </View>
      );
    }
  
        return(
        
            <LinearGradient colors={['#0ea8e0', '#1caade','#6ccdde']}  style={styles.linearGradient}>
  <SafeAreaView style={{ flex: 1}}>
                <ScrollView style={styles.container}>
                <View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',flex:1,justifyContent:'flex-start',padding:10}}>
                      <View >
                          <IconBack name="arrow-back" size={25} color='white' onPress={()=>this.props.navigation.navigate('SecondScreen')} style={{fontWeight:'bold'}} /> 
                      </View>
                      <View style={{padding:5}}>
                      <Text style={{color:'white'}}>Folder name</Text>
                      </View>
                        
                    </View>
                    <View style={{flexDirection:'row',flex:1,padding:10}}>
                    <View>
                      <TouchableOpacity   onPress={()=>this.props.navigation.navigate('ForthScreen')}>
                      <Image
                  
                                style={{width:30,height:30,marginLeft:wp('30%')}}
                                source={require('../../images/doublebox.png')}
                              />
                      </TouchableOpacity>
                
                          {/* <IconBack name="logo-dropbox" size={25} color='white'  style={{fontWeight:'bold',marginLeft:wp('30%')}} />  */}
                      </View>
                      <View>
                      <IconMore name="more-vertical" size={25} color='white'  style={{fontWeight:'bold'}} /> 
                      </View>
                        
                    </View>
               
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
        </SafeAreaView>
</LinearGradient>
            
      );
      
       
    }
} 



export default SecondScreen;