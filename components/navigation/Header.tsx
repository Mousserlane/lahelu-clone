import React, { FC } from 'react'
import { ThemedView } from '../ThemedView';
import { StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ThemedText } from '../ThemedText';

interface IBottomSheetNavMenu {
  route?: string;
}

export const Header: FC<IBottomSheetNavMenu> = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.leftContainer}>
        <MaterialIcons name="menu" size={18} />
        <ThemedText style={styles.logo}>LAHELU</ThemedText>
      </ThemedView>
      <MaterialIcons name="search" size={20} />
    </ThemedView>
  )
}

const SHADOW_COLOR = "#aad5f1";
const SHADOW_OFFSET: { width: number, height: number } = { width: 1.5, height: 1.5 }
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3'
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    width: "90%",
  },
  logo: {
    marginRight: "auto",
    textShadowColor: SHADOW_COLOR,
    textShadowOffset: SHADOW_OFFSET,
    shadowColor: SHADOW_COLOR,
    shadowOffset: SHADOW_OFFSET,
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    fontWeight: "900",
    color: "#55a4ff",
    marginLeft: 8
  }
})