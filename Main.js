import { StyleSheet, Text, View, StatusBar,TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons,EvilIcons,Entypo,MaterialIcons,Ionicons,SimpleLineIcons,FontAwesome5 } from '@expo/vector-icons';
import {useState} from 'react';


export default function Main() {
 
  return (
  <>
  <StatusBar/>

    <View style={styles.container}>
  
      <View style={styles.header}>

          <Text style={styles.headerText}>Facebook</Text>

          <TouchableOpacity style={styles.headerIcons}>
          <EvilIcons name="search" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.headerIcons}>
          <MaterialCommunityIcons name="facebook-messenger" size={24} color="white" />
          </TouchableOpacity>

      </View>

      <View style={styles.NavigationBar}>
        <TouchableOpacity><Entypo name="home" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
        <FontAwesome5 name="user-friends" size={20} color="white" />
        </TouchableOpacity>

        <TouchableOpacity >
        <MaterialIcons name="ondemand-video" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
        <Ionicons name="ios-person-circle" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity >
        <Ionicons name="md-notifications-outline" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity >
        <SimpleLineIcons name="menu" size={24} color="white" />
        </TouchableOpacity>

      </View>
      <View style={styles.post}>
        <Image source={require('./assets/images/29273.jpg')} style={styles.image}/>

        <TouchableOpacity onPress={Post}>
        <Text style={styles.postText}>What is on your mind?</Text>
        
        </TouchableOpacity>

        <TouchableOpacity><Ionicons name="md-images-outline" size={24} color="green" /></TouchableOpacity>

      </View>
      <View style={styles.Navigation}>
          <Text style={styles.postText}>Stories</Text>
          <Text style={styles.postText}>Reels</Text>
          <Text style={styles.postText}>Rooms</Text>
      </View>


      <ScrollView horizontal>
        <View style={styles.Stories}>
          <Image source={require('./assets/images/pexels-kinkate-421160.jpg')} resizeMode='cover' style={styles.storyImage}></Image>
          <Image source={require('./assets/images/pexels-pixabay-163489.jpg')} resizeMode='cover' style={styles.storyImage}></Image>
          <Image source={require('./assets/images/pexels-pixabay-260024.jpg')} resizeMode='cover' style={styles.storyImage}></Image>
          <Image source={require('./assets/images/pexels-pixabay-39308.jpg')} resizeMode='cover' style={styles.storyImage}></Image>
          <Image source={require('./assets/images/pexels-pixabay-40751.jpg')} resizeMode='cover' style={styles.storyImage}></Image>
        </View>
      </ScrollView>
      <View style={styles.body}>

      
      
      </View>
      <View style={styles.footer}>
      
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor: '#534b4f',
    
  },

  header: {
    backgroundColor:'black',
    width: '100%',
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10
   
  },
  headerIcons:{

    justifyContent:"space-evenly",
    alignItems:"center"
  },

 
  headerText: {
    fontSize:30,
    fontWeight:'bold',
    color:'#fff'
  },

  NavigationBar:{
    backgroundColor:'black',
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:'#fff'
  },

  post: {

    flexDirection:'row',
    padding:10,
    margin:10,
    justifyContent:"space-between"
  },

  image:{
    height:50,
    width:50,
    borderRadius:30
  },

  postText:{
    fontSize:14,
    color:'#fff'
  },

  postTextInput:{
  
    borderRadius:25,
    paddingLeft:20,
    paddingRight:20,
    borderWidth:1,
    marginLeft:20,
    marginRight:20,
    borderColor:"white",
    color:"white",
    width:250,
    alignSelf:'flex-start'
  },

  Navigation:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin:10,
    alignItems: 'center'
  },
  

  Stories:{
    padding:10,
    width:100,
    height:150,
    flexDirection:'row',
    
  },

  storyImage:{
    height:150,
    width:100,
    borderRadius:10,
    marginLeft:10,
    marginRight:10,
  },

  body: {
    
    backgroundColor:'#fff',
  },

  footer: {
    
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    backgroundColor:'#1e90ff'
  },

});
