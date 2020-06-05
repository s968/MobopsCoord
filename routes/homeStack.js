import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ListView from '../ListView';
import ButtonPage from '../Buttonpage';

const screens = {
    Home: {
        screen: ButtonPage
    },
    GroceryList: {
        screen: ListView
    }
} 

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
