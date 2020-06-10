import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen'
import ResultShowScreen from './src/components/ResultShowScreen';
import {Provider} from './src/context/ImgContext';



const navigator = createStackNavigator({
  Home:HomeScreen,
  ResultShow:ResultShowScreen
},
{
  initialRouteName:'Home',
  defaultNavigationOptions:{
    title:'Test'
  }
}
);

const App= createAppContainer(navigator);

export default()=>{
  return (
    <Provider >
    <App />
    </Provider>
  );
};
