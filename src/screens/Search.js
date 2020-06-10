import React,{useState,useContext} from 'react';
import {Text,StyleSheet,View,TextInput, Button, onPress} from 'react-native';
import SearchBar from '../components/SeachBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';
import {Context} from '../context/ImgContext';


const Search=()=>{
    const[value,setValue]=useState('');
    //const [searchApi,err,results]=useResults();
    const {fetchImg,state:{img}}=useContext(Context);
    
  
    //console.log('res',results);
    return(
     <>
     <SearchBar 
     onSubmit={()=>{fetchImg(value)}}
     onChange={setValue}
     term={value}
      />
    
    <ResultList results={img}/>
     </>
    );
};

export default Search;  