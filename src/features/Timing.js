import React, { useState } from 'react'
import { View, Text, StyleSheet, Vibration } from 'react-native'

import { colors } from '../utils/colors'
import { fontSizes, spacing } from '../utils/sizes'
import { RoundedButton } from '../components/RoundedButton'

export const Timing = ({ onChangeTime }) => {

  const TIME_1 = 10;
  const TIME_2 = 15;
  const TIME_3 = 20;

  return(
    <View style={ styles.timingButton }>
      <RoundedButton size={75} title={TIME_1} onPress={ ()=>{onChangeTime(TIME_1)} } />
      <RoundedButton size={75} title={TIME_2} onPress={ ()=>{onChangeTime(TIME_2)} } />
      <RoundedButton size={75} title={TIME_3} onPress={ ()=>{onChangeTime(TIME_3)} } />
    </View>
    )
}

const styles = StyleSheet.create({
  timingButton:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-around",
    //backgroundColor: 'red'
  }
})