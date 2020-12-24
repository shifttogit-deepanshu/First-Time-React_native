import React,{useState} from "react"

import {StyleSheet,View, FlatList} from "react-native"

import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default app = ()=>{
  const [courseGoals,setCourseGoals] = useState([])
  const handleAddItem = (enteredGoal)=>{
    setCourseGoals((currentGoals)=>setCourseGoals([...currentGoals,{id:Math.random().toString(),value:enteredGoal}]))
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
      <GoalInput onAdd={handleAddItem}/>
      <View>
        <FlatList
        data={courseGoals} renderItem={itemData=><GoalItem deleteItem={handleDeleteItem} title={itemData.item.value} id={itemData.item.id}/>}/> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    padding:50
  }
})

