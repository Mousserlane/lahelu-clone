import type { FC, PropsWithChildren } from 'react'
import { StyleSheet } from 'react-native'
import { ThemedView } from './ThemedView'

interface IPillProps extends PropsWithChildren {
}

export const Pill: FC<IPillProps> = ({ children }) => {
  return (
    <ThemedView style={styles.container}>
      {children}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginVertical: 8,
    borderWidth: 1,
    marginRight: 8,
    minWidth: 64,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
})