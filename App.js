import { StyleSheet, Text, View, StatusBar,TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons,EvilIcons,Entypo,MaterialIcons,Ionicons,SimpleLineIcons,FontAwesome5 } from '@expo/vector-icons';
import React,{useState} from 'react';
import Posts from './Posts'

export default function App() {
  const [post, setPost] = useState('');
  const [list, setList] = useState([])
  const [totalLikes, setTotalLikes] = useState();

  
    function LIKE(){
    setLikes(likes+1)

    setTotalLikes(totalLikes+likes);
    }

  function transform(obj) {
    return <Posts post={obj.post} totalLikes={obj.totalLikes} />
  }

  function addPost(){
    setList([{post: post,totalLikes:totalLikes , setTotalLikes:setTotalLikes}, ...list])
    setPost('')
  }
 
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
      <ScrollView>
      <View style={styles.post}>
        <Image source={require('./assets/images/29273.jpg')} style={styles.image}/>

       <TextInput 
          style={styles.postTextInput}
          value={post}
          onChangeText={setPost}
          placeholder="What is on your mind?"
          />

        <TouchableOpacity onPress={addPost}>
        <Text style={styles.postText}>POST</Text>
        </TouchableOpacity>

        <TouchableOpacity><Ionicons name="md-images-outline" size={24} color="green" /></TouchableOpacity>

      </View>
      
      
      <View style={styles.body}>
        {list.map(item => transform(item))}
      </View>
      </ScrollView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'onyx',
    
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
    marginBottom:10,
    marginTop:5,
    justifyContent:"space-between",
    backgroundColor: 'white',
    borderBottomWidth:1,
  },

  image:{
    height:50,
    width:50,
    borderRadius:30
  },

  postText:{
    fontSize:14,
    color:'black'
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
    alignSelf:'flex-start',
    borderWidth:1,
    color:"black",
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
    
    backgroundColor:'transparent',
    
  },

});
