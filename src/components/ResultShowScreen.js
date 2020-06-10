import React,{useContext, useEffect} from 'react';
import {Text,Image,StyleSheet} from 'react-native';
import unsplash from '../api/unsplash';
import {Context} from '../context/ImgContext';



const ResultShowScreen=({navigation})=>{
    const {state:{img}}=useContext(Context);
    const id=navigation.getParam('id');

    const image=img.find(i=>i.id===id);

        
   
               
        return (
            <>
            <Image style={styles.image} source={{ uri :image.urls.regular}} />
            
            </>
        );
     
};

ResultShowScreen.navigationOptions=()=>{
    return{
        headerShown:false
    };
};
const styles=StyleSheet.create({
    image:{
        
        width:412,
        height:700,
        borderRadius:7,  
    },
    
    
});



export default ResultShowScreen;