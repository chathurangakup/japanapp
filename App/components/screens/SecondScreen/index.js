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
}

  
  
  ];
  
    function Item({ name, _url,onPress,description }) {
      return (
          <View style={styles.thumbnail1} >
           
           <TouchableOpacity  onPress={onPress}>


          
           <ImageBackground    style={{ width: wp('45%'), height: wp('30%'), borderRadius: 10,  
  
    opacity: 0.4,
    backgroundColor: 'black', }} 
             imageStyle={{ borderRadius: 10 }}source={_url}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <View style={{width:20,height:20,backgroundColor:'#777',borderRadius:10,margin:10,alignItems:'center'}}>
                    <Text>1</Text>
                  </View>
                  <View>
                      <IconMore name="more-vertical" size={25} color='white'  style={{fontWeight:'bold',marginLeft:wp('2%'),marginTop:wp('3%')}} /> 
                  </View>
                </View>
                 
                    <Text style={styles.title}>{name}</Text>
              </ImageBackground>
         
            
           
             
              {/* <Text style={{ fontSize: 15, marginHorizontal: 30, color: "blue" }}>Product</Text> */}
           
              </TouchableOpacity>
             
          </View>
      );
    }
  
        return(
        
            <LinearGradient colors={['#0ea8e0', '#1caade','#6ccdde']}  style={styles.linearGradient}>
    <SafeAreaView style={{ flex: 1}}>
                <ScrollView style={styles.container}>
                <View>

                <View style={{padding:20}}>
                 <Image
                  style={{width:wp('10%'),height:wp('10%')}}
                  source={require('../../images/drawer.png')}
                />
                 </View>

                 <View style={{alignItems:'center',paddingBottom:wp('10%')}}>
                 <Text style={{fontSize:wp('6%'),color:'white',fontWeight:'bold'}}>Memo</Text>
                      <View style={{ 
    height: 0,               
    width: 100,              // as much as you want to 'Stretch' the underline
    borderTopColor: 'white', 
    borderTopWidth: 3,      
    marginTop: 10        
}} />
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