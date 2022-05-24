import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native'
import React,{useState} from 'react'
import { MaterialCommunityIcons,EvilIcons,Entypo,MaterialIcons,Ionicons,SimpleLineIcons,FontAwesome5,AntDesign } from '@expo/vector-icons';

export default function Posts({post,totalLikes,setTotalLikes}) {
    const[likes, setLikes]= useState(0);

    function LIKE(){
    setLikes(likes+1)
    totalLikes = setLikes(totalLikes+1);
    setTotalLikes(totalLikes)
    }
    
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('./assets/images/29273.jpg')} style={styles.image}/>
            <Text style={styles.postText}>Ts'ele Kelane</Text>
            <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
            <AntDesign name="close" size={18} color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.body}>
            <Text>{post}</Text>
            <View style={styles.Actions}>
                <AntDesign name="like2" size={24} color="black" />
                <Text style={styles.text}>{totalLikes}</Text>
            </View>
        </View>

        <View style={styles.footer}>
        <TouchableOpacity style={styles.Actions} onPress={LIKE}>
        <AntDesign name="like2" size={24} color="black" />
        <Text style={styles.text}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Actions}>
        <MaterialCommunityIcons name="comment-outline" size={24} color="black" />
        <Text style={styles.text}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Actions}>
        <FontAwesome5 name="telegram-plane" size={24} color="black" />
        <Text style={styles.text}>Share</Text>
        </TouchableOpacity>
        </View>

      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

        padding: 2,
        margin:10,
        
    },
    header: {
        flexDirection:'row',
        justifyContent:'space-between',
    
    },

    body: {
        marginBottom:25,
        marginTop:25,
        marginLeft:5,
        justifyContent:"space-evenly"
    },

    footer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#777',
        borderTopWidth:1,
        borderTopColor:'#777'
    },

    text:{
        fontSize:14,
        alignSelf: 'center',
        color:'black'
    },
    Actions: {
        flexDirection: 'row',
        marginLeft:5

    },
    image:{

        height:50,
        width:50,
        borderRadius:30
    },
    postText:{
        fontSize:15,
        color:'black',
        alignSelf:'flex-start',
        alignItems:"flex-start"
    }
})