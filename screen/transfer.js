import React from 'react';
import{
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,

}from "react-native";
import {icons,images,SIZES,COLORS,FONTS} from '../constants'
const transfer =()=>{
    function renderHeader(){
        return(
            
            <View style={{flexDirection:'row',height:50}}>
                <TouchableOpacity
                    style={{
                        width:50,
                        paddingLeft:SIZES.padding*2,
                        justifyContent:'center'
                    }}
                    //onPress={()=> navigation.goBack}
                >
                    
                    <Image
                    source={icons.back} //require("../assets/images/icons/back.png");
                    resizeMode='contain'
                    style={{
                        width:30,
                        height:30
                    }}
                    />
                </TouchableOpacity>
                <View style={{flex:1, alignItems:'start',justifyContent:'center'}}>
                    <View>
                        
                        <Text style={{...FONTS.h4,color:'#000'}}>โอนเงิน</Text>
                    </View>
                </View>
            </View>
        )
    }
    function renderFav(){

        return(
            <View style={{padding:25}}>
                <View style={{marginLeft:80,alignItems:'center',justifyContent:'center',width:210,height:210,borderRadius:110,backgroundColor:'#73768D',marginTop:30}}>
                <View style={{alignItems:'center',justifyContent:'center',width:200,height:200,borderRadius:100,backgroundColor:'#E1F1FF',}}>
                <Text style={{fontSize:16,color:'#000'}}>ยอดเงินคงเหลือ</Text>
                <Text style={{fontSize:50,color:'#000'}}>1,000</Text>
                </View>
                </View>
                <View  
                 style={{padding:15,
                 flexDirection:'row',
                 width:50,
                 height:50,
                 marginLeft:155,
                 justifyContent:'center'}}
                 >
                <View>
                <TouchableOpacity
                    style={{
                        padding:15,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                    //onPress={()=> navigation.numberbun}
                >  
                    <Image
                    source={images.scb} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                    style={{
                        padding:15,
                        marginLeft:45,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                    //onPress={()=> navigation.numberbun}
                >  
                    <Image
                    source={images.kbank} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                    style={{
                        padding:15,
                        marginLeft:45,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                    //onPress={()=> navigation.numberbun}
                >  
                    <Image
                    source={images.ktb} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                    style={{
                        padding:15,
                        marginLeft:45,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                    //onPress={()=> navigation.numberbun}
                >  
                    <Image
                    source={images.ibank} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                </View>
                <View  
                 style={{
                 padding:15,
                 marginTop:50,
                 flexDirection:'row',
                 width:50,
                 height:50,
                 marginLeft:155,
                 justifyContent:'center'}}
                 >
                <View>
                <TouchableOpacity
                    style={{
                        padding:15,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                    //onPress={()=> navigation.numberbun}
                >  
                    <Image
                    source={images.aomsin} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                    style={{
                        padding:15,
                        marginLeft:45,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                    //onPress={()=> navigation.numberbun}
                >  
                    <Image
                    source={images.krungsri} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                    style={{
                        padding:15,
                        marginLeft:45,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                    //onPress={()=> navigation.numberbun}
                >  
                    <Image
                    source={images.ttb} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                    style={{
                        padding:15,
                        marginLeft:45,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        justifyContent:'center'
                    }}
                    //onPress={()=> navigation.numberbun}
                >  
                    <Image
                    source={images.tgs} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                </View>
                <View  
                 style={{padding:15,
                 flexDirection:'row',
                 width:50,
                 height:50,
                 marginLeft:10,
                 justifyContent:'center'}}
                 >
                <View>
                <TouchableOpacity
                    style={{
                        padding:15,
                        flexDirection:'row',
                        width:50,
                        width:50,
                        marginTop:50,
                        justifyContent:'center'
                    }}
                    //onPress={()=> navigation.numberbun}
                >  
                    <Image
                    source={images.uob} 
                    resizeMode='contain'
                    style={{
                        width:80,
                        height:80
                    }}
                    />
                </TouchableOpacity>
                </View>
                </View>
                
            </View>
        
        )
    }
    return(
        <SafeAreaView style={styles.contrainer}>
            {renderHeader()}
            {renderFav()}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    contrainer:{
        flex:1,
        backgroundColor: COLORS.lightGray4
    },
    shaadow:{
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity:0.1,
        shadowRadius:3,
        elevation:1,
    }
})
export default transfer;