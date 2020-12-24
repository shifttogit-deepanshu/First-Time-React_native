import React from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"

const GoalItem = (props)=>{
    return (
        <TouchableOpacity onPress={props.deleteItem.bind(this,props.id)}>
        <View style={styles.listItems}><Text>{props.title}</Text></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItems:{
        backgroundColor:"grey",
        borderColor:"black",
        borderWidth:1,
        marginVertical:10,
        padding:10
      }
})

export default GoalItem