import React from 'react';
import {View ,Text, StyleSheet, Image} from 'react-native';


const ResultDetail=({item})=>{
return <View style={styles.container}>
        <Image style={styles.image} source={{ uri :item.urls.regular}} />
        <Text style={styles.text}>{item.name}</Text>
        </View>
};
const styles=StyleSheet.create({
    image:{
        width:150,
        height:100,
        borderRadius:7,
        
    },
    text:{
        fontWeight:'bold',
        marginTop:3
    },
    container:{
        marginLeft:10
    }
});

export default ResultDetail;