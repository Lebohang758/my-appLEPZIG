import { StyleSheet, Text, View, Button,ScrollView} from 'react-native'
import React from 'react'
import { useState } from 'react';


export default function Post({post}) {
    const [like, setLike] = useState(0);
    function Addlike() {
        setLike(like + 1)
    }
  
  return (
      
    <View style={styles.container}>
      <Text>{post}</Text>
      <Text style={{marginTop:5,fontSize:20}}>Like:{like}</Text>
      <Button title="Like" onPress={Addlike}/>
    </View>
      
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1,
        borderColor:'black',
        padding: 15,
        marginBottom: 5,
    },
})

