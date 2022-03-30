import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { colors } from '../utils/colors'
import { fontSizes, spacing } from '../utils/sizes'
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../components/RoundedButton'

export const FocusHistory = ({ focusHistory }) => {

  const renderItem = ({item}) => <Text style={styles.item}>{item}</Text>
  const flatList = focusHistory.length !== 0 ? <FlatList data={focusHistory} renderItem={renderItem} keyExtractor={(item, index)=> index.toString}/> 
  : <Text style={styles.item}>Nothing yet</Text>
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>We've already focused on:</Text>
      {flatList}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, //nécessaire pour le scroll
    padding: spacing.md,
  },
  title:{
    textAlign: 'center',
    fontSize : fontSizes.md,
    fontWeight: 'bold',
    marginBottom: spacing.lg,
    color: 'white'
  },
  item:{
    textAlign: 'center',
    padding: spacing.sm,
    fontSize : fontSizes.md,
    color: 'white'
  }
})