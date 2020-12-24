import React,{useState} from "react"

import {StyleSheet,View,Text,TextInput, Button, FlatList} from "react-native"

export default app = ()=>{
  const [enteredGoal,setEnteredGoal] = useState('')
  const [courseGoals,setCourseGoals] = useState([])
  const handleInputText = (enteredText)=>{
    setEnteredGoal(enteredText)
  }
  const handleAddItem = ()=>{
    setCourseGoals((currentGoals)=>setCourseGoals([...currentGoals,{uid:Math.random().toString(),value:enteredGoal}]))
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={enteredGoal} onChangeText={handleInputText}/>
        <Button title="ADD" onPress={handleAddItem}/>
      </View>
      <View>
        <FlatList keyExtractor={(item,index)=>item.uid}
        data={courseGoals} renderItem={itemData=><View style={styles.listItems}><Text>{itemData.item.value}</Text></View>}/> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    padding:50
  },
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
  
  },
  listItems:{
    backgroundColor:"grey",
    borderColor:"black",
    borderWidth:1,
    marginVertical:10,
    padding:10
  }
})

