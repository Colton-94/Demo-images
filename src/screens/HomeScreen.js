import React from 'react';
import {Text,Button} from 'react-native-elements';
import Search from './Search';

const HomeScreen=()=>{
    return (
    <>
    <Text h4>Hi search for images you want</Text>
    <Search />
    </>
    );
};

export default HomeScreen;