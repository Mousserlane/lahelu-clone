import type { FC, PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native'
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

interface IBottomSheetProps extends PropsWithChildren { }
export const BottomSheet: FC<IBottomSheetProps> = ({ children }) => {
  return (
    <View style={styles.overlay}>
      <ThemedView style={styles.sheet}>
        {children}
      </ThemedView>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    zIndex: 99,
    backgroundColor: '#0006',
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    justifyContent: 'flex-end'
    // flexDirection: 'column',
    // height: 200
  },
  sheet: {
    paddingHorizontal: 16,
    // paddingVertical: 24,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    minHeight: 64
  }
})