import { FC } from 'react'
import { ThemedView } from './ThemedView'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'

interface ISeparatorProps {
  style?: StyleProp<ViewStyle>
}
export const Separator: FC<ISeparatorProps> = ({ style }) => {
  return <ThemedView style={[{ borderWidth: StyleSheet.hairlineWidth, flex: 1, width: '100%' }, style]} />
}