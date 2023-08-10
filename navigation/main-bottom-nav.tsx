import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@ExpensesTracking/screens/home-screen/home-screen';
import ProfileScreen from '@ExpensesTracking/screens/profile-screen/profile-screen';

const Tab = createBottomTabNavigator();
const MainBottomNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainBottomNav;
