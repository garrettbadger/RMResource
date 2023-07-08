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
        <Dashboard text='Home' style={styles.dashboard}/>
        <Dashboard text='Study' style={styles.dashboard}/>
        <Dashboard text='Meals' style={styles.dashboard}/>
        <Dashboard text='Workout' style={styles.dashboard}/>
        <Dashboard text='Music' style={styles.dashboard}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
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
