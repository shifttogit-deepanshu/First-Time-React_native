import React from "react"
import {View,Text,StyleSheet} from "react-native"

const GoalItem = (props)=>{
    return (
        <View style={styles.listItems}><Text>{props.title}</Text></View>
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