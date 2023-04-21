import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import { COLORS } from '../../utils/theme';

export const Loading = () => {
    return(

    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color= {COLORS.secondaty} />
    </View>
        )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

