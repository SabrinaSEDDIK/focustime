import React, {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import { colors } from './src/utils/colors'
import { fontSizes, spacing } from './src/utils/sizes'
import { Focus } from './src/features/Focus'
import { FocusHistory } from './src/features/FocusHistory'
import { Timer } from './src/features/Timer'
import { RoundedButton } from './src/components/RoundedButton'

// or any pure javascript modules available in npm


export default function App() {

  const [currentSubject, setCurrentSubject] = useState(null)
  const [focusHistory, setFocusHistory] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? 
        <>
          <Focus addSubject={setCurrentSubject}/>
          <FocusHistory focusHistory={focusHistory}/>
          <View style={{alignItems: 'center'}}>
            <RoundedButton style={styles.button} size={100} title="clear" onPress={ ()=>{setFocusHistory([])} } />
          </View>
        </>
         : 
        <Timer 
          focusSubject={currentSubject}
          onTimeEnd={ ()=>{ setFocusHistory([...focusHistory, currentSubject]) } }
          clearSubject={()=> setCurrentSubject(null)} />
      }
    </SafeAreaView>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  button:{
    marginVertical: spacing.lg
  }
  
});
