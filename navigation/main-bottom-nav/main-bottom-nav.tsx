import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@ExpensesTracking/screens/home-screen/home-screen';
import ProfileScreen from '@ExpensesTracking/screens/profile-screen/profile-screen';
import ButtonFactory from '@ExpensesTracking/components/factories/button-factory/button-factory';
import Plus from '@ExpensesTracking/assets/images/plus.svg';
import styles from './main-bottom-nav.styles';

const Tab = createBottomTabNavigator();

const MainBottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: styles.tabBarItemStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,

        tabBarActiveTintColor: styles.tabBarActiveTintColor.color,
        tabBarInactiveTintColor: styles.tabBarInactiveTintColor.color,
      }}>
      <Tab.Screen
        options={{headerShown: false, tabBarIcon: () => null}}
        name="Home">
        {HomeScreen}
      </Tab.Screen>

      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,

          tabBarButton: props => (
            <ButtonFactory
              {...props}
              style={{top: -24}}
              type="floating"
              onPress={() => {}}>
              <Plus />
            </ButtonFactory>
          ),
        }}
        name="Create">
        {() => null}
      </Tab.Screen>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => null,
        }}
        name="Profile">
        {ProfileScreen}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default MainBottomNav;
