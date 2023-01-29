import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  seperator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export const Options = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
      </TouchableOpacity>

      <View style={styles.seperator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
      </TouchableOpacity>

      <View style={styles.seperator} />

      <TouchableOpacity style={styles.row}>
        <Text style={styles.text}>Themes</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
