import type { FC, PropsWithChildren } from 'react'
import { StyleSheet } from 'react-native'
import { ThemedView, type ThemedViewProps } from './ThemedView'

interface ICardProps extends PropsWithChildren, ThemedViewProps {

}

export const Card: FC<ICardProps> = ({ children, ...otherProps }) => {
  return (
    <ThemedView {...otherProps} style={styles.card}>
      {children}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  card: {

  }
})