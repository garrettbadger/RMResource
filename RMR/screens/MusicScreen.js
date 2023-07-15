import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard, Linking, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { doc, setDoc, collection, getDocs, deleteDoc} from "firebase/firestore";
import { db } from '../config';
import Card from '../components/Card';

export default function MealScreen() {
  const [music, setMusic] = useState('');
  const [musicBox, setMusicBox] = useState([]);

  // Load music from Firestore database on component mount
  useEffect(() => {
    loadMusic();
  }, []);

  // Function to load music from Firestore database
  const loadMusic = async () => {
    const querySnapshot = await getDocs(collection(db, 'Music'));
    const music = [];
    querySnapshot.forEach((doc) => {
      music.push({ id: doc.id, music: decodeURIComponent(doc.data().music) });
    });
    setMusicBox(music);
  };

  // Function to add a music to the Firestore database
  const addMusic = async () => {
    if (music !== '') {
      const encodedMusicURL = encodeURIComponent(music); // URL encode the music URL
      await setDoc(doc(db, 'Music', encodedMusicURL), {
        music: encodedMusicURL
      });
      setMusic('');
      Keyboard.dismiss();
      loadMusic(); // Reload music after adding a new one
    }
  };
  // Function to delete a music from the Firestore database
  const deleteMusic = async (id) => {
    await deleteDoc(doc(db, 'Music', id));
    loadMusic(); // Reload music after deleting one
  };

  // Function to open the link to the music
  const openMusicLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Music</Text>
        <FlatList
          data={musicBox}
          renderItem={({ item }) => (
            <View style={styles.musicContainer}>
              <TouchableOpacity onPress={() => openMusicLink(item.music)}>
                <Card text={item.music} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteMusic(item.id)}
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
        style={styles.inputMusic}
      >
        <TextInput
          style={styles.input}
          placeholder={'Input Music Link'}
          keyboardType="default"
          value={music}
          onChangeText={setMusic}
          multiline={true}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={addMusic}>
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
    height: '85%',
    backgroundColor: 'lightgreen',
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
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center',
  },
  items: {
    flex: 1,
  },
  inputMusic: {
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
    backgroundColor: 'lightblue',
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
  musicContainer: {
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
    fontSize: 16,
  },
});
