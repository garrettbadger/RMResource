import HomeScreen from "./screens/HomeScreen";
import StudyScreen from "./screens/StudyScreen";
import MealScreen from "./screens/MealScreen";
import MusicScreen from "./screens/MusicScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import MentorScreen from "./screens/MentorScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: "Welcome"}}
            />
            <Stack.Screen
              name="Study"
              component={StudyScreen}
              options={{title: "Back"}}
            />
             <Stack.Screen
              name="Meals"
              component={MealScreen}
              options={{title: "Back"}}
            />
             
             <Stack.Screen
              name="Music"
              component={MusicScreen}
              options={{title: "Back"}}
            />
             <Stack.Screen
              name="Workout"
              component={WorkoutScreen}
              options={{title: "Back"}}
            />
        </Stack.Navigator>
      </NavigationContainer>
      
   
    
  );
}



