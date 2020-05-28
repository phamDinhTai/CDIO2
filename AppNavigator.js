import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from './components/component-login';
import Menu from './components/componentMenu';
import TShirt from './components/compnent-tshirt';
import MyCart from './components/component-myCart';

const screens = {
    Menu: {
        screen: Menu
    },
    Login: {
        screen: Login
    },
    
    TShirt: {
        screen: TShirt
    },
    MyCart: {
        screen: MyCart
    }
}

const NavStack = createStackNavigator(screens);

export default createAppContainer(NavStack);