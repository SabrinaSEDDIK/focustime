import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../utils/colors'
import { fontSizes, spacing } from '../utils/sizes'
import { TextInput } from 'react-native-paper'
import { RoundedButton } from '../components/RoundedButton'

export const Focus = ({addSubject}) => {

  const [subject, setSubject] = useState(null)
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          label="What would you like to focus on?"
          onChangeText={setSubject}/>
        <RoundedButton title="+" size={50} onPress={()=> addSubject(subject)} />
      </View>
    </View>
  )
}
  


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.lg, //25
    alignItems: 'center'
  },
  textInput: {
    flex: 1, //prend autant de place que possible
    marginRight: spacing.sm //8
  },
  
})


