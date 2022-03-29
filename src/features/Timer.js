import React, { useState } from 'react'
import { View, Text, StyleSheet, Vibration } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import { useKeepAwake } from 'expo-keep-awake'

import { colors } from '../utils/colors'
import { fontSizes, spacing } from '../utils/sizes'
import { Countdown } from '../components/Countdown'
import { RoundedButton } from '../components/RoundedButton'
import { Timing } from './Timing'

export const Timer = ({ focusSubject, clearSubject, onTimeEnd }) => {

  const [isStarted, setIsStarted] = useState(false)
  const [progress, setProgress] = useState(1)
  const [minutes, setMinutes] = useState(0.1)

  const onEnd = () => {
    Vibration.vibrate([1000, 400, 2000, 400])
    setIsStarted(false)
    onTimeEnd()
  }

  useKeepAwake()

  return(
    <View style={ styles.container }>

      <View style={ styles.countdown }>
        <Countdown 
          isPaused={ !isStarted } 
          minutes={minutes} 
          onProgress={ setProgress } 
          onEnd={ onEnd } 
        />
        <View style={ { paddingTop: spacing.xxl } }>
          <Text style={ styles.title }>Focusing on:</Text>
          <Text style={ styles.task }>{focusSubject}</Text>
        </View>
      </View>

      <ProgressBar progress={ progress } color={ colors.blue } style={{height: spacing.sm}} />

      <View style={ styles.timingWrapper }>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={ styles.buttonWrapper }>
        { !isStarted && (<RoundedButton title="start" onPress={ ()=>{setIsStarted(true)} }/>) }
        { isStarted && (<RoundedButton title="pause" onPress={ ()=>{setIsStarted(false)} }/>) }
      </View>

      <View style={ styles.clearSubjectWrapper }>
        <RoundedButton size={50} title="-" onPress={ clearSubject } />
      </View>

    </View>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown:{
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red'
  },
  timingWrapper:{
    flex: 0.1,
    paddingTop: spacing.xxl
  },
  buttonWrapper:{
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearSubjectWrapper:{
    alignItems: 'center'
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  task:{
    color: colors.white,
    textAlign: 'center'
  }
})