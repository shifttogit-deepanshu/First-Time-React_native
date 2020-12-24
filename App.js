import React,{useState} from "react"

import {StyleSheet,View, FlatList,Button} from "react-native"

import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default app = ()=>{
  const [courseGoals,setCourseGoals] = useState([])
  const [addMode,setAddMode] = useState(false)
  const handleAddItem = (enteredGoal)=>{
    setCourseGoals((currentGoals)=>setCourseGoals([...currentGoals,{id:Math.random().toString(),value:enteredGoal}]))
    setAddMode(false)
  }

  const handleOnCancel = ()=>{
    setAddMode(false)
  }
  const handleDeleteItem = (id)=>{
    setCourseGoals((currentGoals)=>{
      return currentGoals.filter((goal)=>{
          return goal.id !== id
        })
    })
  }
  return (
    <View style={styles.mainContainer}>
      <Button title="Add New Item" onPress={()=>setAddMode(true)}/>
      <GoalInput onAdd={handleAddItem} visible={addMode} onCancel={handleOnCancel}/>
      <View>
        <FlatList
        data={courseGoals} renderItem={itemData=><GoalItem deleteItem={handleDeleteItem} title={itemData.item.value} id={itemData.item.id}/>}/> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    padding:70
  }
})

