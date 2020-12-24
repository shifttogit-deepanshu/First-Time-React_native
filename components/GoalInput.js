import React,{useState} from "react"
import {View,StyleSheet,TextInput,Button,Modal} from "react-native"

const GoalInput = (props)=>{
    const [enteredGoal,setEnteredGoal] = useState('')
    
    const handleInputText = (enteredText)=>{
        setEnteredGoal(enteredText)
      }
    
    const handleAddClick = ()=>{
        props.onAdd(enteredGoal)
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={enteredGoal} onChangeText={handleInputText}/>
        <View style={styles.buttonSetter}>
            <View style={styles.button}>
                <Button title="ADD" onPress={handleAddClick} />
            </View>
            <View style={styles.button}>
                <Button title="CANCEL" color="red" onPress={props.onCancel}/>
            </View>
        </View>
      </View>
      </Modal>
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
        flex:1,
        justifyContent:"center",
        alignItems:"center",
      
      },
      buttonSetter:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"60%"
      },
      button:{
          width:"40%"
      }
})

export default GoalInput