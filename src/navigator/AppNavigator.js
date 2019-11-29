import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../pages/Home/Home';
import MovieDetails from '../pages/MovieDetails/MovieDetails';

const appNavigator = createStackNavigator({
    Home: Home,
    MovieDetail: MovieDetails
},
{
    initialRouteName: "Home"
});
  
export default createAppContainer(appNavigator);
