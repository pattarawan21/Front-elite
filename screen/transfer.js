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
        const bank=[
            {
                id: 1,
                name: "scb",
                image: images.scb,
            },
            {
                id: 2,
                name: "kbank",
                image: images.kbank,
            },
            {
                id: 3,
                name: "ibank",
                image: images.ibank,
            },
            {
                id: 4,
                name: "aomsin",
                image: images.aomsin,
            },
            {
                id: 5,
                name: "krungsri",
                image: images.krungsri,
            },
            {
                id: 6,
                name: "tgs",
                image: images.tgs,
            },
            {
                id: 7,
                name: "uob",
                image: images.uob,
            },
        ]
        return(
            <View style={{padding:SIZES.padding*1.5}}>
                <Text style={{fontSize:24,color:'#000'}}>จดจำ</Text> 
                <Image
                    source={require("../assets/images/image_fav.png")}
                    resizeMode='contain'
                    style={{
                        width:380,
                        height:100
                    }}/>
                <View style={{marginLeft:80,alignItems:'center',justifyContent:'center',width:200,height:200,borderRadius:100,backgroundColor:'#E1F1FF'}}>
                <Text style={{fontSize:14,color:'#000'}}>ยอดเงินคงเหลือ</Text>
                <Text style={{fontSize:50,color:'#000'}}>1000</Text>
                </View>
                <View >
                <TouchableOpacity
                    style={{
                        flex:2,
                        width:50,
                        width:50,
                        paddingLeft:SIZES.padding*2,
                        justifyContent:'center'
                    }}
                    //onPress={()=> navigation.numberbun}
                >  
                    <Image
                    source={images.scb} 
                    resizeMode='contain'
                    style={{
                        width:70,
                        height:70
                    }}
                    />
                </TouchableOpacity>
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