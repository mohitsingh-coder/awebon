import React from 'react';
import { TouchableOpacity, Image,Text, View } from 'react-native';

const ProductDetails = ({ navigation, route }) => {

  const {item} = route.params
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Image style={{width:"100%",height:"30%"}} source={{ uri: item.image }}/>

      <TouchableOpacity  style={{padding:15,backgroundColor:"grey",marginTop:20}} onPress={()=> navigation.goBack()}> 
        <Text style={{color:"#000"}}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}


export default ProductDetails;