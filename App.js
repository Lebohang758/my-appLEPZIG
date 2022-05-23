import { StatusBar } from 'expo-status-bar';
import { Fontisto, AntDesign, Entypo, EvilIcons, MaterialIcons, Ionicons } from '@expo/vector-icons';

import { StyleSheet, Image, View, Button, TextInput, TouchableOpacity,Text,ScrollView } from 'react-native';
import { useState  } from 'react';
import Post from './Post';

export default function App() {
  const [post, setPost] = useState('');
  const [list, setList] = useState([])
  
  

  function transform(facebook) {
    return <Post post={facebook.post}/>
  }

  function addPost(){
    setList([{post: post}, ...list])
    setPost('')
    
  }

  return (
    <View style={styles.container}> 
    <StatusBar hidden/>
      
      <View style={styles.heading}>
      <TouchableOpacity>
      <View style={{ paddingLeft: '5%', marginVertical: 20}}>
      <Ionicons name="arrow-back-outline" size={30} color="#fff" />
      </View>
      <Text style={{ color: '#fff', position: 'absolute', paddingLeft: '30%', fontSize: 20, marginVertical: 20, fontWeight: 'bold'}}> Create Posts</Text>
      <Text style={{ color: '#29B6F6', fontSize: 20, fontWeight: 'bold', position: 'absolute', paddingLeft: '80%', marginVertical: 20}}>POST</Text>
      </TouchableOpacity>
      </View>
      
      <View style={styles.inputFields}>
        <View style={styles.title}>
        <Image style={styles.pic} source={require('./assets/Taylor.jpg')} />
        <Text style={{paddingLeft:100,fontSize:20,fontWeight:'bold',marginBottom:5}}>Joseph Motshetlase</Text>
        <View style={{ backgroundColor:'#E0E0E0',borderRadius:10,marginLeft:100,marginBottom:40,height:30,width:140}}>
        <View style={{paddingLeft:7,marginTop:5}}>
        <Fontisto name="world-o" size={20} color="black" />
        </View>
        <Text style={{position:'absolute',paddingLeft:40,marginTop:1,fontSize:20}}>Public</Text>
        <View style={{position:'absolute',paddingLeft:110,marginTop:6}}>
        <AntDesign name="caretdown" size={18} color="black" />
        </View>
        </View>
        </View>
        <TextInput style={styles.input} value={post} placeholder=  {'Whats on your mind?'}  onChangeText={setPost} />
        <View style={{}}>
        <TouchableOpacity>
        <Entypo name="camera" size={24} color="black" /> 
        <Text>Photos/video</Text>
        <AntDesign name="adduser" size={24} color="blue" />
        <Text>Tag Friends</Text>
        <EvilIcons name="location" size={24} color="red" />
        <Text>Add location</Text>
        <MaterialIcons name="keyboard-voice" size={24} color="blue" />
        <Text>Host a Q&A</Text>
        </TouchableOpacity>
        </View>
        <View style={{width:'100%',marginVertical:20}}>
        <Button title="Post" onPress={addPost} />
        </View>
        
      </View>
    
      {list.map(item => transform(item))}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputFields: {
    alignItems: 'flex-start',
    width: '100%',
    padding: 10,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    height:100,
    width:'100%',
    marginBottom:20,
    paddingLeft:'5%',
  },
  pic:{
  height:70,
  width:70,
  borderRadius:40,
  position:'absolute',
  marginHorizontal:10,
  },
  heading:{
  backgroundColor:'black',
  height:70,
  width:'100%',
  },
});







