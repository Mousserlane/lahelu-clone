import type { FC, ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { ThemedView } from './ThemedView'
import { ThemedText } from './ThemedText'

type StyleType = "basic" | "sawer"
interface IPillProps {
  text: string;
  leftElement?: ReactNode;
  type?: StyleType;
  textColor?: string
}

export const Pill: FC<IPillProps> = ({ text, leftElement, type = "basic" }) => {
  const styleMap = {
    "basic": styles.basic,
    "sawer": styles.sawer
  }
  return (
    <ThemedView style={[styles.container, styleMap[type]]}>
      {leftElement}
      <ThemedText type="smallBold" style={styleMap[type]}>{text}</ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    height: 24,
    paddingHorizontal: 8,
    borderWidth: 1,
    marginRight: 8,
    width: "auto",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  basic: {
    backgroundColor: 'transparent'
  },
  sawer: {
    backgroundColor: '#DD952A',
    color: "#FFFFFF",
    borderColor: "#DD952A"
  }
})