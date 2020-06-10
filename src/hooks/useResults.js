import React,{useEffect,useState} from 'react';
import unsplash from '../api/unsplash';


export default ()=>{
const [results,setResults]=useState(['hi']);
const [err,setErr]=useState('');
//console.log(results);
const searchApi=async(term)=>{
  
try{
const resp=await unsplash.get('/search/photos',{
    params:{query:term}
});
setResults(resp.data.results);

}catch(err){
setErr('something went wrong');
}
}; 

useEffect(()=>{
searchApi('cafe Racer');

},[]);

return [searchApi,err,results];
};