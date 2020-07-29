import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen39503Navigator from '../features/BlankScreen39503/navigator';
import BlankScreen19502Navigator from '../features/BlankScreen19502/navigator';
import BlankScreen29501Navigator from '../features/BlankScreen29501/navigator';
import BlankScreen39500Navigator from '../features/BlankScreen39500/navigator';
import BlankScreen19499Navigator from '../features/BlankScreen19499/navigator';
import BlankScreen29498Navigator from '../features/BlankScreen29498/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen39503: { screen: BlankScreen39503Navigator },
BlankScreen19502: { screen: BlankScreen19502Navigator },
BlankScreen29501: { screen: BlankScreen29501Navigator },
BlankScreen39500: { screen: BlankScreen39500Navigator },
BlankScreen19499: { screen: BlankScreen19499Navigator },
BlankScreen29498: { screen: BlankScreen29498Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
