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
import { bool } from 'prop-types';


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







              <Text style={{ fontSize: 15, marginHorizontal: 30, color: "black",fontWeight:'bold' }}>Place to go</Text>
              <Text style={{ fontSize: 15, marginHorizontal: 30, color: "black" }}>Texts comes here</Text>



          </View>
      );
    }

        return(
          <SafeAreaView style={{ flex: 1}}>
            <LinearGradient colors={['#40BCF2', '#0EA8E0','#6CCDDE']}  style={styles.linearGradient}>

                <ScrollView style={styles.container}>
                <View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',flex:1,justifyContent:'flex-start',padding:10}}>
                      <View >
                          <IconBack name="arrow-back" size={25} color='white' onPress={()=>this.props.navigation.navigate('ThirdScreen')} style={{fontWeight:'bold'}} />
                      </View>
                      <View style={{padding:5}}>
                          <Text style={{color:'white'}}>Folder name</Text>
                      </View>

                    </View>
                    <View style={{flexDirection:'row',flex:1,padding:10}}>
                    <View>
                    <TouchableOpacity   onPress={()=>this.props.navigation.navigate('ThirdScreen')}>
                      <Image

                                style={{width:30,height:30,marginLeft:wp('30%')}}
                                source={require('../../images/box4.png')}
                              />
                      </TouchableOpacity>
                      </View>
                      <View>
                      <IconMore name="more-vertical" size={25} color='white' style={{fontWeight:'bold'}} />
                      </View>

                    </View>

                 </View>




                  <View style={{width: '100%'}}>
                   <View >
                        <FlatList
                              data={titles}
                              renderItem={({ item }) =>
                              <View style={styles.thumbnail1} >

                              <Text style={{ fontSize: 15, marginHorizontal: 30, color: "black",fontWeight:'bold' }}>Place to go</Text>
                              <Text style={{ fontSize: 15, marginHorizontal: 30, color: "black" }}>Texts comes here</Text>
                          </View>
                                    }
                                      keyExtractor={item => item.id}
                                      numColumns={1}
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
