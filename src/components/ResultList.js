import React from 'react';
import {View, Text,StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail';
import {withNavigation} from 'react-navigation';

const ResultList=({ results, navigation})=>{
    if(!results.length){
        return null;
    }
    return <View style={styles.container}>
       
        <FlatList style={styles.flat}
           
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result=>result.id}
            renderItem={({item})=>{
                return (
                    <>
                    <TouchableOpacity onPress={()=>{navigation.navigate('ResultShow',{id:item.id})}}>
                    <ResultDetail item={item} />
                    </TouchableOpacity>
               </>
            )
            }}
            />
    </View>;
};

const styles=StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:10,
    }   ,
    container:{
      marginBottom:10
    }
});

export default withNavigation(ResultList);