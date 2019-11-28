import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../pages/Home/Home';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Header from '../components/Header/Header';

const appNavigator = createStackNavigator({
    Home: {
        screen: Home,
        header: <Header text='MoviesChallenge' />
    },
    MovieDetail: MovieDetails
},
{
    initialRouteName: "Home"
});
  
export default createAppContainer(appNavigator);
