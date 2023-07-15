import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Nav from '../components/Nav';
import Dashboard from '../components/Dashboard';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Study")}
        >
          <Text style={styles.buttonText}>Study</Text>
        </TouchableOpacity>
        <View style={styles.navSpace}></View>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Meals")}
        >
          <Text style={styles.buttonText}>Meals</Text>
        </TouchableOpacity>
        <View style={styles.navSpace}></View>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Music")}
        >
          <Text style={styles.buttonText}>Music</Text>
        </TouchableOpacity>
        <View style={styles.navSpace}></View>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("Workout")}
        >
          <Text style={styles.buttonText}>Workout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        {/* <Dashboard text='Home' style={styles.dashboard}/>
        <Dashboard text='Study' style={styles.dashboard}/>
        <Dashboard text='Meals' style={styles.dashboard}/>
        <Dashboard text='Workout' style={styles.dashboard}/>
        <Dashboard text='Music' style={styles.dashboard}/> */}
        <Text style={styles.title}>R.M. Resource</Text>
        <Text style={styles.description}>“A good character is something you must make for yourself. 
        It cannot be inherited from parents. It cannot be created by having extraordinary advantages. 
        It isn’t a gift of birth, wealth, talent, or station. It is the result of your own endeavor. 
        It is the reward that comes from living good principles and manifesting a virtuous and honorable life.” -L. Tom Perry</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46494d',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  title: {
    fontSize: 45,
    textAlign: 'center', 
    padding: 30,
    color: 'white',

  },
  description: {
    textAlign: 'center', 
    fontSize: 24,
    paddingTop: 30,
    color: 'white',
  },
  navContainer: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    bottom: 50
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    
  },
  navSpace: {
    width: 10,
  },
  main: {
    flex: 15,
    width: '100%',
    height: 100,
  },
  dashboard: {
    padding: 20,
    margin: 20,
  },
});
