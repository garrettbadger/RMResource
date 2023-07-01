import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard, Linking, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { doc, setDoc, collection, getDocs, deleteDoc} from "firebase/firestore";
import { db } from '../config';
import Recipe from '../components/Recipe';

export default function MealScreen() {
  const [recipe, setRecipe] = useState('');
  const [recipeBox, setRecipeBox] = useState([]);

  // Load recipes from Firestore database on component mount
  useEffect(() => {
    loadRecipes();
  }, []);

  // Function to load recipes from Firestore database
  const loadRecipes = async () => {
    const querySnapshot = await getDocs(collection(db, 'Recipes'));
    const recipes = [];
    querySnapshot.forEach((doc) => {
      recipes.push({ id: doc.id, recipe: 'https://'+doc.data().recipe });
    });
    setRecipeBox(recipes);
  };

  // Function to add a recipe to the Firestore database
  const addRecipe = async () => {
    if (recipe !== '') {
      await setDoc(doc(db, 'Recipes', recipe), {
        recipe: recipe
      });
      setRecipe('');
      Keyboard.dismiss();
      loadRecipes(); // Reload recipes after adding a new one
    }
  };
  // Function to delete a recipe from the Firestore database
  const deleteRecipe = async (id) => {
    await deleteDoc(doc(db, 'Recipes', id));
    loadRecipes(); // Reload recipes after deleting one
  };

  // Function to open the link to the recipe
  const openRecipeLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Recipes</Text>
        <FlatList
          data={recipeBox}
          renderItem={({ item }) => (
            <View style={styles.recipeContainer}>
              <TouchableOpacity onPress={() => openRecipeLink(item.recipe)}>
                <Recipe text={item.recipe} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteRecipe(item.id)}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
          style={styles.items}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputRecipe}
      >
        <TextInput
          style={styles.input}
          placeholder={'Input Recipe Link'}
          keyboardType="default"
          value={recipe}
          onChangeText={setRecipe}
          multiline={true}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={addRecipe}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>ADD</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
    width: '100%',
    height: '70%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center',
  },
  items: {
    flex: 1,
  },
  inputRecipe: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 60,
    borderWidth: 0,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#ff5e3a',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  recipeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#ff5e3a',
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },
});