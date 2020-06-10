
import {View,Text} from 'react-native';
import unsplash from '../api/unsplash';
import createDataContext from './createDataContext';


const ImgReducer=(state,action)=>{
    switch(action.type){
        case 'fetch_img':
            return {...state,img:action.payload};
        default:
            return state;
    }
};

const fetchImg= dispatch=>async(term)=>{
    const resp=await unsplash.get('/search/photos',{params:{query:term}});
    dispatch({type:'fetch_img',payload:resp.data.results});

};



export const{Context,Provider}=createDataContext(ImgReducer,{fetchImg},{img:[]}); 