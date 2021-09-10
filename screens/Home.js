import React from 'react';
import{
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native'

export default class HomeScreen extends React.Component(){
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/space.gif')} style={StyleSheet.backroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar App</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>
                        this.props.navigation.navigate("StarMap")
                    }>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image source={require("../assets/star_map.png")} style={{width:80, height:80}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={()=>
                        this.props.navigation.navigate("SpaceCrafts")
                    }>
                        <Text style={styles.routeText}>Space Crafts</Text>
                        <Image source={require("../assets/spacecraft.png")} style={{width:80, height:80}}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={()=>
                        this.props.navigation.navigate("DailyPic")
                    }>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        <Image source={require("../assets/photo.png")} style={{width:80, height:80}}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
    },
    titleBar:{
        flex:0.5,
        justifyContent:'center',
        alignItems:'center'
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white'
    },
    routeText:{
        fontSize:32,
        color:'#42008D',
        marginTop:20,
        paddingLeft:30
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:'white'
    },
    backroundImage:{
        flex:1,
        resizeMode:'cover'
    }
})