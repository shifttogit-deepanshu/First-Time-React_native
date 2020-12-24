import React,{useState} from "react"
import {View,StyleSheet,TextInput,Button} from "react-native"

const GoalInput = (props)=>{
    const [enteredGoal,setEnteredGoal] = useState('')
    
    const handleInputText = (enteredText)=>{
        setEnteredGoal(enteredText)
      }
    return (
        
        <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={enteredGoal} onChangeText={handleInputText}/>
        <Button title="ADD" onPress={props.onAdd.bind(this,enteredGoal)}/>
      </View>
    )
}
 
const styles = StyleSheet.create({
    input:{
        borderBottomColor:"black",
        borderBottomWidth:1,
        width:"80%",
        margin:10
      },
      inputContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
      
      }
})

export default GoalInput